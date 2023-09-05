import React from "react";
import { Modal } from "antd";
import { client } from "../../../api/client";

interface OrderStatusModalProps {
  newStatusValue: string;
  item: any;
  getStatusLabel: (value: string) => string;
  onStatusChange: (newStatusValue: string, item: any) => void;
  props?: any;
}

const OrderStatusModal: React.FC<OrderStatusModalProps> = ({
  newStatusValue,
  item,
  getStatusLabel,
  props,
}) => {
  const newStatusLabel = getStatusLabel(newStatusValue);

  return (
    <Modal
      okText="예"
      cancelText="아니오"
      wrapClassName="info-modal-wrap notice-modal"
      maskClosable
      onOk={async () => {
        try {
          // 데이터를 서버로 전송
          await client.put(`/api/admin/order`, {
            orderId: item.orderId,
            orderStatus: newStatusValue,
          });
          Modal.warning({
            wrapClassName: "info-modal-wrap notice-modal",
            maskClosable: true,
            content: (
              <ul>
                <li>배송 상태가 변경 되었습니다</li>
              </ul>
            ),
          });
          console.log("상태변경 성공:", newStatusLabel);
          props.onStatusChange(newStatusValue, item);
        } catch (error) {
          console.error("상태변경 실패:", error);
        }
      }}
      onCancel={() => {
        props.onStatusChange(newStatusValue, item);
      }}
    >
      <ul>
        <li>
          배송 상태를 {newStatusLabel}(으)로
          <br />
          바꾸시겠습니까?
        </li>
      </ul>
    </Modal>
  );
};

export default OrderStatusModal;
