/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import { Modal } from "antd";
import { client } from "./client";
// const nav = useNavigate();
// 선호키워드리스트 유무 확인
export const getUserFavoriteKey = async () => {
  try {
    const res = await client.get("/api/recommend/getUserInfo");
    const result = await res.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 선호키워드 선택 post
export const postUserKeyword = async (favoriteKeyword, navigator) => {
  try {
    const res = await client.post("/api/recommend/wine", {
      categoryId: favoriteKeyword.categoryId,
      countryId: favoriteKeyword.countryId,
      smallCategoryId: favoriteKeyword.smallCategoryId,
      priceRange: favoriteKeyword.priceRange,
      flower: favoriteKeyword.aroma[0].num,
      plant: favoriteKeyword.aroma[1].num,
      fruit: favoriteKeyword.aroma[2].num,
      spicy: favoriteKeyword.aroma[3].num,
      earth: favoriteKeyword.aroma[4].num,
      oak: favoriteKeyword.aroma[5].num,
      nuts: favoriteKeyword.aroma[6].num,
    });
    const data = await res.data;
    navigator("/main");
  } catch (error) {
    console.log(error);
    Modal.error({
      title: "키워드 재선택",
      content: (
        <>
          선택 키워드에 대한 와인리스트가 없습니다. <br />
          키워드를 다시 선택해주세요.
        </>
      ),
    });
    navigator("/keywordselect");
  }
};
