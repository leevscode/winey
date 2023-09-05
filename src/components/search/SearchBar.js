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

// recoil
export const searchTextRecoil = atom({
  key: "searchTextRecoil1",
  default: [],
});
export const searchResultRecoil = atom({
  key: "searchResultRecoil1",
  default: [],
});
const getQueryRecoil = selector({
  key: "getQueryRecoil1",
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    return { url };
  },
});
export const searchButtonActive = selector({
  key: "searchButtonActive1",
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
      getSearchItem({ urlData, setExploreResult });
      setIsFilterActive(false);
      setExploreSort({
        value: 0,
        label: "최신등록순",
      });
      return;
    }
  };

  return (
    <SearchBarWrap>
      <button className="filterbutton" onClick={handleOpenfilter}>
        <FontAwesomeIcon icon={faFilter} />
        상세검색
      </button>
      <FilterButtonWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <SearchFilter
          setIsFilterActive={setIsFilterActive}
          isFilterActive={isFilterActive}
        />
      </FilterButtonWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
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
          size="large"
        />
      </ConfigProvider>
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
        </p>{" "}
      </NoticeModal>

      <div className="SearchUnderbar"></div>
    </SearchBarWrap>
  );
};

export default SearchBar;
