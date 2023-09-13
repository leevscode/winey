/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { FilterButtonWrap, SearchBarWrap } from "../../style/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faFilter,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { ConfigProvider } from "antd";
import Search from "antd/es/input/Search";
import { NoticeModal } from "../../style/GlobalComponents";
import { Gradation, opacity } from "../../style/GlobalStyle";
import { AnimatePresence } from "framer-motion";
import SearchFilter, {
  itemSortRecoil,
  makeUrlRecoil,
  readSortRecoil,
  searchFilterRecoil,
} from "./SearchFilter";
import { v4 } from "uuid";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { getSearchPatch } from "../../api/searchpatch";
import { pageRecoil } from "./SearchPaginate";

// 텍스트 저장 recoil
export const searchTextRecoil = atom({
  key: `searchTextRecoil/${v4()}`,
  default: [],
});
// 검색결과 저장 recoil
export const searchResultRecoil = atom({
  key: `searchResultRecoil/${v4()}`,
  default: [],
});
// 선택된 필터정보 읽자
export const readfilterClickItems = selector({
  key: `readfilterClickItems/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const result = get(searchFilterRecoil);
    return result;
  },
});

const SearchBar = () => {
  // recoil
  const sortList = useRecoilValue(readSortRecoil);
  // 선택된 필터를 불러오자
  const filters = useRecoilValue(readfilterClickItems);
  // 페이지 recoil
  const [clickPage, setClickPage] = useRecoilState(pageRecoil);

  // 텍스트 저장하는 recoil
  const [inputText, setInputText] = useRecoilState(searchTextRecoil);
  // url Make
  const [urlData, setUrlData] = useRecoilState(makeUrlRecoil);
  // 검색결과 받아오는 recoil
  const setResultData = useSetRecoilState(searchResultRecoil);

  // 필터창 열고닫는 state
  const [isFilterActive, setIsFilterActive] = useState(false);
  // 검색어 미입력시 출력되는 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  // filters 오픈 버튼 핸들러
  const handleOpenfilter = e => {
    e.preventDefault();
    setIsFilterActive(!isFilterActive);
  };

  // 검색어 입력창 핸들러
  const handleTextSearch = e => {
    setInputText(e.target.value);
  };

  // 모달ok
  const handleOk = () => {
    setIsModalOpen(false);
  };
  // 모달 cancel
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 주소를 변환하자
  const makeUrl = () => {
    let query = "";
    if (inputText.length !== 0) {
      query += `text=${inputText}&`;
    }
    // 페이지당 개수
    query += `row=6&`;
    // 와인종류
    if (filters.cate && filters.cate !== "") {
      query += `cate=${filters.cate}&`;
    }
    // 가격대
    if (filters.price && filters.price !== "") {
      query += `price=${filters.price}&`;
    }
    // 음식
    if (filters.food && filters.food !== "") {
      query += `bigCate=${filters.food}&`;
    }
    // 나라
    if (filters.country && filters.country !== "") {
      query += `country=${filters.country}&`;
    }
    // 마지막에는 & 제외하기
    if (query.endsWith("&")) {
      query = query.slice(0, -1);
    }
    // return setUrlData(query);
    return query;
  };

  // 텍스트 검색버튼
  const onSearch = async e => {
    setClickPage(1);
    try {
      const result = await getSearchPatch({
        urlData,
        sortList,
        clickPage,
      });
      return setResultData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const temp = makeUrl();
    setUrlData(temp);
  }, [filters, inputText]);

  return (
    <>
      <SearchBarWrap>
        <button className="filterbutton" onClick={handleOpenfilter}>
          <i>
            {isFilterActive === false ? (
              <FontAwesomeIcon icon={faFilter} />
            ) : (
              <FontAwesomeIcon icon={faXmark} />
            )}
          </i>
          {isFilterActive === false ? "상세검색" : "닫기"}
        </button>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: Gradation.wineD,
              colorBorder: opacity.grayLight,
              fontFamily:
                '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            },
          }}
        >
          <Search
            placeholder="검색할 단어를 입력해 주세요."
            allowClear
            value={inputText}
            // onChange={e => handleTextSearch(e)}
            onChange={handleTextSearch}
            onSearch={onSearch}
            enterButton
          />
        </ConfigProvider>
      </SearchBarWrap>
      {/* 모달창 */}
      <NoticeModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>
          <i>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </i>
          검색어를 입력해 주세요.
        </p>
      </NoticeModal>
      {/* 상세검색 키워드 필터 */}
      <AnimatePresence>
        {isFilterActive === true && (
          <FilterButtonWrap
            initial={{ opacity: 0, marginTop: "-327px" }}
            animate={{ opacity: 1, marginTop: "0" }}
            exit={{ opacity: 0, marginTop: "-327px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SearchFilter isFilterActive={isFilterActive} />
          </FilterButtonWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
