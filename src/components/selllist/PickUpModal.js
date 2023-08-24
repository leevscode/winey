/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import React from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  OrderCancelContent,
  OrderCancelModal,
} from "../../style/SellListCancelStyle";
import { finishSellListData, getSellListData } from "../../api/patchselllist";
import { Modal } from "antd";

const PickUpModal = ({ onConfirm, onClose, onPick, setSellListData }) => {
  const finishSellList = async () => {
    await finishSellListData(onPick);
    const data = await getSellListData();
    setSellListData(data);
  };
  const finishSellListWait = async () => {
    await finishSellList();
    Modal.warning({
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>픽업이 완료 되었습니다.</li>
        </ul>
      ),
    });
  };

  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <p>픽업완료 확정을 하시겠습니까?</p>
          <div>
            <ButtonOk
              onClick={() => {
                // "픽업완료" 확인 처리를 위해 onConfirm 함수를 호출
                onConfirm(onPick);
                finishSellList();
                onClose();
                finishSellListWait();
              }}
            >
              예
            </ButtonOk>
            <ButtonCancel onClick={() => onClose()}>아니요</ButtonCancel>
          </div>
        </OrderCancelContent>
      </OrderCancelModal>
    </>
  );
};

export default PickUpModal;
