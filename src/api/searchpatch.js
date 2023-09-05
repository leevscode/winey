/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "./client";

// 검색결과 get
export const getSearchItem = async ({
  urlData,
  page,
  exploreSort,
  setExploreResult,
  setHasNextPage,
  setTotalCount,
}) => {
  console.log("**page.current", page.current || 1);
  console.log("**exploreSort.value", exploreSort.value || 0);
  try {
    const res = await client.get(
      `/api/search?page=${page.current || 1}&sort=${exploreSort.value || 0}&${
        urlData.url
      }`,
    );
    console.log("서치res", res);
    const result = res.data;
    console.log("결과보여줘result", result);
    // setExploreResult(result.wineList);
    setTotalCount(result);
    setExploreResult(prev => [...prev, ...result.wineList]);
    setHasNextPage(result.wineList.length === 9);
    if (result.wineList.length) {
      page.current += 1;
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};
