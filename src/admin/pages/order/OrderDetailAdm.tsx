/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/

import React, { useState } from "react";
import {
  OrderTable,
  OrderTableWrap,
} from "../../style/AdminOrderControl";
import { OrderSubTable, OrderSubTableWrap } from "../../style/AdminOrderDetail";
import { AdmOrderDetailData } from "../../api/admorderdetail";

export interface OdData {
  orderId: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  storeNm: string;
  pickUpDate: number;
  pickUpTime: number;
  // count : number;
}

// interface ObjectType {
//   [key: string | number]: any;
// }
// const [orderDetail, setOrderDetail] = useState<Array<OdData>>([]);

  // const getOdDetailData = async () => {
  //   try {
  //     const data: ObjectType = await AdmOrderDetailData();
  //     console.log(data);
  //     setOrderDetail(data.list);
  //     console.log(data.list);
  //   } catch (err) {
  //     console.error("데이터 로드 중 오류 발생", err);
  //   }
  // };

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
              <th>주문 수량 데이타 넣을곳</th>
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
              <td>픽업완료여부 데이타 넣을곳</td>
            </tr>
          </tbody>
        </OrderSubTable>
      </OrderSubTableWrap>
    </div>
  );
};

export default OrderDetailAdm;