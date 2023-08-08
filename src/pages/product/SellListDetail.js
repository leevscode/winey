import React, { useState } from "react";
import { ButtonOk } from "../../style/GlobalStyle";
import {
  DetailDay,
  DetailTotalPrice,
  SellListDetailBox,
  SellListDetailinfo,
} from "../../style/SellListDetailStyle";
import { ReviewOk } from "../../style/SellListStyle";
import ReviewModal from "../../components/selllist/ReviewModal";

const SellListDetail = () => {
  const [reviewReset, setReviewReset] = useState(false);
  const [reviewSubmit, setReviewSubmit] = useState({});

  // reviewSubmit 상태를 객체로 변경하여 상품별로 리뷰 등록 상태를 기록합니다.

  // 상품 더미 데이터
  const [productData, setProductData] = useState([
    {
      key: 1,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "제프 까렐, 울띰 헤꼴뜨",
      productDescription: "Ultime Recolte By Jeff Carrel",
      productPrice: "32,900원",
      rating: null, // 각 상품의 평점을 저장할 속성
    },
    {
      key: 2,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "Auth Wine",
      productDescription: "Auth",
      productPrice: "52,500원",
      rating: null, // 각 상품의 평점을 저장할 속성
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
      // Parse the productPrice as a number before adding it to the total
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
  const reviewSubmitUpdate = (index) => {
    setReviewSubmit((prevReviewSubmit) => {
      console.log(" key: 1");
      return { ...prevReviewSubmit, [index]: true };
    });
  };

  // 상품에 해당하는 평점을 등록하는 함수
  const submitRating = (index, rating) => {
    const updatedReviewSubmit = { ...reviewSubmit };
    updatedReviewSubmit[index] = true; // 평점 등록 상태를 true로 표시
    setReviewSubmit(updatedReviewSubmit);
  
    // 평점을 포함하여 productData 상태를 업데이트합니다.
    const updatedProductData = [...productData];
    updatedProductData[index].rating = rating;
    setProductData(updatedProductData);
  };
  
  return (
    <>
      <DetailDay>{orderData.orderDate}</DetailDay>
      {productData.map((product, ) => (
        <SellListDetailinfo key={product.key}>
          <img src={product.imageSrc} alt="" />
          <ul>
            <li>{product.productName}</li>
            <li>{product.productDescription}</li>
            <li>{product.productPrice}</li>
          </ul>
        </SellListDetailinfo>
      ))}
      <SellListDetailBox>
      <ButtonOk onClick={() => showModal()}>평점등록</ButtonOk>
      </SellListDetailBox>
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

      {/* 리뷰 모달 내용 */}
      <ReviewModal
  reviewReset={reviewReset}
  hideModal={hideModal}
  reviewSubmitUpdate={reviewSubmitUpdate}
/>
<ReviewOk>평점등록이 완료되었습니다</ReviewOk>
    </>
  );
};

export default SellListDetail;
