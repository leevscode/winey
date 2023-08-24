import React, { useEffect, useState } from "react";
import { fetchOrderControlData } from "../../api/admorderlist";

const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrderControlData();
        setOrderControl(data);
      } catch (err) {
        console.error("데이터 로드 중 오류 발생", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      주문내역관리
      <ul>
        {/* {orderControl.map((item, key) => (
          <li key={key}>
            주문번호: {item.orderId}
            주문날짜: {item.orderDate}
            아이디: {item.email}
            주문상품: {item.nmKor}
            주문수량: {item.quantity}
            결제금액: {item.totalPrice}
            결제수단: {item.payment}
            픽업장소: {item.pickUpStore}
            배송상태: {item.count}
            상세보기
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default OrderControlAdm;
