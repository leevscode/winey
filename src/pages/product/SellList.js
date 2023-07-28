import React, { useState } from "react";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import {
  NotOrder,
  OrdercancelBtn,
  ModalColse,
  SellListButton,
  SellListInfo,
  SellListModal,
  ModalText,
  ReviewIcon,
  ReviewModal,
} from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinSquint,
  faFaceSmile,
  faFaceRollingEyes,
} from "@fortawesome/free-regular-svg-icons";
import { faXmark, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SellListCancel from "../../components/selllist/SellListCancel";

const SellList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [orderItems, setOrderItems] = useState([
    {
      date: "2023.07.23",
      product: "제프 까렐, 울띰 헤꼴뜨",
      orderNumber: "2316514564613",
      paymentMethod: "신용카드",
      amount: "38,700",
      status: "배송완료",
    },
    {
      date: "2023.07.25",
      product: "몰루와인",
      orderNumber: "982737465858",
      paymentMethod: "신용카드",
      amount: "52,000",
      status: "픽업대기",
    },
    {
      date: "2023.07.27",
      product: "레드와인",
      orderNumber: "974151621",
      paymentMethod: "신용카드",
      amount: "32,000",
      status: "픽업완료",
    },
  ]);

  const [cancelModalVisible, setCancelModalVisible] = useState(
    Array(orderItems.length).fill(false)
  );

  const showCancelModal = (index) => {
    const updatedCancelModalVisible = [...cancelModalVisible];
    updatedCancelModalVisible[index] = true;
    setCancelModalVisible(updatedCancelModalVisible);
  };

  const hideCancelModal = (index) => {
    const updatedCancelModalVisible = [...cancelModalVisible];
    updatedCancelModalVisible[index] = false;
    setCancelModalVisible(updatedCancelModalVisible);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handlePickup = (index) => {
    const updatedItems = orderItems.map((item, i) =>
      i === index ? { ...item, status: "픽업완료" } : item
    );
    setOrderItems(updatedItems);
  };

  const handleCancel = (index) => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
    hideCancelModal(index);
  };

  if (orderItems.length === 0) {
    return <NotOrder>주문 내역이 없습니다</NotOrder>;
  }

  return (
    <>
      {orderItems.map((item, index) => (
        <div key={index}>
          <OrdercancelBtn>
            <button onClick={() => showCancelModal(index)}>
              주문취소 <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </OrdercancelBtn>
          <SellListInfo>
            {item.date}
            <li>상품명: {item.product}</li>
            <li>주문번호: {item.orderNumber}</li>
            <li>결제 방법: {item.paymentMethod}</li>
            <li>결제 금액: {item.amount}</li>
            <li>주문 상태: {item.status}</li>
          </SellListInfo>
          <SellListButton>
            <>
              <ButtonOk onClick={() => handlePickup(index)}>픽업완료</ButtonOk>
              <ButtonCancel onClick={() => showModal()}>평점등록</ButtonCancel>
            </>
          </SellListButton>
          {cancelModalVisible[index] && (
            <SellListCancel onCancel={() => handleCancel(index)} onClose={() => hideCancelModal(index)} />
          )}
        </div>
      ))}

      {/* 모달과 그 내용 */}
      <SellListModal modalVisible={modalVisible}>
        {modalVisible && (
          <div>
            <ModalText>
              <button onClick={() => hideModal()}>
                <ModalColse>
                  <FontAwesomeIcon icon={faXmark} />
                </ModalColse>
              </button>
              <h1>픽업하신 와인은 어떠셨나요?</h1>
              <h2>지금 바로 평점을 남겨보세요!</h2>
              <ReviewModal>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceGrinSquint} />
                    </ReviewIcon>
                    좋아요
                  </li>
                </button>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </ReviewIcon>
                    보통이에요
                  </li>
                </button>
                <button>
                  <li>
                    <ReviewIcon>
                      <FontAwesomeIcon icon={faFaceRollingEyes} />
                    </ReviewIcon>
                    취향이아니에요
                  </li>
                </button>
              </ReviewModal>
              <SellListButton>
                <ButtonOk>평점등록</ButtonOk>{" "}
                <ButtonCancel onClick={() => hideModal()}>취소</ButtonCancel>
              </SellListButton>
            </ModalText>
          </div>
        )}
      </SellListModal>
    </>
  );
};

export default SellList;
