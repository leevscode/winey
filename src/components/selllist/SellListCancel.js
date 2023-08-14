import React from "react";
import {
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import { cancelSellListData, getSellListData } from "../../api/patchselllist";

const SellListCancel = ({
  onClose,
  orderCancelId,
  setPickupModalVisible,
  setSellListData,
}) => {
  const handleCancel = async () => {
    await cancelSellListData(orderCancelId);
    alert("주문이 취소되었습니다");
    const data = await getSellListData();
    setSellListData(data)
  };
  const handleCancelWait = async () => {
    await handleCancel();
  };

  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <h1>정말로 취소 하시겠습니까?</h1>
          <ButtonOk
            onClick={() => {
              handleCancelWait();
              onClose();
              setPickupModalVisible(false);
            }}
          >
            네
          </ButtonOk>
          <div style={{ marginTop: "8px" }}>
            <ButtonCancel onClick={() => onClose()}>아니요</ButtonCancel>
          </div>
        </OrderCancelContent>
      </OrderCancelModal>
    </>
  );
};

export default SellListCancel;
