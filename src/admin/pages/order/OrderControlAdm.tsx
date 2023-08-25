import React, { useEffect, useState } from "react";
import { fetchOrderData } from "../../api/admorderlist";
import { OrderTableWrap, OrderTable } from "../../style/AdminOrderControl";

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

interface ObjectType {
  [key: string | number]: any;
}

const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState<Array<fetchData>>([]);

  const fetchData = async () => {
    try {
      const data: ObjectType = await fetchOrderData();
      console.log(data);
      setOrderControl(data.list);
      console.log(data.list);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <OrderTableWrap>
        <OrderTable>
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
            {orderControl.map(item => (
              <tr key={item.id}>
                <td>{item.orderDate}</td>
                <td>{item.email}</td>
                <td>{item.nmKor}</td>
                <td>{item.quantity}</td>
                <td>
                  {item.totalPrice.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </td>
                <td>
                  {item.payment === 0 || item.payment === 1
                    ? "신용카드"
                    : item.payment}
                </td>
                <td>{item.pickUpStore}</td>
                <td>{item.count}</td>
                <td>상세보기</td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </OrderTableWrap>
    </div>
  );
};

export default OrderControlAdm;
