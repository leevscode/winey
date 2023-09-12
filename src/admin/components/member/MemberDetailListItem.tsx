/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React from "react";
import {
  LayoutTable,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import {
  IUserOrderList,
  IUserOrderListUpper,
} from "../../interface/MemberInterface";
import { MemberDetailWrap } from "../../style/AdminMemberStyle";
import { useOutletContext } from "react-router";

const MemberDetailListItem = ({
  userInfomation,
}: {
  userInfomation: IUserOrderList[];
}) => {
  const { listPathName } = useOutletContext() as { listPathName: string };
  const gridTemplateColumns = {
    columns: "0.4fr 0.7fr 1.5fr 0.6fr 0.8fr 0.55fr 0.5fr",
  };
  const orderOption = [
    { value: 1, label: "결제완료" },
    { value: 2, label: "배송중" },
    { value: 3, label: "배송완료" },
    { value: 4, label: "픽업대기" },
    { value: 5, label: "픽업완료" },
    { value: 6, label: "주문취소" },
  ];
  const orderConvert: IUserOrderList[] = userInfomation?.map(
    (item: IUserOrderList) => {
      const changeList: {
        label: string;
        value: number;
      }[] = orderOption?.filter(option => item.orderStatus === option.value);
      if (changeList.length > 0) {
        return { ...item, textOrder: changeList[0].label };
      }
      return item;
    },
  );

  // console.log("userInfomationQQ", userInfomation);
  // console.log("orderConvert", orderConvert);
  return (
    <MemberDetailWrap>
      <TableWrap>
        <TableVertical>
          <TableLayoutTitle
            listPathName={listPathName}
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            <li>주문번호</li>
            <li>주문날짜</li>
            <li>상품이름</li>
            <li>결제금액</li>
            <li>픽업매장</li>
            <li>주문상태</li>
            <li>주문수량</li>
          </TableLayoutTitle>
          {orderConvert?.length !== 0 ? (
            orderConvert?.map(item => (
              <TableLayoutContents
                listPathName={listPathName}
                key={item.orderId}
                style={{
                  gridTemplateColumns: gridTemplateColumns.columns,
                }}
              >
                <li>{item.orderId}</li>
                <li>{item.orderDate?.slice(0, 10)}</li>
                <li>{item.nmKor}건</li>
                <li>{item.price.toLocaleString()} 원</li>
                <li>이마트 {item.storeNm}</li>
                <li>{item.textOrder}</li>
                <li>{item.count}</li>
              </TableLayoutContents>
            ))
          ) : (
            <p className="noItem"> 해당 회원의 주문내역이 없습니다</p>
          )}
        </TableVertical>
      </TableWrap>
    </MemberDetailWrap>
  );
};

export default MemberDetailListItem;
