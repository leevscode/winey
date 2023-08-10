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
import PickUpModal from "../../components/selllist/PickUpModal";
import { fetchSellListData } from "../../api/patchselllist";

const SellList = () => {
  // 주문 내역 get
  const [SellListData, setSellListData] = useState([]);
  // 선택된 번호 state
  const [selectedItem, setSelectedItem] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  // 목록
  const [pickupModalVisible, setPickupModalVisible] = useState(false);

  const [selectedOrder, setSelectedOrder] = useState([]);
  const [completedPickUpOrders, setCompletedPickUpOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [CancelModal, setCancelModal] = useState([]);
  const navigate = useNavigate();

  // 추후 axios 처리를 할 함수
  // const getSellData = () => {};
  // useEffect(() => {
  //   getSellData();
  //   const testData = [

  //   ];

  //   let tempArr = [];
  //   for (let i = 0; i < testData.length; i++) {
  //     tempArr.push(false);
  //   }
  //   setReviewList([...tempArr]);

  //   setOrderItems(testData);
  //   setCancelModal(Array(testData.length).fill(false));
  // }, []);

  // useEffect(() => {
  //   console.log(reviewList);
  // }, [reviewList]);

  // ordeId 는주문내역 pk값

  // 스웨거에 적용된 orderStatus 상태
  // 1 : 결제완료
  // 2 : 배송중
  // 3 : 배송완료
  // 4 : 픽업대기
  // 5 : 픽업완료
  // 6 : 주문취소

  const filledSellListData = async () => {
    try {
      const data = await fetchSellListData();
      setSellListData(data);
      console.log("주문내역 출력", data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    filledSellListData();
  }, []);
  
  useEffect(() => {
    console.log("SellListData:", SellListData);
  }, [SellListData]);

  // 특정 경우에 주문취소가 보이게 하는 함수
  const showCancelModal = index => {
    const updatedCancelModal = [...CancelModal];
    updatedCancelModal[index] = true;
    setCancelModal(updatedCancelModal);
  };

  // 주문취소 모달에서 "네" 버튼 활성화
  const handleCancel = productId => {
    const updatedItems = orderItems.filter(
      item => item.productId !== productId,
    );
    setOrderItems(updatedItems);
    hideCancelModal(productId);
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

    // "픽업완료 확정을 하시겠습니까?" 모달을 표시합니다
    setPickupModalVisible(true);
  };

  // "픽업완료" 모달의 확인 버튼을 처리하는 함수
  const handleConfirmPickUp = index => {
    // "픽업완료" 확인 처리를 위한 로직을 작성합니다
    // 예를 들어, 백엔드에서 주문 상태를 "픽업완료"로 변경하는 등의 작업을 수행합니다

    // 추가: 이미 픽업완료된 주문을 completedPickUpOrders에 추가합니다
    setCompletedPickUpOrders(prevCompletedOrders => [
      ...prevCompletedOrders,
      index,
    ]);

    // 확인 후 모달을 숨깁니다
    setPickupModalVisible(false);

    // 주문 상태를 "픽업완료"로 변경
    setOrderItems(prevOrderItems => {
      const updatedOrderItems = prevOrderItems.map(item => {
        if (item.productId === index) {
          return {
            ...item,
            orderStatus: "픽업완료",
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
            <div key={item.productId}>
              {/* 주문취소 모달 */}
              {["픽업대기", "픽업완료"].includes(item.orderStatus) ? (
                // 주문취소 버튼이 사라졌을때 빈 공백을 유지하는 스타일
                <div style={{ height: "28px" }} />
              ) : (
                <OrdercancelBtn>
                  <button onClick={() => showCancelModal(item.productId)}>
                    주문취소 <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </OrdercancelBtn>
              )}
              <SellListInfo>
                {item.orderDate}
                <SellListProduct>
                  상품명: {item.nmKor[0]}
                  {item.nmKor.length > 1 && ` 외 ${item.product.nmKor - 1}건`}
                </SellListProduct>
                <li>주문번호: {item.orderId}</li>
                <li>결제 방법: {item.payment}</li>
                <li>총 결제 금액: {item.totalOrderPrice}</li>
                <li>픽업 지점: {item.storeNm}</li>
                <li>픽업 시간: {item.pickupTime}</li>
                <li>주문 상태: {item.orderStatus}</li>
              </SellListInfo>
              <SellListButton>
                <ButtonCancel
                  onClick={() => {
                    navigate("/selllistdetail/:iselllist");
                  }}
                >
                  주문 내역
                </ButtonCancel>
                {/* 상태가 "결제완료"일 때에만 상품 준비중입니다 표시 */}
                {item.orderStatus === "결제완료" && (
                  <SellListReady>상품 준비중입니다</SellListReady>
                )}
                {/* 픽업완료 버튼을 누르면 "픽업완료" 상태로 바뀌면서 버튼이 disabled */}
                {item.orderStatus === "픽업완료" ? (
                  <PickUpButton disabled>픽업완료</PickUpButton>
                ) : (
                  ["배송중", "배송완료", "픽업대기"].includes(
                    item.orderStatus,
                  ) && (
                    <PickUpButton
                      onClick={() => handlePickUpComplete(item.productId)}
                      disabled={completedPickUpOrders.includes(item.productId)}
                    >
                      픽업완료
                    </PickUpButton>
                  )
                )}
                {/* "픽업완료" 모달을 렌더링합니다 */}
                {pickupModalVisible && (
                  <PickUpModal
                    onCancel={() => setPickupModalVisible(false)}
                    onConfirm={handleConfirmPickUp}
                    onClose={() => setPickupModalVisible(false)}
                    onPick={selectedItem}
                  />
                )}
              </SellListButton>
              {CancelModal[item.productId] && (
                <SellListCancel
                  onCancel={() => handleCancel(item.productId)}
                  onClose={() => hideCancelModal(item.productId)}
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
