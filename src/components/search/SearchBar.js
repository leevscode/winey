/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { ConfigProvider } from "antd";
import { FilterButtonWrap, SearchBarWrap } from "../../style/SearchStyle";
import SearchFilter from "./SearchFilter";
import { useNavigate } from "react-router";
import { getSearchItem } from "../../api/searchpatch";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { queryUrlRecoil } from "../../pages/search/SearchProduct";
import { searchSortRecoil } from "./SearchList";

// recoil
export const searchTextRecoil = atom({
  key: "searchTextRecoil",
  default: [],
});
export const searchResultRecoil = atom({
  key: "searchResultRecoil",
  default: [],
});
const getQueryRecoil = selector({
  key: "getQueryRecoil",
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    return { url };
  },
});

const SearchBar = () => {
  // recoil get을 저장하자
  const urlData = useRecoilValue(getQueryRecoil);
  // recoil
  const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
  const [exploreText, setExploreText] = useRecoilState(searchTextRecoil);
  const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

  const navigate = useNavigate();
  // filter component
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
    console.log(e.target.value);
    setExploreText(e.target.value);
  };
  const onSearch = e => {
    getSearchItem({ urlData, setExploreResult });
    setIsFilterActive(false);
    setExploreSort({
      value: 0,
      label: "최신등록순",
    });
    return;
  };
  console.log("urlData", urlData);
  console.log("exploreSort", exploreSort);

  return (
    <SearchBarWrap>
      <button className="filterbutton" onClick={handleOpenfilter}>
        상세검색
      </button>
      <FilterButtonWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {isFilterActive ? <SearchFilter /> : null}
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
      <div className="SearchUnderbar"></div>
    </SearchBarWrap>
  );
};

export default SearchBar;
