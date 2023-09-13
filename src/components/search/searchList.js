/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { v4 } from "uuid";
import { makeUrlRecoil } from "./SearchFilter";
import { SearchListWrap } from "../../style/SearchStyle";
import { ConfigProvider, Select } from "antd";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import ProductCartModal from "../product/ProductCartModal";
import SearchListItem from "./SearchListItem";
import { ProductListItemWrap } from "../../style/ProductListStyle";
import { Gradation } from "../../style/GlobalStyle";
import { sortingOptions } from "./SearchCateExport";
import { getSearchPatch } from "../../api/searchpatch";
import SearchPaginate, { pageRecoil } from "./SearchPaginate";
import { searchResultRecoil } from "./SearchBar";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 정렬 recoil
export const sortRecoil = atom({
  key: `sortRecoil/${v4()}`,
  default: {
    value: 0,
    label: "오랜등록순",
  },
});
// 페이지정보 읽기
export const readpageRecoil = selector({
  key: `readpageRecoil/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(pageRecoil);
    return result;
  },
});
// url정보 읽기
export const readUrlRecoil = selector({
  key: `readUrlRecoil/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(makeUrlRecoil);
    return result;
  },
});

const SearchList = () => {
  // 페이지 recoil
  const [clickPage, setClickPage] = useRecoilState(pageRecoil);
  // recoil
  const [sortList, setSortList] = useRecoilState(sortRecoil);
  // 검색결과 받아오는 recoil
  const [resultData, setResultData] = useRecoilState(searchResultRecoil);
  // url Make
  const urlData = useRecoilValue(readUrlRecoil);

  // 검색어 없음 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSortChange = async e => {
    // console.log("sort e", e);
    setClickPage(1);
    try {
      setSortList(e);
      const result = await getSearchPatch({
        urlData,
        sortList: e,
        clickPage: 1,
      });
      return setResultData(result);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    // console.log("-----sort re-render", sortList);
  }, [sortList]);
  return (
    <div>
      <SearchListWrap>
        {resultData?.wineList?.length !== 0 ? (
          <ProductListItemWrap>
            {/* 상품목록 */}
            <ul>
              <li>
                총 <span>{resultData?.count}</span>개
              </li>
              <li>
                {/* 상품정렬 */}
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: Gradation.wineD,
                      borderRadius: 4,
                      fontSize: 12,
                      controlHeight: 24,
                      colorBorder: "transparent",
                      colorPrimaryHover: "transparent",
                      fontFamily:
                        '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                    },
                  }}
                >
                  <Select
                    value={sortList}
                    onChange={e => handleSortChange({ value: e })}
                    options={sortingOptions}
                  />
                </ConfigProvider>
              </li>
            </ul>
            <ContentsListItemWrap>
              <SearchListItem setIsModalOpen={setIsModalOpen} />
            </ContentsListItemWrap>
            <SearchPaginate />
          </ProductListItemWrap>
        ) : (
          <div className="noSearchItem">
            <i>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <p>해당 상품이 없습니다. 다시 검색 해주세요.</p>
          </div>
        )}
        {/* 장바구니 완료 모달창 */}
        <ProductCartModal
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </SearchListWrap>
    </div>
  );
};

export default SearchList;
