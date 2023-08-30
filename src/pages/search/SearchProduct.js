/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import SearchBar, {
  searchResultRecoil,
  searchTextRecoil,
} from "../../components/search/SearchBar";
import SearchList, {
  itemScrollRecoil,
  searchSortRecoil,
} from "../../components/search/SearchList";
import { searchFilterRecoil } from "../../components/search/SearchFilter";
import { atom, selector, useRecoilValue, useRecoilState } from "recoil";
import { SearchPageWrap } from "../../style/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWineGlassEmpty } from "@fortawesome/free-solid-svg-icons";

// recoil
export const queryUrlRecoil = atom({ key: "queryUrlRecoil", default: [] });
export const searchReadRecoil = selector({
  key: "searchReadRecoil",
  // 값을 읽겠다
  get: ({ get }) => {
    const filter = get(searchFilterRecoil);
    const text = get(searchTextRecoil);
    const sort = get(searchSortRecoil);
    const page = get(itemScrollRecoil);
    return { filter, text, sort, page };
  },
});

const SearchProduct = () => {
  // recoil read
  const searchContent = useRecoilValue(searchReadRecoil);
  // recoil state
  const [urlState, setUrlState] = useRecoilState(queryUrlRecoil);

  console.log("searchContent", searchContent);

  // 담은 필터값을 쿼리로 풀어서 담자
  const convertQueryFilter = () => {
    let queryString = "";
    // 와인종류
    if (searchContent.filter.cate !== undefined) {
      queryString += `cate=${searchContent.filter.cate}&`;
    }
    // 페어링음식
    if (searchContent.filter.bigCate !== undefined) {
      queryString += `bigCate=${searchContent.filter.bigCate}&`;
    }
    // 원산지
    if (searchContent.filter.country !== undefined) {
      queryString += `country=${searchContent.filter.country}&`;
    }
    // 검색단어
    if (searchContent.text !== "") {
      queryString += `text=${searchContent.text}&`;
    }
    // 페이지
    if (searchContent.page.current !== undefined) {
      queryString += `page=${searchContent.page.current}&`;
    } else {
      queryString += `page=1&`;
    }
    // 페이지당 개수
    queryString += `row=9&`;
    // 정렬
    if (searchContent.sort.value !== undefined) {
      queryString += `sort=${searchContent.sort.value}&`;
    } else {
      queryString += `sort=0&`;
    }

    // 가격대
    if (searchContent.filter.price !== undefined) {
      queryString += `price=${searchContent.filter.price}&`;
    }

    // 마지막에는 & 제외하기
    if (queryString.endsWith("&")) {
      queryString = queryString.slice(0, -1);
    }

    return queryString;
  };

  useEffect(() => {
    setUrlState(convertQueryFilter());
  }, [searchContent, urlState]);
  return (
    <SearchPageWrap>
      <SearchBar />
      {searchContent.filter.length === 0 && searchContent.text.length === 0 ? (
        <div className="noSearchItem">
          <i>
            <FontAwesomeIcon icon={faWineGlassEmpty} />
          </i>
          <p>상품이 존재하지 않습니다.</p>
          <p>검색어를 입력해 주세요.</p>
        </div>
      ) : (
        <SearchList />
      )}
    </SearchPageWrap>
  );
};

export default SearchProduct;
