import React from "react";
import { ButtonOk } from "../../style/GlobalStyle";
import {
  DetailDay,
  DetailTotalPrice,
  SellListDetailBox,
  SellListDetailinfo,
} from "../../style/SellListDetailStyle";

const SellListDetail = () => {
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
        <ButtonOk>평점등록</ButtonOk>
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
    </>
  );
};

export default SellListDetail;
