import { client } from "../../api/client";

export const fetchOrderData = async () => {
  try {
    const res = await client.get(`/api/admin/order?page=1&row=15`);
    const orderData = await res.data;
    console.log(orderData);
    return orderData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};
