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
  const [reviewReset, setreviewReset] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [reviewSubmit, setReviewSubmit] = useState(false);

// 상품 더미 데이터
const productData = [
  {
    key: 1,
    imageSrc: "https://via.placeholder.com/120x120",
    productName: "제프 까렐, 울띰 헤꼴뜨",
    productDescription: "Ultime Recolte By Jeff Carrel",
    productPrice: "32,900원",
  },
  {
    key: 2,
    imageSrc: "https://via.placeholder.com/120x120",
    productName: "Auth Wine",
    productDescription: "Auth",
    productPrice: "52,500원",
  },
];

  // 결제 총 금액 더미데이터
  const orderData = {
    orderDate: "2023.08.07",
    paymentMethod: "신용카드",
    pickupLocation: "이마트 만촌점",
    pickupTime: "07월 23일 일요일 12:00",
    orderStatus: "배송중",
    totalAmount: 0,
  };

  // 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 선택하고 평점을 등록하는 함수
const handlePickUpComplete = (index) => {
  setSelectedItem(index);
  setSelectedOrder((prevSelectedOrder) => {
    if (prevSelectedOrder.includes(index)) {
      return prevSelectedOrder.filter((itemIndex) => itemIndex !== index);
    } else {
      return [...prevSelectedOrder, index];
    }
  });
};


  // 상품 가격 합산
  const calculateTotalAmount = () => {
    let totalPrice = 0;
    productData.forEach((product) => {
      // Parse the productPrice as a number before adding it to the total
      const price = parseInt(product.productPrice.replace(/[^0-9]/g, ""));
      totalPrice += price;
    });
    return totalPrice;
  };

  // 리뷰 모달을 여는 함수
  const showModal = () => {
    setreviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setreviewReset(false);
  };

  // 평점 등록이 완료되었을 때 보여줄 메시지 div
  const renderReviewMessage = () => {
    return <ReviewOk>평점등록이 완료되었습니다</ReviewOk>;
  };

  // 평점 등록이 완료된 항목만 상태를 업데이트
  const reviewSubmitUpdate = () => {
    setReviewSubmit(true);
  };

  return (
    <>
      <DetailDay>{orderData.orderDate}</DetailDay>
      {productData.map(product => (
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
        {/* 평점이 등록되지 않았을 때만 버튼을 보여줌 */}
        {!reviewSubmit && <ButtonOk onClick={showModal}>평점등록</ButtonOk>}
        {/* 리뷰 제출 완료 시 메시지를 보여줌 */}
        {reviewSubmit && renderReviewMessage()}
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
        setReviewSubmit={setReviewSubmit}
        reviewSubmitUpdate={reviewSubmitUpdate}
      />
    </>
  );
};

export default SellListDetail;
