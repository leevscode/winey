/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect } from "react";
import SearchBar, { searchTextRecoil } from "../../components/search/SearchBar";
import SearchList from "../../components/search/SearchList";
import { SearchPageWrap } from "../../style/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { readResultData } from "../../components/search/SearchListItem";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchFilterRecoil } from "../../components/search/SearchFilter";

const SearchProduct = () => {
  const setInputText = useSetRecoilState(searchTextRecoil);
  const setClickfilter = useSetRecoilState(searchFilterRecoil);

  const listData = useRecoilValue(readResultData);

  useEffect(() => {
    setInputText("");
    setClickfilter("");
  }, []);
  return (
    <SearchPageWrap>
      {/* 검색 키워드*/}
      <SearchBar />
      {listData?.length === 0 ? (
        <div className="noSearchItem">
          <i>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i>
          <p>검색어를 입력해 주세요.</p>
        </div>
      ) : (
        <SearchList />
      )}
      {/* <SearchPaginate /> */}
    </SearchPageWrap>
  );
};

export default SearchProduct;
