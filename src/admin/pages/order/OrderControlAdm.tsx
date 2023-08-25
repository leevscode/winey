import React, { useEffect, useState } from "react";
import { fetchOrderControlData } from "../../api/admorderlist";
import { OrderTableWrap, OrdertTable } from "../../style/AdminOrderControl";

export interface fetchData {
  id: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  count: string;
}

const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState<Array<fetchData>>();

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

  const fetchData = [];

  return (
    <div>
      <OrderTableWrap>
        <OrdertTable>
          <caption>주문내역관리</caption>
          <thead>
            <tr>
              <th>주문날짜</th>
              <th>아이디</th>
              <th>주문상품</th>
              <th>주문수량</th>
              <th>결제금액</th>
              <th>결제수단</th>
              <th>픽업장소</th>
              <th>픽업배송상태</th>
              <th>상세보기</th>
            </tr>
          </thead>
          <tbody>
            {orderControl?.map(item => (
              <tr key={item.id}>
                <td>{item.orderDate}</td>
                <td>{item.email}</td>
                <td>{item.nmKor}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
                <td>{item.payment}</td>
                <td>{item.pickUpStore}</td>
                <td>{item.count}</td>
                <td>상세보기</td>
              </tr>
            ))}
          </tbody>
        </OrdertTable>
      </OrderTableWrap>
    </div>
  );
};

/* 주문내역관리
      {/* <ul>
        {orderControl.map((item, key) => (
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
        ))}
      </ul> */

export default OrderControlAdm;
