import React from "react";
import { IUserDetail } from "../../interface/MemberInterface";
import { MemberDetailUpperWrap } from "../../style/AdminMemberStyle";

const MemberDetailUpper = ({
  userInfomation,
}: {
  userInfomation: IUserDetail["userInfo"];
}) => {
  return (
    <MemberDetailUpperWrap>
      <ul>
        <li>
          <b>회원 번호 :</b> {userInfomation.userId}
        </li>
        <li>
          <b>회원 아이디 :</b> {userInfomation.email}
        </li>
        <li>
          <b>회원 이름 :</b> {userInfomation.nm}
        </li>
      </ul>
    </MemberDetailUpperWrap>
  );
};

export default MemberDetailUpper;
