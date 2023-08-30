/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { searchResultRecoil } from "../components/search/SearchBar";
import { client } from "./client";
import { useRecoilState } from "recoil";

export const getSearchItem = async ({
  urlData,
  page,
  setExploreResult,
  setHasNextPage,
  setScrollPage,
}) => {
  try {
    const res = await client.get(`/search?${urlData.url}`);
    console.log("res", res);
    const result = res.data;
    console.log("result", result);
    setExploreResult(result);
    setHasNextPage(result.wineList.length === 9);
    if (result.wineList) {
      page.current += 1;
    }
    setScrollPage(page);
    return;
  } catch (error) {
    console.log(error);
  }
};
