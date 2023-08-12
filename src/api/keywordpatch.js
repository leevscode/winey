/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import { client } from "./client";

// 선호키워드 선택 post
export const postUserKeyword = async favoriteKeyword => {
  try {
    const res = await client.post("", {
      categoryId: favoriteKeyword.categoryId,
      countryId: favoriteKeyword.countryId,
      smallCategoryId: favoriteKeyword.smallCategoryId,
      // priceRange: favoriteKeyword.priceRange,
      priceRange: 1,
      flower: favoriteKeyword.aroma[0].num,
      plant: favoriteKeyword.aroma[1].num,
      fruit: favoriteKeyword.aroma[2].num,
      spicy: favoriteKeyword.aroma[3].num,
      earth: favoriteKeyword.aroma[4].num,
      oak: favoriteKeyword.aroma[5].num,
      nuts: favoriteKeyword.aroma[6].num,
    });
    console.log(res);
    const data = await res.data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
