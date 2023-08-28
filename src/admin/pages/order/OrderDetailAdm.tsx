import React, { useEffect, useState } from "react";
import { OrderTable, OrderTableWrap } from "../../style/AdminOrderControl";
import { OrderSubTable, OrderSubTableWrap } from "../../style/AdminOrderDetail";
import { AdmOrderDetailData } from "../../api/admorderdetail";

export interface OdData {
  orderId: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  salePrice: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  storeNm: string;
  pickUpDate: number;
  pickUpTime: number;
  orderStatus: number;
}

const OrderDetailAdm = () => {
  const [orderDetail, setOrderDetail] = useState<Array<OdData>>([]);
  const getOdDetailData = async () => {
    try {
      const data = await AdmOrderDetailData();
      console.log(data);
      setOrderDetail(data.list);
      console.log(data.list);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    getOdDetailData();
  }, []);

  return (
    <div>
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
                <th>주문수량</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail?.map((item, index) => (
                <tr key={index}>
                  <td>{item.orderId}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.email}</td>
                  <td>{item.nmKor}</td>
                  <td>{item.salePrice}</td>
                  <th>{item.quantity}</th>
                </tr>
              ))}
            </tbody>
          </OrderTable>
        </OrderTableWrap>
      </div>
      <OrderSubTableWrap>
        <OrderSubTable>
          <div>
            <caption>주문내역관리</caption>
            <thead>
              {orderDetail?.map((item, index) => (
                <tr key={index}>
                  <th>주문수량</th>
                  <th>{item.quantity}</th>
                  <th>픽업 장소</th>
                  <th>{item.storeNm}</th>
                </tr>
              ))}
            </thead>
            {orderDetail?.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>총결제금액</td>
                  <td>{item.totalPrice}</td>
                  <td>픽업 날짜</td>
                  <td>{item.pickUpDate}</td>
                </tr>
                <tr>
                  <td>결제 수단</td>
                  <td>{item.payment}</td>
                  <td>픽업 시간</td>
                  <td>{item.pickUpTime}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>픽업완료여부</td>
                  <td>{item.orderStatus}</td>
                </tr>
              </tbody>
            ))}
          </div>
        </OrderSubTable>
      </OrderSubTableWrap>
    </div>
  );
};

export default OrderDetailAdm;
