/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
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
      okText: "닫기",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>주문이 취소 되었습니다.</li>
        </ul>
      ),
    });
    await handleCancel();
  };

  return (
    <>
      <OrderCancelModal>
        <OrderCancelContent>
          <p>정말로 취소 하시겠습니까?</p>
          <div>
            <ButtonOk
              onClick={() => {
                handleCancelWait();
                onClose();
                setPickupModalVisible(false);
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

export default SellListCancel;
