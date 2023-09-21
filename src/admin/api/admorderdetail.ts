/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/

import axios from "axios";

export const AdmOrderDetailData = async (orderId: number) => {
  try {
    const res = await axios.get(
      `/api/admin/order/${orderId}?page=0&size=20&sort=orderid%2CASC`,
    );
    const orderDetailData = await res.data;
    return orderDetailData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};
