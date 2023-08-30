/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "./client";

export const getSearchItem = async ({ urlData, setExploreResult }) => {

  try {
    const res = await client.get(`/search?${urlData.url}`);
    console.log("res", res);
    const result = await res.data;
    console.log("result", result);
    setExploreResult(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
