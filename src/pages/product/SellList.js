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
import { cancelSellListData, fetchSellListData } from "../../api/patchselllist";

const SellList = () => {
  // 주문 내역 get
  const [SellListData, setSellListData] = useState([]);
  // 선택된 번호 state
  const [selectedItem, setSelectedItem] = useState(null);
  // const [reviewList, setReviewList] = useState([]);
  // 목록
  const [pickupModalVisible, setPickupModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [completedPickUpOrders, setCompletedPickUpOrders] = useState([]);
  const [orderId, setorderId] = useState([]);
  const [orderCancelId, setorderCancelId] = useState();
  const [CancelModal, setCancelModal] = useState([]);
  const navigate = useNavigate();

  const cancelSellList = async data => {
    try {
      await cancelSellListData(data); // 취소 요청 보내기

      // 취소를 반영하기 위해 상태를 업데이트합니다
      const updatedItems = orderId.filter(item => item.orderId !== data);
      setorderId(updatedItems);
      hideCancelModal(data);
      console.log("주문취소 성공:", updatedItems);
    } catch (error) {
      console.log("주문취소 실패:", error);
    }
  };

  // 주문내역 리스트 출력
  const filledSellListData = async () => {
    try {
      const data = await fetchSellListData();
      setSellListData(data);
      console.log("주문내역 출력", data);
    } catch (err) {
      console.log(err);
    }
  };

  // 주문내역 출력 useEffect
  useEffect(() => {
    filledSellListData();
  }, []);
  useEffect(() => {
    console.log("SellListData:", SellListData);
  }, [SellListData]);

  // 특정 경우에 주문취소가 보이게 하는 함수
  const showCancelModal = index => {
    setorderCancelId(index);
    const updatedCancelModal = [...CancelModal];
    updatedCancelModal[index] = true;
    setCancelModal(updatedCancelModal);
  };

  // 주문취소 모달에서 "네" 버튼 활성화
  const handleCancel = async orderId => {
    try {
      await cancelSellListData(orderId);
      const updatedItems = orderId.filter(item => item.orderId !== orderId);
      setorderId(updatedItems);
      hideCancelModal(orderId);
      console.log("주문취소 성공:", updatedItems);
    } catch (error) {
      console.log("주문취소 실패:", error);
    }
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
    setorderId(prevorderId => {
      const updatedorderId = prevorderId.map(item => {
        if (item.orderId === index) {
          return {
            ...item,
            orderStatus: 5,
          };
        }
        return item;
      });
      return updatedorderId;
    });
  };

  useEffect(() => {
    console.log("selectedItem : ", selectedItem);
  }, [selectedItem]);

  const orderStatus = {
    1: "결제 완료",
    2: "배송중",
    3: "배송완료",
    4: "픽업대기",
    5: "픽업완료",
    6: "주문취소",
  };

  const payment = {
    0: "신용카드",
    1: "신용카드",
  };

  return (
    <>
      {orderId.length !== 0 ? (
        // 주문 목록이 없을 경우 출력하는 내용
        <ProductCartNone>
          <i>
            <FontAwesomeIcon icon={faExclamation} />
            <br />
            주문 내역이 없습니다
          </i>
        </ProductCartNone>
      ) : (
        <div>
          {SellListData.map(item => (
            <div key={item.orderId}>
              {/* 주문취소 모달 */}
              {item.orderStatus === 4 || item.orderStatus === 5 || item.orderStatus === 6 ? (
                // 주문취소 버튼이 사라졌을때 빈 공백을 유지하는 스타일
                <div style={{ height: "28px" }} />
              ) : (
                <OrdercancelBtn>
                  <button onClick={() => showCancelModal(item.orderId)}>
                    주문취소 <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </OrdercancelBtn>
              )}
              <SellListInfo>
                <SellListProduct>
                  상품명 : {item.nmKor}
                  {/* {item.nmKor.length > 1 && ` 외 ${item.nmKor.length - 1}건`}  */}
                </SellListProduct>
                <li>주문번호 : {item.orderId}</li>
                <li>결제 방법 : {payment[`${item.payment}`]}</li>
                <li>총 결제 금액 : {item.totalOrderPrice.toLocaleString()}</li>
                <li>픽업 지점 : {item.storeNm}</li>
                <li>픽업 시간 : {item.pickupTime}</li>
                <li>주문 상태 : {orderStatus[`${item.orderStatus}`]}</li>
              </SellListInfo>
              <SellListButton>
                <ButtonCancel
                  onClick={() => {
                    navigate(`/selllistdetail/:iselllist`);
                  }}
                >
                  주문 내역
                </ButtonCancel>
                {/* 상태가 "결제완료"일 때에만 상품 준비중입니다 표시 */}
                {item.orderStatus === 1 && (
                  <SellListReady>상품 준비중입니다</SellListReady>
                )}
                {/* 픽업완료 버튼을 누르면 "픽업완료" 상태로 바뀌면서 버튼이 disabled */}
                {item.orderStatus === 5 ? (
                  <PickUpButton disabled>픽업완료</PickUpButton>
                ) : (
                  [3, 4, 5].includes(item.orderStatus) && (
                    <PickUpButton
                      onClick={() => handlePickUpComplete(item.orderId)}
                      disabled={completedPickUpOrders.includes(item.orderId)}
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
              {/* 주문취소 모달 */}
              {CancelModal[item.orderId] && (
                <SellListCancel
                  onCancel={() => handleCancel(item.orderId)}
                  onClose={() => hideCancelModal(item.orderId)}
                  orderCancelId={orderCancelId}
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
