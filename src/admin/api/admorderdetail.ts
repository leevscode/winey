import { client } from "../../api/client";

export const AdmOrderDetailData = async () => {
  try {
    const res = await client.get(`/api/admin/order/1`);
    const orderDetailData = await res.data;
    console.log(orderDetailData);
    return orderDetailData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};