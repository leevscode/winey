import React from "react";
import PickupPlaceClick from "../../components/ProductSell/PickupPlaceClick";
import PurchaseList from "../../components/ProductSell/PurchaseList";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { PurchaseBtn, PurchaseWrap } from "../../style/ProductSellStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const ProductSell = () => {
  return (
    <PurchaseWrap>
      <PickupPlaceClick />
      <PurchaseList />

      <PurchaseBtn>
        <span>결제수단</span>
        <p>결제수단을 선택해 주세요</p>
        <ButtonCancel><FontAwesomeIcon icon={faCreditCard} />카드결제</ButtonCancel>
        <ButtonOk>/&&/원 결제하기</ButtonOk>
      </PurchaseBtn>
    </PurchaseWrap>
  );
};

export default ProductSell;
