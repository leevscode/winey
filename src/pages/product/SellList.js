import React, { useEffect, useState } from "react";
import { ButtonCancel } from "../../style/GlobalStyle";
import {
  PickUpButton,
  OrdercancelBtn,
  SellListInfo,
  SellListProduct,
  SellListReady,
} from "../../style/SellListStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { ProductCartNone } from "../../style/ProductCartStyle";
import SellListCancel from "../../components/selllist/SellListCancel";
import { SellListButton } from "../../style/SellListReviewStyle";
import { useNavigate } from "react-router";

const SellList = () => {
  // 선택된 번호 state
  const [selectedItem, setSelectedItem] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  // 목록
  const [isPickUpComplete, setIsPickUpComplete] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [CancelModal, setCancelModal] = useState([]);
  const navigate = useNavigate();

  // 추후 axios 처리를 할 함수
  const getSellData = () => {};
  useEffect(() => {
    getSellData();
    const testData = [
      {
        key: 0,
        date: "2023.07.23",
        product: ["제프 까렐", "울띰 헤꼴뜨", "와인1", "와인2", "와인3"],
        orderNumber: "2316514513",
        paymentMethod: "신용카드",
        amount: "68,700",
        status: "결제완료",
      },
      {
        key: 1,
        date: "2023.07.25",
        product: ["스파클링와인", "울띰 헤꼴뜨", "와인1", "와인2"],
        orderNumber: "98275858",
        paymentMethod: "신용카드",
        amount: "45,000",
        status: "배송중",
      },
      {
        key: 2,
        date: "2023.07.27",
        product: ["레드 와인", "울띰 헤꼴뜨", "와인1"],
        orderNumber: "9741201",
        paymentMethod: "신용카드",
        amount: "32,000",
        status: "픽업대기",
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

  // 주문취소 모달에서 "네" 버튼 활성화
  const handleCancel = index => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
    hideCancelModal(index);
    console.log("주문취소 성공:", updatedItems);
  };

  // 주문취소 모달에서 "아니요" 버튼 활성화
  const hideCancelModal = index => {
    const updatedCancelModal = [...CancelModal];
    updatedCancelModal[index] = false;
    setCancelModal(updatedCancelModal);
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

    // 주문 상태를 "픽업완료"로 변경
    setOrderItems(prevOrderItems => {
      const updatedOrderItems = prevOrderItems.map(item => {
        if (item.key === index) {
          return {
            ...item,
            status: "픽업완료",
          };
        }
        return item;
      });
      return updatedOrderItems;
    });
  };

  useEffect(() => {
    console.log("selectedItem : ", selectedItem);
  }, [selectedItem]);

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
                <SellListProduct>
                  상품명: {item.product[0]}
                  {item.product.length > 1 &&
                    ` 외 ${item.product.length - 1}건`}
                </SellListProduct>
                <li>주문번호: {item.orderNumber}</li>
                <li>결제 방법: {item.paymentMethod}</li>
                <li>결제 금액: {item.amount}</li>
                <li>주문 상태: {item.status}</li>
              </SellListInfo>
              <SellListButton>
                <ButtonCancel
                  onClick={() => {
                    navigate("/selllistdetail/:iselllist");
                  }}
                >
                  주문 내역
                </ButtonCancel>
                {/* 상태가 "결제완료"일 때에만 <SellListReady> 표시 */}
                {item.status === "결제완료" && (
                  <SellListReady>상품 준비중입니다</SellListReady>
                )}
                {item.status === "픽업완료" ? (
                  <PickUpButton disabled>픽업완료</PickUpButton>
                ) : (
                  ["배송중", "배송완료", "픽업대기"].includes(item.status) && (
                    <PickUpButton
                      onClick={() => handlePickUpComplete(item.key)}
                    >
                      픽업완료
                    </PickUpButton>
                  )
                )}
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
    </>
  );
};

export default SellList;
