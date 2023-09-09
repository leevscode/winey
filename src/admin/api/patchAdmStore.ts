/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import axios from "axios";
import { client } from "../../api/client";
import { IEditStore, IStoreInfo } from "../interface/StoreInterface";

// 매장정보 불러오기
export const getStoreList = async (
  paginate: {
    page: number;
    row: number;
  },
  setUserInfomation: React.Dispatch<React.SetStateAction<IStoreInfo>>,
) => {
  try {
    const res = await axios.get(
      `/api/admin/store?page=${paginate.page - 1}&size=${paginate.row}`,
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
  address: string;
  addressSub?: string | undefined;
}) => {
  console.log("newStoreInfo", newStoreInfo);
  try {
    const res = await axios.post("/api/admin/store", {
      regionNmId: newStoreInfo.regionNmId,
      nm: newStoreInfo.nm,
      tel: newStoreInfo.tel,
      address: newStoreInfo.address + newStoreInfo.addressSub,
    });
    console.log(res);
    const result = await res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 매장정보 수정
export const putEditStore = async ({
  storeId,
  editStoreCity,
  editStoreNm,
  editStoreAddress,
  editStoreTel,
}: IEditStore) => {
  console.log("storeId", storeId);
  console.log("editStoreCity", editStoreCity);
  console.log("editStoreNm", editStoreNm);
  console.log("editStoreAddress,", editStoreAddress);
  console.log("editStoreTel,", editStoreTel);
  try {
    const res = await axios.put(
      `/api/admin/store/{storeId}?storeId=${storeId}`,
      {
        regionNmId: editStoreCity,
        nm: editStoreNm,
        tel: editStoreTel,
        address: editStoreAddress,
      },
    );
    console.log("수정", res);
    const result = await res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 매장 삭제하기
export const deleteStore = async (item: string) => {
  try {
    const res = await axios.delete(
      `/api/admin/store/{storeId}?storeId=${item}`,
    );
    console.log(res);
    const result = await res.data;
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
