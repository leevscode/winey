import { client } from "./client";

// 주문 내역 출력
export const fetchSellListData = async () => {
  try {
    const response = await client.get(`/api/orderList/user`);
    const sellListData = response.data;
    return sellListData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};

// 주문 내역 취소
export const cancelSellListData = async cancelSellListData => {
  try {
    const res = await client.put(
      `/api/orderList/cancel?orderId=${cancelSellListData}`,
    );
    console.log("res", res);
    const result = await res.data;
    console.log("주문이 취소 되었습니다", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 주문 내역 픽업완료
export const finishSellListData = async finishSellListData => {
  try {
    const res = await client.put(
      `/api/orderList/pickupFinish?orderId=${finishSellListData}`,
    );
    console.log("res", res);
    const result = await res.data;
    console.log("픽업 완료 되었습니다", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// 리뷰 등록
const submitReview = reviewData => {
  client
    .post("/api/payment/review", reviewData)
    .then(response => {
      console.log("리뷰가 성공적으로 제출되었습니다:", response.data);
    })
    .catch(error => {
      console.error("리뷰 제출 중 에러 발생:", error);
    });
};

export default submitReview;
