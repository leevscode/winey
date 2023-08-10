import { client } from "./client";

// 유저 매장정보 get
export const getUserStoreInfo = async setUserStore => {
  try {
    const res = await client.get("/api/payment/region");
    const result = await res.data;
    console.log("result", result);
    setUserStore(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

//
export const getBuyProductDetail = async (setProductDifInfo, productId) => {
  try {
    const res = await client.get(`/detail/${productId}`);
    const result = res.data;
    console.log("result", result);
    setProductDifInfo(result);
    return result;
  } catch (err) {
    console.log("와인정보 get 실패", err);
  }
};
