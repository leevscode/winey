import axios from "axios";

export const AdmOrderDetailData = async (orderId: number) => {
  try {
    const res = await axios.get(`/api/admin/order/${orderId}`);
    const orderDetailData = await res.data;
    console.log(orderDetailData);
    return orderDetailData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};