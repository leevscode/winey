import axios from "axios";
import { client } from "./client";

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
