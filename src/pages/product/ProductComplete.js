import React, { useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteText,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";
import { useLocation } from "react-router-dom";

const ProductComplete = () => {
  const { state } = useLocation();
  console.log("state", state);
  const [productData, setProductData] = useState({
    productImage: "https://via.placeholder.com/200x200",
    productName: "제프 까렐, 울띰 헤꼴뜨",
    productBrand: "Ultime Recolte By Jeff Carrel",
    productPrice: "32,900",
    pickupLocation: "이마트 만촌점",
    pickupTime: "07월 23일(일) 12:00",
  });

  return (
    <>
      <ProductCompleteText>
        <img src="https://via.placeholder.com/100x100" alt="" />
        <p>결제가 완료되었습니다!</p>
        <span>픽업예정일과 시간에 맞춰 상품을 수령해주세요.</span>
      </ProductCompleteText>
      <ProductCompleteinfo>
        <img src={productData.productImage} alt="" />
        <ul>
          <li>{productData.productName}</li>
          <li>{productData.productBrand}</li>
          <li>{productData.productPrice}원</li>
          <li>픽업 지점: {productData.pickupLocation}</li>
          <li>픽업 시간: {productData.pickupTime}</li>
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
