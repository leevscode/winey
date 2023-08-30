/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { ConfigProvider, Select } from "antd";
import React, { useEffect, useState } from "react";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import SearchListItem from "./SearchListItem";
import ProductCartModal from "../product/ProductCartModal";
import { ProductListItemWrap } from "../../style/ProductListStyle";
import { Gradation } from "../../style/GlobalStyle";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { searchResultRecoil } from "./SearchBar";
import { queryUrlRecoil } from "../../pages/search/SearchProduct";
import { getSearchItem } from "../../api/searchpatch";

export const searchSortRecoil = atom({
  key: "searchSortRecoil",
  default: [
    {
      value: 0,
      label: "최신등록순",
    },
  ],
});
// recoil get
export const searchGetResult = selector({
  key: "searchGetResult",
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    const result = get(searchResultRecoil);
    return { result, url };
  },
});

const SearchList = () => {
  const urlData = useRecoilValue(searchGetResult);
  const finalItem = useRecoilValue(searchGetResult);
  console.log("finalItem", finalItem);
  const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
  const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

  const sortingOptions = [
    {
      value: 0,
      label: "최신등록순",
    },
    {
      value: 1,
      label: "오랜등록순",
    },
    {
      value: 2,
      label: "높은가격순",
    },
    {
      value: 3,
      label: "낮은가격순",
    },
  ];
  // 화면 데이터 state
  const [hasNextPage, setHasNextPage] = useState(true);

  // 장바구니 완료 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSortChange = e => {
    setExploreSort(e);
  };
  useEffect(() => {
    getSearchItem({ urlData, setExploreResult });
  }, [exploreSort]);
  return (
    <div>
      <ProductListItemWrap>
        {/* 상품목록 */}
        <ul>
          <li>
            검색 상품 총 <span>{finalItem.result.count}</span>개
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
                // defaultValue={sortingOptions[0]}
                value={exploreSort}
                onChange={e => handleSortChange(e)}
                options={sortingOptions}
              />
            </ConfigProvider>
          </li>
        </ul>
        <ContentsListItemWrap>
          {/* 상품 리스트 */}
          <SearchListItem
            setIsModalOpen={setIsModalOpen}
            hasNextPage={hasNextPage}
            finalItem={finalItem}
          />
        </ContentsListItemWrap>
      </ProductListItemWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default SearchList;
