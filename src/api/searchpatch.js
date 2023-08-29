import { client } from "./client";

export const getSearchItem = async setSearchResult => {
  try {
    const res = await client.get("/search?${}");
    console.log("res", res);
    const result = await res.data;
    console.log("result", result);
    setSearchResult(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
