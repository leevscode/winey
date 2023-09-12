/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import {
  TableLayoutContents,
  TableLayoutTitle,
  TableVertical,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import { useNavigate, useOutletContext } from "react-router";
import { IMemControl, IMemberListUser } from "../../interface/MemberInterface";
import { Modal } from "antd";
import { putMemberOut } from "../../api/patchAdmMember";

const MemberControlListItem = ({
  regionConvert,
  setMemberList,
  memberList,
  setRender,
}: {
  regionConvert: IMemberListUser[];
  setMemberList: React.Dispatch<React.SetStateAction<IMemControl>>;
  memberList: IMemControl;
  setRender: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const navigate = useNavigate();
  const { listPathName } = useOutletContext() as { listPathName: string };
  const gridTemplateColumns = {
    columns: "0.4fr 1.2fr 0.8fr 0.6fr 0.6fr 0.6fr 0.6fr",
  };

  const handleMemberOrder = (item: IMemberListUser) => {
    navigate("/admin/memberdetail", { state: item.userId });
  };
  const handleMemberOut = (item: IMemberListUser) => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      content: (
        <ul>
          <li>해당 회원의 정보를 삭제하시겠습니까?</li>
          <li>삭제된 회원은 복구가 불가능 합니다.</li>
        </ul>
      ),
      async onOk() {
        try {
          await putMemberOut(item.userId);
          setRender("랜더링");
          // console.log("회원탈퇴");
          return;
        } catch (error) {
          // console.log("회원탈퇴실패", error);
          return;
        }
      },
      onCancel() {
        // console.log("회원탈퇴실패");
      },
    });
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
            regionConvert?.map(item => (
              <TableLayoutContents
                listPathName={listPathName}
                key={item.userId}
                style={{
                  gridTemplateColumns: gridTemplateColumns.columns,
                }}
              >
                <li>{item.userId}</li>
                {item.email ? (
                  <li>{item.email}</li>
                ) : (
                  <li>
                    <img
                      style={{ width: "20px", marginRight: "3px" }}
                      src={`${process.env.PUBLIC_URL}/images/kakaologo.jpg`}
                    />
                    카카오 로그인 회원
                  </li>
                )}
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
                  <button
                    onClick={() => handleMemberOut(item)}
                    className="memberOutBt"
                  >
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
