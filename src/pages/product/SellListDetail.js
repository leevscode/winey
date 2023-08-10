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
  // 리뷰 목록 팝업창 전달 아이디 state
  const [reviewId, setReviewId] = useState(null);

  // 상품 더미 데이터
  // productId 는 상품별 고유 pk 값입니다
  const [productData, setProductData] = useState([
    {
      orderDetailId: 1,
      quantity: 1,
      imageSrc: "https://via.placeholder.com/120x120",
      nmKor: "제프 까렐, 울띰 헤꼴뜨",
      nmEng: "Ultime Recolte By Jeff Carrel",
      salePrice: "32,900원",
    },
    {
      orderDetailId: 2,
      quantity: 1,
      imageSrc: "https://via.placeholder.com/120x120",
      nmKor: "white Wine",
      nmEng: "white",
      salePrice: "52,500원",
    },
    {
      orderDetailId: 3,
      quantity: 1,
      imageSrc: "https://via.placeholder.com/120x120",
      productName: "Red Wine",
      productDescription: "Red",
      salePrice: "82,500원",
    },
  ]);

  // 결제 총 금액 더미데이터
  const orderData = {
    orderDate: "2023.08.07",
    payment: "신용카드",
    storeNm: "이마트 만촌점",
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
  const showModal = _orderDetailId => {
    setReviewId(_orderDetailId);
    setReviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setReviewReset(false);
  };

  // 평점 등록이 완료된 항목만 상태를 업데이트
  const reviewSubmitUpdate = () => {
    const arr = productData.map(item => {
      // reviewId : 보관해둔 팝업창 전달한 orderDetailId
      if (item.orderDetailId === reviewId) {
        item.review = 1;
      }
      return item;
    });
    setProductData(arr);

    // hideModal();
    // setReviewSubmit(prevReviewSubmit => {
    //   console.log("");
    //   return { ...prevReviewSubmit, [key]: true };
    // });
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
      {productData.map((product, idx) => (
        <SellListDetailinfo key={product.orderDetailId}>
          <div>
            <img src={product.imageSrc} alt="" />
            <ul>
              <li>{product.nmKor}</li>
              <li>{product.nmEng}</li>
              <li>{product.salePrice}</li>
            </ul>
          </div>

          {product.review ? (
            <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
          ) : (
            <DetailButtonOk onClick={() => showModal(product.orderDetailId)}>
              평점등록
            </DetailButtonOk>
          )}
        </SellListDetailinfo>
      ))}

      <DetailTotalPrice>
        <p>결제 방법: {orderData.payment}</p>
        <p>픽업 지점: {orderData.storeNm}</p>
        <p>픽업 시간: {orderData.pickupTime}</p>
        <p>주문 상태: {orderData.orderStatus}</p>
        <p>
          총 결제금액 <strong>{orderData.totalOrderPrice}원</strong>
        </p>
      </DetailTotalPrice>
      <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
      {/* 리뷰 모달 내용 */}
      <ReviewModal
        reviewId={reviewId}
        reviewReset={reviewReset}
        hideModal={hideModal}
        reviewSubmitUpdate={reviewSubmitUpdate}
        submitRating={rating => submitRating(rating)}
      />
    </>
  );
};

export default SellListDetail;
