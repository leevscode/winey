import React from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";

const MemberControlListItem = ({ memberList }) => {
  console.log("memberList", memberList);
  return (
    <>
      <TableWrap>
        <LayoutTable>
          <caption>테이블</caption>
          <thead>
            <tr>
              <th>회원번호</th>
              <th>아이디</th>
              <th>이름</th>
              <th>주 픽업지역</th>
              <th>주문내역</th>
              <th>회원삭제</th>
            </tr>
          </thead>
          {memberList.list && (
            <tbody>
              {memberList.list.map(item => (
                <tr key={item.userId}>
                  <td>{item.userId}</td>
                  <td>{item.email}</td>
                  <td>{item.nm}</td>
                  <td>{item.regionNmId}</td>
                  <td>
                    <button>주문상세보기</button>
                  </td>
                  <td>
                    <button>탈퇴</button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </LayoutTable>
      </TableWrap>
    </>
  );
};

export default MemberControlListItem;
