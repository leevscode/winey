/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import { LayoutTable, TableWrap } from "../../style/AdminLayoutStyle";
import MemberDetailAdm from "../../pages/member/MemberDetailAdm";
import { useNavigate } from "react-router";
import { IMemberListUser, IUserIdState } from "../../interface/MemberInterface";

const MemberControlListItem = ({
  regionConvert,
}: {
  regionConvert: IMemberListUser[];
}) => {
  const navigate = useNavigate();
  const handleMemberOrder = (item: IMemberListUser) => {
    console.log("item.userId", item.userId);
    navigate("/admin/memberdetail", { state: item.userId });
  };
  const handleMemberOut = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
          {regionConvert && (
            <tbody>
              {regionConvert.map(item => (
                <tr key={item.userId}>
                  <td>{item.userId}</td>
                  <td>{item.email}</td>
                  <td>{item.nm}</td>
                  <td>
                    {/* {item.regionNmId} */}
                    {item.textRegion}
                  </td>
                  <td>
                    <button
                      onClick={() => handleMemberOrder(item)}
                      className="detailBt"
                    >
                      주문상세보기
                    </button>
                  </td>
                  <td>
                    <button onClick={handleMemberOut} className="memberOutBt">
                      탈퇴
                    </button>
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
