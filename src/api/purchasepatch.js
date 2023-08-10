/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import { client } from "./client";

// 유저 매장정보 get
export const getUserStoreInfo = async setUserStore => {
  try {
    const res = await client.get("/api/payment/region");
    const result = await res.data;
    setUserStore(result);
    console.log("result", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 구입상품 디테일 정보 get
export const getBuyProductDetail = async (setProductDifInfo, productId) => {
  try {
    const res = await client.get(`/detail/${productId}`);
    const result = res.data;
    console.log("result", result);
    setProductDifInfo(result);
  } catch (err) {
    console.log("와인정보 get 실패", err);
  }
};
