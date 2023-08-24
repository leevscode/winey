import { client } from "../../api/client"

export const fetchOrderControlData = async () => {
  try {
    const response = await client.get("/api/order?page=1&row=15");
    const orderControlData = response.data;
    return orderControlData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};
