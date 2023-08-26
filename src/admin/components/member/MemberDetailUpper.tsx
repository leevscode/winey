import React from "react";
import { IUserDetail } from "../../interface/MemberInterface";

const MemberDetailUpper = ({
  userInfomation,
}: {
  userInfomation: IUserDetail["userInfo"];
}) => {
  return (
    <div>
      <ul>
        {/* <li>회원 번호 : {userInfomation.userId}</li>
        <li>회원 아이디 : {userInfomation.email}</li>
        <li>회원 이름 : {userInfomation.nm}</li> */}
      </ul>
    </div>
  );
};

export default MemberDetailUpper;
