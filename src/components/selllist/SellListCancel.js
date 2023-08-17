/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import React from "react";
import {
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import { cancelSellListData, getSellListData } from "../../api/patchselllist";
import Modal from "antd/es/modal/Modal";

const SellListCancel = ({
  onClose,
  orderCancelId,
  setPickupModalVisible,
  setSellListData,
}) => {
  const handleCancel = async () => {
    await cancelSellListData(orderCancelId);
    const data = await getSellListData();
    setSellListData(data);
  };
  const handleCancelWait = async () => {
    Modal.warning({
      title: "주문취소 확인",
      content: <p>주문이 취소 되었습니다</p>,
    });
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
