import axios from "axios";
import { client } from "../../api/client";
import { IStoreInfo } from "../interface/StoreInterface";

export const getStoreList = async (
  paginate: {
    page: number;
    row: number;
  },
  setUserInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>,
) => {
  try {
    const res = await client.get(
      `/api/admin/store?page=${paginate.page}&row=${paginate.row}`,
    );
    console.log("res", res);
    const result = await res.data;
    console.log("result", result);
    setUserInfomation(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
