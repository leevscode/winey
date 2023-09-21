/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
import axios from "axios";

// 주문 내역 출력
export const AdmOrderData = async (
  page: number,
  sortOption: { type: string; sort: string },
) => {
  try {
    const res = await axios.get(
      `/api/admin/order?page=${page - 1}&size=${8}&sort=${sortOption.type},${
        sortOption.sort
      }`,
    );
    const orderData = await res.data;
    return orderData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};
