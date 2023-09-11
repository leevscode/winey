/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev */

import axios from "axios";

// 검색결과 get
export const getSearchPatch = async ({ clickPage, urlData, sortList }) => {
  console.log("clickPage", clickPage);
  console.log("urlData", urlData);
  console.log("sortList", sortList);
  try {
    const res = await axios.get(
      `/api/search?page=${clickPage}&sort=${sortList.value}&${urlData}`,
    );
    console.log("서치res", res.config.url);
    const result = res.data;
    console.log("결과보여줘result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// import axios from "axios";
// import { client } from "./client";

// // 검색결과 get
// export const getSearchItem = async ({
//   urlAdd,
//   // page,
//   pageState,
//   setPageState,
//   exploreSort,
//   setExploreResult,
//   setHasNextPage,
//   setTotalCount,
// }) => {
//   console.log("*urlAdd api", urlAdd);
//   console.log("*pageState api", pageState);
//   console.log("*exploreSort api", exploreSort);
//   // console.log("**exploreSort.value", exploreSort.value || 0);
//   try {
//     const res = await axios.get(
//       `/api/search?page=${pageState || 1}&sort=${exploreSort.value || 0}&${
//         urlAdd.url
//       }`,
//     );
//     console.log("서치res", res);
//     const result = res.data;
//     console.log("결과보여줘result", result);
//     setTotalCount(result.count);
//     setExploreResult(prev => [...prev, ...result.wineList]);
//     setHasNextPage(result.wineList.length === 9);
//     if (result.wineList.length) {
//       setPageState((pageState += 1));
//     }
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };
