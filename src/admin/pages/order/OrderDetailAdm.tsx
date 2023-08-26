import React from "react";
import { OrderTable, OrderTableWrap } from "../../style/AdminOrderControl";
import { OrderSubTable, OrderSubTableWrap } from "../../style/AdminOrderDetail";

const OrderDetailAdm = () => {
  return (
    <div>
      <OrderTableWrap>
        <OrderTable>
          <caption>주문내역관리</caption>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>주문날짜</th>
              <th>아이디</th>
              <th>주문상품</th>
              <th>상품금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>테스트1</td>
              <td>테스트2</td>
              <td>테스트3</td>
              <td>주문상품 리스트 출력</td>
              <td>상품 금액 출력</td>
            </tr>
          </tbody>
        </OrderTable>
      </OrderTableWrap>
      <OrderSubTableWrap>
        <OrderSubTable>
          <caption>주문내역관리</caption>
          <thead>
            <tr>
              <th>주문수량</th>
              <th>주문날짜</th>
              <th>픽업 장소</th>
              <th>픽업 장소 데이타 넣을곳</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>총결제금액</td>
              <td>총 결제금액 데이타 넣을곳</td>
              <td>픽업 날짜</td>
              <td>픽업 날짜 데이타 넣을곳</td>
            </tr>
            <tr>
              <td>결제 수단</td>
              <td>결제 수단 데이타 넣을곳</td>
              <td>픽업 시간</td>
              <td>픽업 시간 데이타 넣을곳</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>픽업완료여부</td>
              <td>픽업완료여부 데이타 넣을 곳</td>
            </tr>
          </tbody>
        </OrderSubTable>
      </OrderSubTableWrap>
    </div>
  );
};

export default OrderDetailAdm;
{
  /* <ul>
        <li>주문번호:{orderId}</li>
        <li>주문날짜:{orderDate}</li>
        <li>아이디:{email}</li>
        <li>주문상품:{nmKor}</li>
        <li>상품금액:{totalPrice}</li>
      </ul>
      <ul>
        <li>주문수량 : {quantity}</li>
        <li>총 결제 금액 : {totalPrice} </li>
        <li>결제 수단 : {payment} </li>
      </ul>
      <ul>
        <li>픽업 장소 : {storeNm}</li>
        <li>픽업 날짜 : {pickUpDate}</li>
        <li>픽업 시간 : {pickUpTime} </li>
        <li>픽업완료 여부 : {orderStatus}</li>
      </ul> */
}
