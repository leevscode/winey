import { client } from "./client";

export const getUserStoreInfo = async setUserInfo => {
  try {
    const res = await client.get("/api/payment/region");
    const result = await res.data;
    console.log("result", result);
    setUserInfo(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
