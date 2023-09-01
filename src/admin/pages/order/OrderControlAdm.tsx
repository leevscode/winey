/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import React, { useEffect, useState } from "react";
import { AdmOrderData } from "../../api/admorderlist";
import { Form, Pagination, PaginationProps, Select } from "antd";
import { useNavigate, useOutletContext } from "react-router";
import {
  MemberOutBt,
  PaginationWrap,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
} from "../../style/AdminLayoutStyle";
import { client } from "../../../api/client";
import {
  ControllSortOption,
  fetchData,
  fetchData2,
} from "../../interface/ControlInterface";

// interface statusType {
//   [key: string | number]: any;
// }

interface statusData {
  orderStatus: number;
}

const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState<Array<fetchData>>([]);
  const [orderControl2, setOrderControl2] = useState<fetchData2>();
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

  // 정렬 state
  const initialSortOption: ControllSortOption = { type: "0", sort: "0" };
  const [sortOption, setSortOption] =
    useState<ControllSortOption>(initialSortOption);
  const sortValue: Record<string, ControllSortOption> = {
    1: { type: "storeNm", sort: "asc" },
    2: { type: "storeNm", sort: "desc" },
    3: { type: "orderStatus", sort: "asc" },
    4: { type: "orderStatus", sort: "desc" },
  };

  const onChange: PaginationProps["onChange"] = page => {
    console.log(page);
    setCurrent(page);
  };

  // 전체 주문내역 출력
  const getOrderData = async () => {
    try {
      const data = await AdmOrderData(current, sortOption);
      console.log(data);
      setOrderControl(data.list);
      setOrderControl2(data.page);
      console.log(data.list);
      console.log(data.page);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    getOrderData();
  }, [current, sortOption]);

  // 정렬
  const handleSortChange = (value: string) => {
    if (sortValue[value]) {
      const { type, sort } = sortValue[value];
      setSortOption({ type, sort });
    } else {
      setSortOption(initialSortOption);
    }
  };

  const gridTemplateColumns = {
    columns: "0.5fr 0.9fr 1.8fr 0.4fr 0.5fr 0.55fr 0.55fr 0.55fr 0.55fr",
  };

  return (
    <>
      <div>
        <Select
          defaultValue="정렬"
          style={{
            width: 200,
          }}
          onChange={handleSortChange}
          options={[
            {
              label: "픽업장소",
              options: [
                { label: "오름차순", value: "1" },
                { label: "내림차순", value: "2" },
              ],
            },
            {
              label: "픽업배송상태",
              options: [
                { label: "오름차순", value: "3" },
                { label: "내림차순", value: "4" },
              ],
            },
          ]}
        />
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
              <React.Fragment key={item.orderId}>
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
                  <Form style={{ width: "100px" }}>
                    <Form.Item
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "80%",
                        margin: "0",
                      }}
                    >
                      {/* 주문상태 변경 셀렉트 버튼 */}
                      <Select
                        style={{ width: "100px", textAlign: "center" }}
                        placeholder="배송상태를 지정해주세요"
                        defaultValue={item.orderStatus.toString()}
                        onChange={async newStatus => {
                          try {
                            await client.put(`/api/admin/order`, {
                              orderId: item.orderId,
                              orderStatus: newStatus,
                            });
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
                      navigate(`/admin/orderdetail`, { state: item.orderId });
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
        <PaginationWrap>
          <Pagination
            current={current}
            pageSize={15}
            onChange={onChange}
            total={orderControl2?.totalRecordCount || 0}
          />
        </PaginationWrap>
      </div>
    </>
  );
};

export default OrderControlAdm;
