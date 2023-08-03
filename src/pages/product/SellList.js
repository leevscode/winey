import React, { useState } from "react";
import { ButtonCancel } from "../../style/GlobalStyle";
import {
  PickUpButton,
  OrdercancelBtn,
  SellListInfo,
  ReviewOk,
} from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import SellListCancel from "../../components/selllist/SellListCancel";
import ReviewModal from "../../components/selllist/ReviewModal";
import { ProductCartNone } from "../../style/ProductCartStyle";
import { SellListButton } from "../../style/SellListReviewStyle";

const SellList = () => {
  const [selectedOrderIndices, setSelectedOrderIndices] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [orderItems, setOrderItems] = useState([
    {
      key: 0,
      date: "2023.07.23",
      product: "제프 까렐, 울띰 헤꼴뜨",
      orderNumber: "2316514564613",
      paymentMethod: "신용카드",
      amount: "38,700",
      status: "결제완료",
    },
    {
      key: 1,
      date: "2023.07.25",
      product: "몰루와인",
      orderNumber: "982737465858",
      paymentMethod: "신용카드",
      amount: "52,000",
      status: "픽업대기",
    },
    {
      key: 2,
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
    const updatedCancelModal = [...cancelModalVisible];
    updatedCancelModal[index] = true;
    setCancelModalVisible(updatedCancelModal);
  };

  const hideCancelModal = index => {
    const updatedCancelModal = [...cancelModalVisible];
    updatedCancelModal[index] = false;
    setCancelModalVisible(updatedCancelModal);
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
    setSelectedOrderIndices(prevSelectedOrder => {
      if (prevSelectedOrder.includes(index)) {
        return prevSelectedOrder.filter(itemIndex => itemIndex !== index);
      } else {
        return [...prevSelectedOrder, index];
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
  // 리뷰 제출 상태를 관리할 상태 변수 추가
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const tempTest = () => {
    setReviewSubmitted(false);
    return <ReviewOk>평점등록이 완료되었습니다</ReviewOk>;
  };

  return (
    <>
      {orderItems.map(item => (
        <div key={item.key}>
          {/* 주문취소 모달 */}
          {["픽업대기", "픽업완료"].includes(item.status) ? (
            // 주문취소 버튼이 사라졌을때 빈 공백을 유지하는 스타일
            <div style={{ height: "28px" }} />
          ) : (
            <OrdercancelBtn>
              <button onClick={() => showCancelModal(item.key)}>
                주문취소 <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </OrdercancelBtn>
          )}
          <SellListInfo>
            {item.date}
            <li>상품명: {item.product}</li>
            <li>주문번호: {item.orderNumber}</li>
            <li>결제 방법: {item.paymentMethod}</li>
            <li>결제 금액: {item.amount}</li>
            <li>주문 상태: {item.status}</li>
          </SellListInfo>
          {/* 리뷰가 제출되면 ReviewOk div를 조건부 렌더링합니다. */}
          {/* {reviewSubmitted && <ReviewOk>평점등록이 완료되었습니다</ReviewOk>} */}
          <SellListButton>
            <>
              {/* 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 "픽업완료" 버튼을 클릭 가능 */}
              {["픽업대기", "픽업완료"].includes(item.status) ? (
                selectedOrderIndices.includes(item.key) ? (
                  reviewSubmitted ? (
                    <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
                  ) : (
                    <ButtonCancel onClick={() => showModal()}>
                      평점등록
                    </ButtonCancel>
                  )
                ) : (
                  <PickUpButton onClick={() => handlePickUpComplete(item.key)}>
                    픽업완료
                  </PickUpButton>
                )
              ) : (
                <PickUpButton disabled>픽업완료</PickUpButton>
              )}
            </>
          </SellListButton>
          {cancelModalVisible[item.key] && (
            <SellListCancel
              onCancel={() => handleCancel(item.key)}
              onClose={() => hideCancelModal(item.key)}
            />
          )}
        </div>
      ))}
      {/* 리뷰 모달 내용 */}
      <ReviewModal
        modalVisible={modalVisible}
        hideModal={hideModal}
        setReviewSubmitted={setReviewSubmitted}
      />
    </>
  );
};

export default SellList;
