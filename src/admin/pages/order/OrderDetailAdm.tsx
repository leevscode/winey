import React, { useEffect, useState } from "react";
import { AdmOrderDetailData } from "../../api/admorderdetail";
import {
  TableHorizontal,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
} from "../../style/AdminLayoutStyle";
import { useLocation, useOutletContext } from "react-router";

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

export interface OdData2 {
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

export interface CommonObj {
  [key: string | number]: any;
}

const OrderDetailAdm = () => {
  const orderId = useLocation();
  const { listPathName } = useOutletContext() as { listPathName: string };

  const [orderDetail, setOrderDetail] = useState<Array<OdData>>([]);
  const [orderDetail2, setOrderDetail2] = useState<Array<OdData2>>([]);
  const getOdDetailData = async () => {
    try {
      const data = await AdmOrderDetailData(parseInt(orderId.state));
      console.log(data);
      setOrderDetail(data.list1);
      setOrderDetail2(data.list2);
      console.log(data.list1);
      console.log(data.list2);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    getOdDetailData();
  }, []);

  const gridTemplateColumns = {
    columns: "0.4fr 0.8fr 0.6fr 1.8fr 0.8fr 0.55fr",
  };

  interface OrderSt {
    [key: number]: string;
  }

  const orderSt: OrderSt = {
    1: "결제 완료",
    2: "배송중",
    3: "배송완료",
    4: "픽업대기",
    5: "픽업완료",
    6: "주문취소",
  };

  return (
    <div>
      <TableVertical>
        {/* 데이터 테이블 - 타이틀 */}
        <TableLayoutTitle
          listPathName={listPathName}
          style={{
            gridTemplateColumns: gridTemplateColumns.columns,
          }}
        >
          <li>주문번호</li>
          <li>주문 날짜</li>
          <li>아이디</li>
          <li>주문상품</li>
          <li>상품금액</li>
          <li>주문수량</li>
        </TableLayoutTitle>
        {/* 데이터 테이블 - 내용 */}
        <TableLayoutContents
          listPathName={listPathName}
          style={{
            gridTemplateColumns: gridTemplateColumns.columns,
          }}
        >
          {orderDetail?.map(item => (
            <React.Fragment key={item.orderId}>
              <li>{item.orderId}</li>
              <li>{item.orderDate}</li>
              <li>{item.email}</li>
              <li>{item.nmKor}</li>
              <li>{item.salePrice}</li>
              <li>{item.quantity}</li>
            </React.Fragment>
          ))}
        </TableLayoutContents>
      </TableVertical>
      <TableHorizontal listPathName={listPathName}>
        {/* 데이터 테이블 - 타이틀 */}
        <table>
          <tbody>
            {orderDetail2?.map(item => (
              <React.Fragment key={item.orderId}>
                <tr>
                  <th className="table-title">주문수량</th>
                  <td className="table-content">{item.quantity}</td>
                  <th className="table-title">픽업 장소</th>
                  <td className="table-content">{item.storeNm}</td>
                </tr>
                <tr>
                  <th className="table-title">총 결제 금액</th>
                  <td className="table-content">{item.totalPrice}</td>
                  <th className="table-title">픽업 날짜</th>
                  <td className="table-content">{item.pickUpDate}</td>
                </tr>
                <tr>
                  <th className="table-title">결제 수단</th>
                  <td className="table-content">
                    {" "}
                    {item.payment === 0 || item.payment === 1
                      ? "신용카드"
                      : item.payment}
                  </td>
                  <th className="table-title">픽업 시간</th>
                  <td className="table-content">{item.pickUpTime}</td>
                </tr>
                <tr>
                  <th className="table-title">픽업 완료 여부</th>
                  <td className="table-content">{orderSt[item.orderStatus]}</td>
                  {/* <th className="table-title">픽업 완료 여부</th>
              <td className="table-content">Y</td> */}
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </TableHorizontal>
    </div>
  );
};

export default OrderDetailAdm;
