import React from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";
import { IUserDetail } from "../../interface/MemberInterface";

const MemberDetailListItem: React.FC<IUserDetail> = (
  // { userInfomation }
  ) => {
  return (
    <div>
      {/* <TableWrap>
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
          {userInfomation && (
            <tbody>
              {userInfomation.map(item => (
                <tr key={item.orderId}>
                  <td>{item.orderId}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.nmKor}</td>
                  <td>{item.price}</td>
                  <td>{item.storeNm}</td>
                  <td>{item.orderStatus}</td>
                  <td>{item.count}</td>
                </tr>
              ))}
            </tbody>
          )}
        </LayoutTable>
      </TableWrap> */}
    </div>
  );
};

export default MemberDetailListItem;
