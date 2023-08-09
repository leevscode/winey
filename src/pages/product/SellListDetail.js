import React, { useState } from "react";

import {
  DetailButtonOk,
  DetailDay,
  DetailTotalPrice,
  SellListDetailinfo,
} from "../../style/SellListDetailStyle";
import { ReviewOk } from "../../style/SellListStyle";
import ReviewModal from "../../components/selllist/ReviewModal";
import submitReview from "../../api/patchselllist";

const SellListDetail = () => {
  const [reviewReset, setReviewReset] = useState(false);
  const [reviewSubmit, setReviewSubmit] = useState({});

  // 상품 더미 데이터
  const [productData, setProductData] = useState([
    {
      orderId: 1,
      quantity: 1,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "제프 까렐, 울띰 헤꼴뜨",
      productDescription: "Ultime Recolte By Jeff Carrel",
      productPrice: "32,900원",
    },
    {
      key: 2,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "white Wine",
      productDescription: "white",
      productPrice: "52,500원",
    },
    {
      key: 3,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "Red Wine",
      productDescription: "Red",
      productPrice: "82,500원",
    },
  ]);

  // 결제 총 금액 더미데이터
  const orderData = {
    orderDate: "2023.08.07",
    paymentMethod: "신용카드",
    pickupLocation: "이마트 만촌점",
    pickupTime: "07월 23일 일요일 12:00",
    orderStatus: "배송중",
    totalAmount: 0,
  };

  // 상품 가격 합산
  const calculateTotalAmount = () => {
    let totalPrice = 0;
    productData.forEach(product => {
      const price = parseInt(product.productPrice.replace(/[^0-9]/g, ""));
      totalPrice += price;
    });
    return totalPrice;
  };

  // 리뷰 모달을 여는 함수
  const showModal = () => {
    setReviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setReviewReset(false);
  };

  // 평점 등록이 완료된 항목만 상태를 업데이트
  const reviewSubmitUpdate = key => {
    setReviewSubmit(prevReviewSubmit => {
      console.log("");
      return { ...prevReviewSubmit, [key]: true };
    });
  };

  // 상품에 해당하는 평점을 등록하는 함수
  const submitRating = (key, rating) => {
    const updatedReviewSubmit = { ...reviewSubmit };
    updatedReviewSubmit[key] = true; // 평점 등록 상태를 true로 표시
    setReviewSubmit(updatedReviewSubmit);

    // 평점을 포함하여 productData 상태를 업데이트합니다.
    const updatedProductData = [...productData];
    updatedProductData[key].rating = rating;
    setProductData(updatedProductData);

    // 리뷰 데이터를 생성하여 엔드포인트로 전송
    const reviewData = {
      orderDetailId: updatedProductData[key].key, // 주문 상세 pk값 추가
      review_level: rating, 
      // 리뷰 평점 추가

    };

    submitReview(reviewData);
  };

  return (
    <>
      <DetailDay>{orderData.orderDate}</DetailDay>
      {productData.map(product => (
        <SellListDetailinfo key={product.key}>
          <div>
            <img src={product.imageSrc} alt="" />
            <ul>
              <li>{product.productName}</li>
              <li>{product.productDescription}</li>
              <li>{product.productPrice}</li>
            </ul>
          </div>
          <DetailButtonOk onClick={() => showModal()}>평점등록</DetailButtonOk>
        </SellListDetailinfo>
      ))}

      <DetailTotalPrice>
        <p>결제 방법: {orderData.paymentMethod}</p>
        <p>픽업 지점: {orderData.pickupLocation}</p>
        <p>픽업 시간: {orderData.pickupTime}</p>
        <p>주문 상태: {orderData.orderStatus}</p>
        <p>
          총 결제금액{" "}
          <strong>{calculateTotalAmount().toLocaleString()}원</strong>
        </p>
      </DetailTotalPrice>
      <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
      {/* 리뷰 모달 내용 */}
      <ReviewModal
        reviewReset={reviewReset}
        hideModal={hideModal}
        reviewSubmitUpdate={reviewSubmitUpdate}
        submitRating={rating => submitRating(rating)}
      />
    </>
  );
};

export default SellListDetail;
