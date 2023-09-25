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
  sortOption: {
    type: string;
    sort: string;
  },
  sortSearch: string,
  textSearch: string,
) => {
  try {
    const res = await client.get(
      `/api/admin/store?page=${paginate.page - 1}&size=${paginate.row}&sort=${
        sortOption.type
      },${sortOption.sort}${sortSearch ? `&searchType=${sortSearch}` : ""}${
        textSearch ? `&str=${textSearch}` : ""
      }`,
    );
    // console.log("res", res.config.data);
    const result = await res.data;
    // console.log("매장정보 불러옵니다", result);
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
  // console.log("newStoreInfo", newStoreInfo);
  try {
    const res = await client.post("/api/admin/store", {
      regionNmId: newStoreInfo.regionNmId,
      nm: newStoreInfo.nm,
      tel: newStoreInfo.tel,
      address: newStoreInfo.address + newStoreInfo.addressSub,
    });
    // console.log(res);
    const result = await res.data;
    // console.log(result);
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
  // console.log("editStoreNm", editStoreNm);
  // console.log("storeId", storeId);
  try {
    const res = await client.put(
      `/api/admin/store/{storeId}?storeId=${storeId}`,
      {
        regionNmId: editStoreCity,
        nm: editStoreNm,
        tel: editStoreTel,
        address: editStoreAddress,
      },
    );
    const result = res.data;
    // console.log("res", res);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 매장 삭제하기
export const deleteStore = async (item: string) => {
  try {
    const res = await client.delete(
      `/api/admin/store/{storeId}?storeId=${item}`,
    );
    const result = await res.data;
    // console.log("삭제 성공했습니다.", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
