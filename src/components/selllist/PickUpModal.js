import React from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import {finishSellListData} from "../../api/patchselllist"

const PickUpModal = ({
  onConfirm,
  onClose,
  onPick,
}) => {
  const finishSellList = async() => {
    await finishSellListData(onPick);
    alert("픽업이 완료 되었습니다");
    window.location.reload();
  };
  console.log(onPick)

  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <h1>픽업완료 확정을 하시겠습니까?</h1>
          <ButtonOk
            onClick={() => {
              // "픽업완료" 확인 처리를 위해 onConfirm 함수를 호출합니다
              onConfirm(onPick);
              finishSellList()
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
