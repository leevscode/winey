import React from "react";
import {
  OrderCancelText,
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import { cancelSellListData } from "../../api/patchselllist";

const SellListCancel = ({ onCancel, onClose, orderId, orderCancelId }) => {
  console.log("모달오더아이디", orderCancelId);

  const handleCancel = () => {
    cancelSellListData(orderCancelId);
  };
  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <OrderCancelText>정말로 취소 하시겠습니까?</OrderCancelText>
          <ButtonOk onClick={handleCancel}>네</ButtonOk>
          <div style={{ marginTop: "8px" }}>
            <ButtonCancel onClick={onClose}>아니요</ButtonCancel>
          </div>
        </OrderCancelContent>
      </OrderCancelModal>
    </>
  );
};

export default SellListCancel;
