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
