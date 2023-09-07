/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { ConfigProvider } from "antd";
import { FilterButtonWrap, SearchBarWrap } from "../../style/SearchStyle";
import SearchFilter, { searchFilterRecoil } from "./SearchFilter";
import { useNavigate } from "react-router";
import { getSearchItem } from "../../api/searchpatch";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { queryUrlRecoil } from "../../pages/search/SearchProduct";
import { searchSortRecoil } from "./SearchList";
import { NoticeModal } from "../../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
import { Gradation, opacity } from "../../style/GlobalStyle";
import { AnimatePresence } from "framer-motion";

// recoil
export const searchTextRecoil = atom({
  key: `searchTextRecoil/${v4()}`,
  default: [],
});
export const searchResultRecoil = atom({
  key: `searchResultRecoil/${v4()}`,
  default: [],
});
const getQueryRecoil = selector({
  key: `getQueryRecoil/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    return { url };
  },
});
export const searchButtonActive = selector({
  key: `searchButtonActive/${v4()}`,
  // 값을 읽겠다
  get: ({ get }) => {
    const filter = get(searchFilterRecoil);
    const text = get(searchTextRecoil);
    return { filter, text };
  },
});

const SearchBar = () => {
  // recoil get을 저장하자
  const urlData = useRecoilValue(getQueryRecoil);
  const isButton = useRecoilValue(searchButtonActive);
  // recoil
  const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
  const [exploreText, setExploreText] = useRecoilState(searchTextRecoil);
  const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

  const navigate = useNavigate();

  // filter component 열고닫는 state
  const [isFilterActive, setIsFilterActive] = useState(false);

  // filters 버튼 핸들러
  const handleOpenfilter = e => {
    e.preventDefault();
    setIsFilterActive(!isFilterActive);
  };
  const closefilter = e => {
    setIsFilterActive(false);
    // navigate();
  };
  const handleTextSearch = e => {
    setExploreText(e.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = e => {
    if (isButton.filter.length === 0 && isButton.text.length === 0) {
      console.log("선택값없음");
      setIsModalOpen(true);
      return;
    } else {
      getSearchItem({ urlData, exploreSort, setExploreResult });
      setIsFilterActive(false);
      setExploreSort({
        value: 0,
        label: "최신등록순",
      });
      return;
    }
  };

  return (
    <>
      <SearchBarWrap>
        <button className="filterbutton" onClick={handleOpenfilter}>
          <i>
            <FontAwesomeIcon icon={faFilter} />
          </i>
          상세검색
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
            value={exploreText}
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
      {/* 상세검색 키워드 */}
      <AnimatePresence>
        {isFilterActive === true && (
          <FilterButtonWrap
            initial={{ opacity: 0, top: "0" }}
            animate={{ opacity: 1, top: "12rem" }}
            exit={{ opacity: 0, top: "0" }}
          >
            <SearchFilter
              setIsFilterActive={setIsFilterActive}
              isFilterActive={isFilterActive}
            />
          </FilterButtonWrap>
        )}
      </AnimatePresence>
    </>
  );
};

export default SearchBar;
