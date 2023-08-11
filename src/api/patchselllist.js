import { client } from "./client";

// 주문 내역 출력
export const fetchSellListData = async () => {
  try {
    const response = await client.get(`orderList/user`);
    const sellListData = response.data;
    return sellListData;
  } catch (error) {
    console.error("API 요청 중 오류 발생", error);
    return [];
  }
};

// 주문 내역 취소
export const cancelSellListData = async()=> {
  try {
    const res = await client.put("orderList/cancel", {
    });
    console.log("res", res);
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// 리뷰를 등록하는 함수
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
