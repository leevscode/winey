import React from "react";
import { CartDetailImg, ProductCartInfo } from "../../style/ProductCartStyle";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteText,
} from "../../style/ProductCompleteStyle";

const ProductComplete = () => {
  return (
    <div>
      <ProductCompleteText>
        <img src="https://via.placeholder.com/100x100" alt="" />
        <p>결제가 완료되었습니다!</p>
        <span>픽업예정일과 시간에 맞춰 상품을 수령해주세요.</span>
      </ProductCompleteText>
      <ProductCartInfo>
        <CartDetailImg>
          <img src="https://via.placeholder.com/200x200" alt="" />
        </CartDetailImg>
        <div>
          <p>테스트</p>
          <p>테스트</p>
          <span>65,800</span>
          <span>픽업 지점 : 이마트 만촌점</span>
          <span>픽업 시간 : 07월 23일(일) 12:00</span>
        </div>
      </ProductCartInfo>
      <ProductCompleteBox>
        <ButtonOk>주문내역 확인 하기</ButtonOk>
        <ButtonCancel>메인보기</ButtonCancel>
      </ProductCompleteBox>
    </div>
  );
};

export default ProductComplete;
