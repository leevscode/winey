import React from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  OrderCancelContent,
  OrderCancelModal,
  OrderCancelText,
} from "../../style/SellListCancelStyle";

const PickUpModal = ({ onConfirm, onClose, onPick }) => {
  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <OrderCancelText>픽업완료 확정을 하시겠습니까?</OrderCancelText>
          <ButtonOk
            onClick={() => {
              // "픽업완료" 확인 처리를 위해 onConfirm 함수를 호출합니다
              onConfirm(onPick);
              onClose();
            }}
          >
            네
          </ButtonOk>
          <div style={{ marginTop: "8px" }}>
            <ButtonCancel onClick={onClose}>아니요</ButtonCancel>
          </div>
        </OrderCancelContent>
      </OrderCancelModal>
    </>
  );
};

export default PickUpModal;
