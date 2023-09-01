/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import {
  LayoutTable,
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import MemberDetailAdm from "../../pages/member/MemberDetailAdm";
import { useNavigate, useOutletContext } from "react-router";
import { IMemberListUser, IUserIdState } from "../../interface/MemberInterface";

const MemberControlListItem = ({
  regionConvert,
}: {
  regionConvert: IMemberListUser[];
}) => {
  const navigate = useNavigate();
  const { listPathName } = useOutletContext() as { listPathName: string };
  const gridTemplateColumns = {
    columns: "0.4fr 1.2fr 0.8fr 0.6fr 0.6fr 0.6fr 0.6fr",
  };

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
        <TableVertical>
          <TableLayoutTitle
            listPathName={listPathName}
            style={{
              gridTemplateColumns: gridTemplateColumns.columns,
            }}
          >
            <li>회원번호</li>
            <li>아이디</li>
            <li>이름</li>
            <li>가입일자</li>
            <li>주 픽업지역</li>
            <li>주문내역</li>
            <li>회원삭제</li>
          </TableLayoutTitle>
          {regionConvert &&
            regionConvert.map(item => (
              <TableLayoutContents
                listPathName={listPathName}
                key={item.userId}
                style={{
                  gridTemplateColumns: gridTemplateColumns.columns,
                }}
              >
                <li>{item.userId}</li>
                <li>{item.email}</li>
                <li>{item.nm}</li>
                <li>{item.createdAt}</li>
                <li>{item.textRegion}</li>
                <li>
                  <button
                    onClick={() => handleMemberOrder(item)}
                    className="detailBt"
                  >
                    주문상세보기
                  </button>
                </li>
                <li>
                  <button onClick={handleMemberOut} className="memberOutBt">
                    탈퇴
                  </button>
                </li>
              </TableLayoutContents>
            ))}
        </TableVertical>
      </TableWrap>
    </>
  );
};

export default MemberControlListItem;
