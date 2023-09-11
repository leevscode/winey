/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import React, { useEffect, useState } from "react";
import { AdmOrderData } from "../../api/admorderlist";
import { Form, Modal, Pagination, PaginationProps, Select } from "antd";
import { useNavigate, useOutletContext } from "react-router";
import {
  MemberOutBt,
  PaginationWrap,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
} from "../../style/AdminLayoutStyle";
import {
  ControllSortOption,
  fetchData,
  fetchData2,
} from "../../interface/ControlInterface";
import { AdmProductWrap } from "../../style/product/AdminProductStyle";
import axios from "axios";

const OrderControlAdm = () => {
  const [orderControl, setOrderControl] = useState<Array<fetchData>>([]);
  const [orderControl2, setOrderControl2] = useState<fetchData2>();
  const [current, setCurrent] = useState(1);
  const { listPathName } = useOutletContext() as { listPathName: string };
  const [totalRecordCount, setTotalRecordCount] = useState<number>(0);
  const navigate = useNavigate();

  // 정렬 state
  const initialSortOption = { type: 'orderdate', sort: 'desc' };
  const [sortOption, setSortOption] =
    useState<ControllSortOption>(initialSortOption);
  const sortValue: Record<string, ControllSortOption> = {
    1: { type: "storeNm", sort: "asc" },
    2: { type: "storeNm", sort: "desc" },
    3: { type: "orderStatus", sort: "asc" },
    4: { type: "orderStatus", sort: "desc" },
  };

// 정렬 옵션 설정 함수
const handleSortChange = (value: string) => {
  if (sortValue[value]) {
    const { type, sort } = sortValue[value];
    setSortOption({ type, sort });
  } else {
    setSortOption(initialSortOption);
  }
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
      setOrderControl(data.content);
      setOrderControl2(data.pageableCustom);
      // console.log(data.list);
      // console.log(data.page);
      setTotalRecordCount(data.pageableCustom.totalElements);
      console.log(data.pageableCustom.totalElements);
    } catch (err) {
      console.error("데이터 로드 중 오류 발생", err);
    }
  };

  useEffect(() => {
    getOrderData();
  }, [current, sortOption]);

  // 배송상태 셀렉트 버튼
  const { Option } = Select;

  const option = [
    { value: "1", label: "결제완료" },
    { value: "2", label: "배송완료" },
    { value: "3", label: "배송중" },
    { value: "4", label: "픽업대기" },
    { value: "5", label: "픽업완료" },
    { value: "6", label: "주문취소" },
  ];

  // 배송상태 변경 모달
  const getStatusLabel = (value: string) => {
    const statusOption = option.find(opt => opt.value === value);
    return statusOption ? statusOption.label : "";
  };

  // 주문상태 변경 모달
  const orderModal = (newStatusValue: string, item: any) => {
    const newStatusLabel = getStatusLabel(newStatusValue);
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>
            배송 상태를 {newStatusLabel}(으)로
            <br />
            바꾸시겠습니까?
          </li>
        </ul>
      ),
      onOk: async () => {
        console.log(item.orderId);
        console.log(newStatusValue);
        try {
          // 데이터를 서버로 전송
          await axios.put(`/api/admin/order`, {
            orderId: item.orderId,
            orderStatus: newStatusValue,
          });
          Modal.warning({
            wrapClassName: "info-modal-wrap notice-modal",
            maskClosable: true,
            content: (
              <ul>
                <li>배송 상태가 변경 되었습니다</li>
              </ul>
            ),
          });
          console.log("상태변경 성공:", newStatusLabel);
          getOrderData();
        } catch (error) {
          console.error("상태변경 실패:", error);
        }
      },
      onCancel: () => {
        getOrderData();
      },
    });
  };

  // 그리드 레이아웃
  const gridTemplateColumns = {
    columns: "0.5fr 0.9fr 1.8fr 0.4fr 0.5fr 0.55fr 0.55fr 0.55fr 0.55fr",
  };

  return (
    <>
      <AdmProductWrap>
        <div className="table-top">
          <p className="total-count">
            총 <span>{totalRecordCount}</span>건
          </p>
          <Select
            defaultValue="기본정렬"
            style={{
              width: 100,
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
        </div>

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
          {orderControl?.map(item => (
            <TableLayoutContents
              key={item.orderId}
              listPathName={listPathName}
              style={{
                gridTemplateColumns: gridTemplateColumns.columns,
              }}
            >
              <React.Fragment>
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
                        value={item.orderStatus.toString()}
                        onChange={async newStatus => {
                          try {
                            orderModal(newStatus, item);
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
            </TableLayoutContents>
          ))}
        </TableVertical>
        <PaginationWrap>
          <Pagination
            current={current}
            pageSize={9}
            onChange={onChange}
            total={orderControl2?.totalElements || 0}
          />
        </PaginationWrap>
      </AdmProductWrap>
    </>
  );
};

export default OrderControlAdm;
