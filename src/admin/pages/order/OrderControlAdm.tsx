import React, { useEffect, useState } from "react";
import { fetchOrderData, orderStatusData } from "../../api/admorderlist";
import { OrderTableWrap, OrderTable } from "../../style/AdminOrderControl";
import { Form, Select } from "antd";

export interface fetchData {
  id: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  // count: string;
}

interface ObjectType {
  [key: string | number]: any;
}

interface statusType {
  [key: string | number]: any;
}

interface statusData {
  orderStatus: number;
}
const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState<Array<fetchData>>([]);
  const [orderSt, setOrderSt] = useState<statusData>();
  const option = [
    { value: "1", label: "결제완료" },
    { value: "2", label: "배송준비" },
    { value: "3", label: "배송중" },
    { value: "4", label: "픽업대기" },
    { value: "5", label: "픽업완료" },
    { value: "6", label: "주문취소" },
  ];

  const { Option } = Select;

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

  const statusData = async () => {
    try {
      const data: statusType = await orderStatusData(statusData);
      console.log(data);
      setOrderSt(data.list);
      console.log(data.list);
    } catch (err) {
      console.error("err:", err);
    }
  };

  useEffect(() => {
    fetchData();
    statusData();
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
                <td>
                  {/* {item.orderStatus} */}
                  <Form name="control-hooks" style={{ width: "250px" }}>
                    <Form.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Select
                        style={{ width: "300px" }}
                        placeholder="배송상태를 지정해주세요"
                        // onChange={}
                        allowClear
                      >
                        {option.map(option => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </td>
                <td>
                  상세
                  <br />
                  내역
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </OrderTableWrap>
    </div>
  );
};

export default OrderControlAdm;
