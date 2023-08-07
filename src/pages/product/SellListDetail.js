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

  // 리뷰 모달을 여는 함수
  const showModal = () => {
    setreviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setreviewReset(false);
  };

  // 평점 등록이 완료되었을 때 보여줄 메시지 div
  const [reviewSubmit, setreviewSubmit] = useState(false);

  // 평점 등록이 완료된 항목만 상태를 업데이트 하여야 한다.
  const reviewSubmitUpdate = () => {
    console.log(selectedItem, "만 업데이트 하여야 한다. ");
    const arr = reviewList.map((item, index) => {
      if (index === selectedItem) {
        return true;
      } else {
        return item;
      }
    });
    setReviewList([...arr]);
    setreviewSubmit(true);
  };

  const tempTest = () => {
    setreviewSubmit(false);
    return <ReviewOk>평점등록이 완료되었습니다</ReviewOk>;
  };

  return (
    <>
      <DetailDay>2023.08.05</DetailDay>
      <SellListDetailinfo>
        <img src="https://via.placeholder.com/120x120" alt="" />
        <ul>
          <li>제프 까렐, 울띰 헤꼴뜨</li>
          <li>Ultime Recolte By Jeff Carrel</li>
          <li>32,900원</li>
        </ul>
      </SellListDetailinfo>
      <SellListDetailBox>
        <ButtonOk onClick={showModal}>평점등록</ButtonOk>
      </SellListDetailBox>
      <DetailTotalPrice>
        <p>결제 방법 : 신용카드</p>
        <p>픽업 지점 : 이마트 만촌점</p>
        <p>픽업 시간 : 07월 23일 일요일 12:00</p>
        <p>주문 상태 : 픽업완료</p>
        <p>
          총 결제금액 <strong> 원</strong>
        </p>
      </DetailTotalPrice>

      {/* 리뷰 모달 내용 */}
      <ReviewModal
        reviewReset={reviewReset}
        hideModal={hideModal}
        setreviewSubmit={setreviewSubmit}
        reviewSubmitUpdate={reviewSubmitUpdate}
      />
    </>
  );
};

export default SellListDetail;
