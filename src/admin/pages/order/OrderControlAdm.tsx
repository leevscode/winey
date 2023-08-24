import React, { useEffect, useState } from "react";
import { fetchOrderControlData } from "../../api/admorderlist";
import { OrderTableWrap, OrdertTable } from "../../style/AdminOrderControl";

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

  const tableData = [
    {
      idata: 1,
      data_a: "248",
      data_b: "auth@naver.com",
      data_c: "1862 까베르네",
      data_d: "1",
      data_e: "36,800원",
      data_f: "신용카드",
      data_g: "대구상인점",
      data_h: "배송중",
      data_i: "상세보기",
    },
    {
      idata: 2,
      data_a: "248",
      data_b: "auth@naver.com",
      data_c: "1862 까베르네",
      data_d: "1",
      data_e: "36,800원",
      data_f: "신용카드",
      data_g: "대구상인점",
      data_h: "배송중",
      data_i: "상세보기",
    },
    {
      idata: 3,
      data_a: "248",
      data_b: "auth@naver.com",
      data_c: "1862 까베르네",
      data_d: "1",
      data_e: "36,800원",
      data_f: "신용카드",
      data_g: "대구상인점",
      data_h: "배송중",
      data_i: "상세보기",
    },
  ];

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
            {tableData.map(item => (
              <tr key={item.idata}>
                <td>{item.data_a}</td>
                <td>{item.data_b}</td>
                <td>{item.data_c}</td>
                <td>{item.data_d}</td>
                <td>
                  <p>{item.data_e}</p>
                </td>
                <td>{item.data_f}</td>
                <td>{item.data_g}</td>
                <td>{item.data_h}</td>
                <td>{item.data_i}</td>
              </tr>
            ))}
          </tbody>
        </OrdertTable>
      </OrderTableWrap>
    </div>
  );
};

{
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
}
export default OrderControlAdm;
