/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import { client } from "../../api/client";

// 주문 내역 출력
export const AdmOrderData = async (page: number) => {
  try {
    const res = await client.get(`/api/admin/order?page=${page}&row=15`);
    const orderData = await res.data;
    console.log(orderData);
    return orderData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};