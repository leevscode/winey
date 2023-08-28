import React from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";
import { IUserOrderList } from "../../interface/MemberInterface";
import { MemberDetailWrap } from "../../style/AdminMemberStyle";

const MemberDetailListItem = ({
  userInfomation,
}: {
  userInfomation: IUserOrderList[];
}) => {
  const orderOption = [
    { value: 1, label: "결제완료" },
    { value: 2, label: "배송중" },
    { value: 3, label: "배송완료" },
    { value: 4, label: "픽업대기" },
    { value: 5, label: "픽업완료" },
    { value: 6, label: "주문취소" },
  ];
  const orderConvert: Array<IUserOrderList> = userInfomation.map(item => {
    const changeList: {
      label: string;
      value: number;
    }[] = orderOption.filter(option => item.orderStatus === option.value);
    if (changeList.length > 0) {
      return { ...item, textOrder: changeList[0].label };
    }
    return item;
  });
  console.log("userInfomation111", userInfomation);
  console.log("orderConvert", orderConvert);
  return (
    <MemberDetailWrap>
      <TableWrap>
        <LayoutTable>
          <caption>테이블</caption>
          <thead>
            <tr>
              <th>주문번호</th>
              <th>주문날짜</th>
              <th>상품이름</th>
              <th>결제금액</th>
              <th>픽업매장</th>
              <th>주문상태</th>
              <th>개수</th>
            </tr>
          </thead>
          {orderConvert.length === 0 ? (
            <tbody>
              <h3>해당회원의 주문내역이 없습니다.</h3>
            </tbody>
          ) : (
            <tbody>
              {orderConvert.map(item => (
                <tr key={item.orderId}>
                  <td>{item.orderId}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.nmKor}</td>
                  <td>{item.price.toLocaleString()}원</td>
                  <td>이마트 {item.storeNm}</td>
                  <td>{item.textOrder}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          )}
        </LayoutTable>
      </TableWrap>
    </MemberDetailWrap>
  );
};

export default MemberDetailListItem;
