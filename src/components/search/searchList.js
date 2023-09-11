/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
  const clickPage = useRecoilValue(readpageRecoil);
  // url Make
  const urlData = useRecoilValue(readUrlRecoil);
  // recoil
  const [sortList, setSortList] = useRecoilState(sortRecoil);
  // 검색결과 받아오는 recoil
  const [resultData, setResultData] = useRecoilState(searchResultRecoil);
  console.log("resultData", resultData);
  // 검색어 없음 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSortChange = async e => {
    console.log("sort e", e);
    try {
      setSortList(e);
      const result = await getSearchPatch({
        urlData,
        sortList: e,
        clickPage,
      });
      return setResultData(result);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    console.log("-----sort re-render", sortList);
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
              <SearchListItem />
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

// import { ConfigProvider, Select } from "antd";
// import React, { useEffect, useRef, useState } from "react";
// import { ContentsListItemWrap } from "../../style/GlobalComponents";
// import SearchListItem from "./SearchListItem";
// import ProductCartModal from "../product/ProductCartModal";
// import { ProductListItemWrap } from "../../style/ProductListStyle";
// import { Gradation, Maincolor } from "../../style/GlobalStyle";
// import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
// import { queryUrlRecoil } from "../../pages/search/SearchProduct";
// import { getSearchItem } from "../../api/searchpatch";
// import { FadeLoader } from "react-spinners";
// import { useInView } from "react-intersection-observer";
// import { v4 } from "uuid";
// import { SearchListWrap } from "../../style/SearchStyle";
// import { searchResultRecoil } from "./SearchBar";
// import { searchFilterRecoil } from "./SearchFilter";

// export const searchSortRecoil = atom({
//   key: `searchSortRecoil/${v4()}`,
//   default: {
//     value: 1,
//     label: "최신등록순",
//   },
// });
// export const searchGetAddress = selector({
//   key: `searchGetAddress/${v4()}`,
//   // 값을 읽겠다
//   get: ({ get }) => {
//     const url = get(queryUrlRecoil);
//     return { url };
//   },
// });
// export const searchGetResult = selector({
//   key: `searchGetResult/${v4()}`,
//   // 값을 읽겠다
//   get: ({ get }) => {
//     const result = get(searchResultRecoil);
//     return { result };
//   },
// });

// const SearchList = ({
//   setHasNextPage,
//   setTotalCount,
//   hasNextPage,
//   totalCount,
//   pageState,
//   setPageState,
// }) => {
//   // recoil
//   const urlAdd = useRecoilValue(searchGetAddress);
//   const urlDataResult = useRecoilValue(searchGetResult);
//   console.log("urlAdd", urlAdd);
//   console.log("urlDataResult", urlDataResult);

//   const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
//   const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

//   const sortingOptions = [
//     {
//       value: 1,
//       label: "최신등록순",
//     },
//     // {
//     //   value: 1,
//     //   label: "오랜등록순",
//     // },
//     {
//       value: 2,
//       label: "높은가격순",
//     },
//     {
//       value: 3,
//       label: "낮은가격순",
//     },
//   ];

//   // // 화면 데이터 state
//   // const [hasNextPage, setHasNextPage] = useState(true);
//   // // 토탈 데이터 count
//   // const [totalCount, setTotalCount] = useState(0);
//   // 검색어 없음 모달
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [explorefilter, setExplorefilter] = useRecoilState(searchFilterRecoil);

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   const handleSortChange = e => {
//     setExploreSort(e);
//   };

//   //react-intersection-observer state
//   const [ref, inView] = useInView();
//   // const page = useRef(1);
//   // console.log("page", page);

//   useEffect(() => {
//     // setExploreResult("");
//     if (inView && hasNextPage) {
//       try {
//         getSearchItem({
//           urlAdd,
//           // page,
//           pageState,
//           setPageState,
//           exploreSort,
//           setExploreResult,
//           setHasNextPage,
//           setTotalCount,
//         });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   }, [explorefilter, exploreSort, hasNextPage, inView, pageState, urlAdd]);
//   console.log("exploreResult", exploreResult);

//   return (
//     <SearchListWrap>
//       <ProductListItemWrap>
//         {/* 상품목록 */}
//         <ul>
//           <li>
//             총 <span>{totalCount}</span>개
//           </li>
//           <li>
//             {/* 상품정렬 */}
//             <ConfigProvider
//               theme={{
//                 token: {
//                   colorPrimary: Gradation.wineD,
//                   borderRadius: 4,
//                   fontSize: 12,
//                   controlHeight: 24,
//                   colorBorder: "transparent",
//                   colorPrimaryHover: "transparent",
//                   fontFamily:
//                     '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
//                 },
//               }}
//             >
//               <Select
//                 // defaultValue={sortingOptions[0]}
//                 value={exploreSort}
//                 onChange={e => handleSortChange(e)}
//                 options={sortingOptions}
//               />
//             </ConfigProvider>
//           </li>
//         </ul>
//         <ContentsListItemWrap>
//           {/* 상품 리스트 */}
//           <SearchListItem
//             setIsModalOpen={setIsModalOpen}
//             hasNextPage={hasNextPage}
//             urlDataResult={urlDataResult}
//           />
//         </ContentsListItemWrap>
//         {/* 로딩 컴포넌트 */}
//         {hasNextPage && (
//           <div ref={ref} className="loading-box">
//             <div>
//               <FadeLoader
//                 color={Maincolor.redBold}
//                 height={9}
//                 margin={0}
//                 radius={10}
//                 speedMultiplier={1}
//                 width={5}
//               />
//             </div>
//           </div>
//         )}
//       </ProductListItemWrap>
//       {/* 장바구니 완료 모달창 */}
//       <ProductCartModal
//         isModalOpen={isModalOpen}
//         handleOk={handleOk}
//         handleCancel={handleCancel}
//       />
//     </SearchListWrap>
//   );
// };

// export default SearchList;
