import React, { useState } from "react";
import Search from "antd/es/input/Search";
import { ConfigProvider } from "antd";
import { FilterButtonWrap, SearchBarWrap } from "../../style/SearchStyle";
import SearchFilter from "./SearchFilter";
import { useNavigate } from "react-router";
const SearchBar = () => {
  const navigate = useNavigate();
  // filter component
  const [isFilterActive, setIsFilterActive] = useState(false);
  // 필터선택값state
  const [selectFilter, setSelectFilter] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [searchResult, setSearchResult] = useState()

  // filters 버튼 핸들러
  const handleOpenfilter = e => {
    e.preventDefault();
    setIsFilterActive(!isFilterActive);
  };
  const closefilter = e => {
    setIsFilterActive(false);
    // navigate();
  };

  const onSearch = e => {
    selectFilter;
    textSearch;
  };

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
        {isFilterActive ? (
          <SearchFilter
            setSelectFilter={setSelectFilter}
            selectFilter={selectFilter}
          />
        ) : null}
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
          value={textSearch}
          onSearch={onSearch}
          size="large"
        />
      </ConfigProvider>
      <div className="SearchUnderbar"></div>
    </SearchBarWrap>
  );
};

export default SearchBar;
