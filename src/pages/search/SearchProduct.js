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
  console.log("listData length", listData?.length);

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

// import React, { useEffect, useState } from "react";
// import SearchBar, {
//   searchResultRecoil,
//   searchTextRecoil,
// } from "../../components/search/SearchBar";
// import SearchList, {
//   searchSortRecoil,
// } from "../../components/search/SearchList";
// import { searchFilterRecoil } from "../../components/search/SearchFilter";
// import { atom, selector, useRecoilValue, useRecoilState } from "recoil";
// import { SearchPageWrap } from "../../style/SearchStyle";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { v4 } from "uuid";

// // recoil
// export const queryUrlRecoil = atom({
//   key: `queryUrlRecoil/${v4()}`,
//   default: [],
// });
// export const searchReadRecoil = selector({
//   key: `searchReadRecoil/${v4()}`,
//   // 값을 읽겠다
//   get: ({ get }) => {
//     const filter = get(searchFilterRecoil);
//     const text = get(searchTextRecoil);
//     const sort = get(searchSortRecoil);
//     return { filter, text, sort };
//   },
// });

// const SearchProduct = () => {
//   // filter component 열고닫는 state
//   const [isFilterActive, setIsFilterActive] = useState(false);
//   // recoil read
//   const searchContent = useRecoilValue(searchReadRecoil);
//   // recoil state
//   const [urlState, setUrlState] = useRecoilState(queryUrlRecoil);

//   // 화면 데이터 state
//   const [hasNextPage, setHasNextPage] = useState(true);
//   const [pageState, setPageState] = useState("1");
//   console.log("pageState", pageState);

//   // 토탈 데이터 count
//   const [totalCount, setTotalCount] = useState(0);

//   // 담은 필터값을 쿼리로 풀어서 담자
//   const convertQueryFilter = () => {
//     let queryString = "";
//     // 와인종류
//     if (searchContent.filter.cate !== undefined) {
//       queryString += `cate=${searchContent.filter.cate}&`;
//     }
//     // 페어링음식
//     if (searchContent.filter.bigCate !== undefined) {
//       queryString += `bigCate=${searchContent.filter.bigCate}&`;
//     }
//     // 원산지
//     if (searchContent.filter.country !== undefined) {
//       queryString += `country=${searchContent.filter.country}&`;
//     }
//     // 검색단어
//     if (searchContent.text.length !== 0) {
//       queryString += `text=${searchContent.text}&`;
//     }
//     // 페이지
//     // if (scrollPage.current !== undefined) {
//     //   queryString += `page=${scrollPage.current || 1}&`;
//     // }
//     // 페이지당 개수
//     queryString += `row=9&`;

//     // 정렬
//     // if (searchContent.sort.value !== undefined) {
//     //   queryString += `sort=${searchContent.sort.value || 0}&`;
//     // }

//     // 가격대
//     if (searchContent.filter.price !== undefined) {
//       queryString += `price=${searchContent.filter.price}&`;
//     }

//     // 마지막에는 & 제외하기
//     if (queryString.endsWith("&")) {
//       queryString = queryString.slice(0, -1);
//     }

//     return queryString;
//   };

//   useEffect(() => {
//     setUrlState(convertQueryFilter());
//   }, [searchContent, urlState]);

//   return (
//     <SearchPageWrap>
//       {/* 검색입력창 */}
//       <SearchBar
//         isFilterActive={isFilterActive}
//         setIsFilterActive={setIsFilterActive}
//         setHasNextPage={setHasNextPage}
//         hasNextPage={hasNextPage}
//         totalCount={totalCount}
//         setTotalCount={setTotalCount}
//         pageState={pageState}
//         setPageState={setPageState}
//       />
//       {/* 검색결과 */}
//       {/* {searchContent.filter.length === 0 && searchContent.text.length === 0 ? (
//         <div className="noSearchItem">
//           <i>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </i>
//           <p>검색어를 입력해 주세요.</p>
//         </div>
//       ) : (
//         <SearchList />
//       )} */}
//       {searchContent.filter.length === 0 ? (
//         <div className="noSearchItem">
//           <i>
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </i>
//           <p>검색어를 입력해 주세요.</p>
//         </div>
//       ) : (
//         <SearchList
//           setHasNextPage={setHasNextPage}
//           setTotalCount={setTotalCount}
//           hasNextPage={hasNextPage}
//           totalCount={totalCount}
//           pageState={pageState}
//           setPageState={setPageState}
//         />
//       )}
//     </SearchPageWrap>
//   );
// };

// export default SearchProduct;
