import React from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteText,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";

const ProductComplete = () => {
  return (
    <>
      <ProductCompleteText>
        <img src="https://via.placeholder.com/100x100" alt="" />
        <p>결제가 완료되었습니다!</p>
        <span>픽업예정일과 시간에 맞춰 상품을 수령해주세요.</span>
      </ProductCompleteText>
      <ProductCompleteinfo>
        <img src="https://via.placeholder.com/200x200" alt="" />
        <ul>
          <li>제프 까렐, 울띰 헤꼴뜨</li>
          <li>Ultime Recolte By Jeff Carrel</li>
          <li>32,900원</li>
          <li>픽업 지점 : 이마트 만촌점</li>
          <li>픽업 시간 : 07월 23일(일) 12:00</li>
        </ul>
      </ProductCompleteinfo>
      <ProductCompleteBox>
        <ButtonOk>주문내역 확인 하기</ButtonOk>
        <ButtonCancel>메인보기</ButtonCancel>
      </ProductCompleteBox>
    </>
  );
};

export default ProductComplete;
