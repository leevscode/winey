import React, { useEffect, useState } from "react";
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
  // 선택된 번호 state
  const [selectedItem, setSelectedItem] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  // 목록
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [reviewReset, setreviewReset] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  const [CancelModal, setCancelModal] = useState([]);

  // 추후 axios 처리를 할 함수
  const getSellData = () => {};
  useEffect(() => {
    getSellData();
    const testData = [
      {
        key: 0,
        date: "2023.07.23",
        product: "제프 까렐, 울띰 헤꼴뜨",
        orderNumber: "2316514513",
        paymentMethod: "신용카드",
        amount: "38,700",
        status: "결제완료",
      },
      {
        key: 1,
        date: "2023.07.25",
        product: "몰루와인",
        orderNumber: "98275858",
        paymentMethod: "신용카드",
        amount: "40,000",
        status: "픽업대기",
      },
      {
        key: 2,
        date: "2023.07.27",
        product: "레드와인",
        orderNumber: "9741201",
        paymentMethod: "신용카드",
        amount: "32,000",
        status: "픽업완료",
      },
    ];

    let tempArr = [];
    for (let i = 0; i < testData.length; i++) {
      tempArr.push(false);
    }
    setReviewList([...tempArr]);

    setOrderItems(testData);
    setCancelModal(Array(testData.length).fill(false));
  }, []);

  useEffect(() => {
    console.log(reviewList);
  }, [reviewList]);

  // const orderStatusValues = {
  //   주문취소: 0,
  //   결제완료: 1,
  //   배송중: 2,
  //   배송완료: 3,
  //   픽업대기: 4,
  //   픽업완료: 5,
  // };

  // 특정 경우에 주문취소가 보이게 하는 함수
  const showCancelModal = index => {
    const updatedCancelModal = [...CancelModal];
    updatedCancelModal[index] = true;
    setCancelModal(updatedCancelModal);
  };

  // 리뷰 모달을 여는 함수
  const showModal = () => {
    setreviewReset(true);
  };

  // 리뷰 모달을 닫는 함수
  const hideModal = () => {
    setreviewReset(false);
  };
  // useEffect(() => {
  //   console.log("reviewReset : ", reviewReset);
  // }, [reviewReset]);

  // 주문취소 모달에서 "네" 버튼 활성화
  const handleCancel = index => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
    hideCancelModal(index);
  };

  // 주문취소 모달에서 "아니요" 버튼 활성화
  const hideCancelModal = index => {
    const updatedCancelModal = [...CancelModal];
    updatedCancelModal[index] = false;
    setCancelModal(updatedCancelModal);
  };
  // 리뷰 포인트 등록
  const handleReviewPoint = index => {
    setSelectedItem(index);
    showModal();
  };

  // 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 선택하고 평점을 등록하는 함수
  const handlePickUpComplete = index => {
    setSelectedItem(index);
    setSelectedOrder(prevSelectedOrder => {
      if (prevSelectedOrder.includes(index)) {
        return prevSelectedOrder.filter(itemIndex => itemIndex !== index);
      } else {
        return [...prevSelectedOrder, index];
      }
    });
  };

  useEffect(() => {
    console.log("selectedItem : ", selectedItem);
  }, [selectedItem]);

  // 평점 등록이 완료되었을 때 보여줄 메시지 div
  const [reviewSubmit, setreviewSubmit] = useState(false);
  // 평점 등록이 완료된 항목만 상태를 업데이트 하여야 한다.
  const reviewSubmitUpdate = () => {
    console.log(selectedItem, "만 업데이트 하여야 한다. ");
    const arr = reviewList.map((item, index) => {
      if (index === selectedItem) {
        item = true;
      }
      return item;
    });
    setReviewList([...arr]);
    setreviewSubmit(true);
  };

  const tempTest = () => {
    setreviewSubmit(false);
    return <ReviewOk>평점등록이 완료되었습니다</ReviewOk>;
  };

  return (
    <>
      {orderItems.length === 0 ? (
        // 주문 목록이 없을 경우 출력하는 내용
        <ProductCartNone>
          {" "}
          <i>
            <FontAwesomeIcon icon={faExclamation} />
            <br />
            주문 내역이 없습니다{" "}
          </i>
        </ProductCartNone>
      ) : (
        <div>
          {orderItems.map((item, index) => (
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
              <SellListButton>
                <>
                  {/* 주문 상태가 "픽업대기" 또는 "픽업완료"일 때 "픽업완료" 버튼을 클릭 가능 */}
                  {["픽업대기", "픽업완료"].includes(item.status) ? (
                    selectedOrder.includes(item.key) ? (
                      // reviewSubmit ? (
                      reviewList[index] === true ? (
                        <ReviewOk>평점등록이 완료되었습니다</ReviewOk>
                      ) : (
                        <ButtonCancel
                          onClick={() => handleReviewPoint(item.key)}
                        >
                          평점등록하기
                        </ButtonCancel>
                      )
                    ) : (
                      <PickUpButton
                        onClick={() => handlePickUpComplete(item.key)}
                      >
                        픽업완료
                      </PickUpButton>
                    )
                  ) : (
                    <PickUpButton disabled>상품 준비중 입니다</PickUpButton>
                  )}
                </>
              </SellListButton>
              {CancelModal[item.key] && (
                <SellListCancel
                  onCancel={() => handleCancel(item.key)}
                  onClose={() => hideCancelModal(item.key)}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* 리뷰 모달 내용 */}
      <ReviewModal
        reviewReset={reviewReset}
        hideModal={hideModal}
        setreviewSubmit={setreviewSubmit}
        reviewSubmitUpdate={reviewSubmitUpdate}
      />
    </>
  );
};

export default SellList;