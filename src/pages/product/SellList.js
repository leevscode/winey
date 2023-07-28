import React, { useState } from "react";
import { ButtonOk, ButtonCancel } from "../../style/GlobalStyle";
import {
  PickUpButton,
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
import {
  faXmark,
  faChevronRight,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import SellListCancel from "../../components/selllist/SellListCancel";
import { ProductCartNone } from "../../style/ProductCartStyle";

const SellList = () => {
  const [selectedOrderIndices, setSelectedOrderIndices] = useState([]);
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
    Array(orderItems.length).fill(false),
  );

  const orderStatusValues = {
    주문취소: 0,
    결제완료: 1,
    배송중: 2,
    배송완료: 3,
    픽업대기: 4,
    픽업완료: 5,
  };

  const showCancelModal = index => {
    const updatedCancelModalVisible = [...cancelModalVisible];
    updatedCancelModalVisible[index] = true;
    setCancelModalVisible(updatedCancelModalVisible);
  };

  const hideCancelModal = index => {
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

  const handleCancel = index => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
    hideCancelModal(index);
  };

  const handlePickUpComplete = index => {
    setSelectedOrderIndices(prevSelectedOrderIndices => {
      if (prevSelectedOrderIndices.includes(index)) {
        return prevSelectedOrderIndices.filter(
          itemIndex => itemIndex !== index,
        );
      } else {
        return [...prevSelectedOrderIndices, index];
      }
    });
  };

  if (orderItems.length === 0) {
    return (
      <ProductCartNone>
        {" "}
        <i>
          <FontAwesomeIcon icon={faExclamation} />
          <br />
          주문 내역이 없습니다{" "}
        </i>
      </ProductCartNone>
    );
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
              {/* 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 "픽업완료" 버튼을 클릭 가능 */}
              {["픽업대기", "픽업완료"].includes(item.status) ? (
                selectedOrderIndices.includes(index) ? (
                  <ButtonCancel onClick={() => showModal()}>
                    평점등록
                  </ButtonCancel>
                ) : (
                  <PickUpButton onClick={() => handlePickUpComplete(index)}>
                    픽업완료
                  </PickUpButton>
                )
              ) : (
                <PickUpButton disabled>픽업완료</PickUpButton>
              )}
            </>
          </SellListButton>
          {cancelModalVisible[index] && (
            <SellListCancel
              onCancel={() => handleCancel(index)}
              onClose={() => hideCancelModal(index)}
            />
          )}
        </div>
      ))}

      {/* 모달 내용 */}
      <SellListModal modalVisible={modalVisible}>
        {modalVisible && (
          <div>
            <ModalText>
              <button onClick={() => hideModal()}>
                <ModalColse>
                  <FontAwesomeIcon icon={faXmark} />
                </ModalColse>
              </button>
              <h1>드신 와인은 어떠셨나요?</h1>
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
