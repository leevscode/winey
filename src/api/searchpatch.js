/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "./client";

export const getSearchItem = async ({
  urlData,
  page,
  exploreSort,
  setExploreResult,
  setHasNextPage,
  setTotalCount,
}) => {
  try {
    const res = await client.get(
      `/api/search?page=${page.current || 1}&sort=${exploreSort || 0}&${
        urlData.url
      }`,
    );
    console.log("res", res);
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
