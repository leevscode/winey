/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { client } from "../../api/client";
import { IStoreDetailList, IStoreInfo } from "../interface/StoreInterface";

// 매장정보 불러오기
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

// 신규매장 등록하기
export const postNewStore = async (newStoreInfo: {
  regionNmId: number;
  nm: string;
  tel: string;
}) => {
  try {
    const res = await client.post("/api/admin/store", {
      regionNmId: newStoreInfo.regionNmId,
      nm: newStoreInfo.nm,
      tel: newStoreInfo.tel,
    });
    console.log(res);
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
