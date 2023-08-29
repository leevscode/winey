import React, { useEffect, useState } from "react";
import { AdmOrderData, orderStatusData } from "../../api/admorderlist";
import { Form, Pagination, PaginationProps, Select } from "antd";
import { Navigate, useNavigate, useOutletContext } from "react-router";
import {
  MemberOutBt,
  TableHorizontal,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
} from "../../style/AdminLayoutStyle";
import { client } from "../../../api/client";

export interface fetchData {
  id: number;
  orderDate: number;
  email?: number;
  nmKor?: number;
  quantity: number;
  totalPrice: number;
  payment?: number;
  pickUpStore: string;
  orderStatus: number;
  Navigate: string;
  orderId: number;
}

// 수정예정
// interface ObjectType {
//   [key: string | number]: any;
// }

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
    { value: "3", label: "배송중" },
    { value: "2", label: "배송완료" },
    { value: "4", label: "픽업대기" },
    { value: "5", label: "픽업완료" },
    { value: "6", label: "주문취소" },
  ];

  const { Option } = Select;
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const { listPathName } = useOutletContext() as { listPathName: string };
  const onChange: PaginationProps["onChange"] = page => {
    console.log(page);
    setCurrent(page);
  };

  const getOrderData = async () => {
    try {
      const data = await AdmOrderData(current);
      console.log(data);
      setOrderControl(data.list);
      console.log(data.list);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  const statusData = async () => {
    try {
      const data: statusType = await orderStatusData();
      console.log(data);
      setOrderSt(data.list);
      console.log(data.list);
    } catch (err) {
      console.error("err:", err);
    }
  };

  useEffect(() => {
    statusData();
    getOrderData();
  }, [current]);

  const gridTemplateColumns = {
    columns: "0.4fr 0.8fr 1.6fr 0.5fr 0.5fr 0.55fr 0.55fr 0.55fr 0.55fr",
  };

  return (
    <>
      <div>
        <TableVertical>
          <TableLayoutTitle
            listPathName={listPathName}
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            <li>주문날짜</li>
            <li>아이디</li>
            <li>주문상품</li>
            <li>주문수량</li>
            <li>결제금액</li>
            <li>결제수단</li>
            <li>픽업장소</li>
            <li>픽업배송상태</li>
            <li>상세보기</li>
          </TableLayoutTitle>
          {/* 데이터 테이블 - 내용 */}
          <TableLayoutContents
            listPathName={listPathName}
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            {orderControl.map(item => (
              <React.Fragment key={item.id}>
                <li>{item.orderDate}</li>
                <li>{item.email}</li>
                <li>{item.nmKor}</li>
                <li>{item.quantity}</li>
                <li>
                  {item.totalPrice.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </li>
                <li>
                  {item.payment === 0 || item.payment === 1
                    ? "신용카드"
                    : item.payment}
                </li>
                <li>{item.pickUpStore}</li>
                <li>
                  <Form name="control-hooks" style={{ width: "100px" }}>
                    <Form.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "80%",
                        margin: "0",
                      }}
                    >
                      <Select
                        style={{ width: "100px", textAlign: "center" }}
                        placeholder="배송상태를 지정해주세요"
                        defaultValue={item.orderStatus.toString()}
                        onChange={async newStatus => {
                          try {
                            await client.put(
                              `/api/admin/order/${item.orderId}`,
                              {
                                orderStatus: newStatus,
                              },
                            );
                            console.log("상태변경 성공:", item.orderStatus);
                            getOrderData();
                          } catch (error) {
                            console.error("상태변경 실패:", error);
                          }
                        }}
                      >
                        {option.map(option => (
                          <Option key={option.value} value={option.value}>
                            {option.label}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Form>
                </li>
                <li>
                  <MemberOutBt
                    style={{ fontSize: "1.3rem" }}
                    onClick={() => {
                      // navigate(`/order/${item.orderId}`);
                      navigate(`/admin/orderdetail`, {state : item.orderId});
                    }}
                  >
                    상세
                    <br />
                    내역
                  </MemberOutBt>
                </li>
              </React.Fragment>
            ))}
          </TableLayoutContents>
        </TableVertical>
        <Pagination
          current={current}
          pageSize={15}
          onChange={onChange}
          total={500}
        />
      </div>
    </>
  );
};

export default OrderControlAdm;
