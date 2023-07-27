import React from "react";
import {
  OrderCancelText,
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";

const SellListCancel = () => {
  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <OrderCancelText>정말로 주문 취소를 하시겠습니까?</OrderCancelText>
          <ButtonOk>네</ButtonOk>
          <br />
          <ButtonCancel>아니요</ButtonCancel>
        </OrderCancelContent>
      </OrderCancelModal>
    </>
  );
};

export default SellListCancel;
