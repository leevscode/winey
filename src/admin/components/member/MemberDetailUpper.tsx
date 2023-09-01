/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React from "react";
import { IUserDetail } from "../../interface/MemberInterface";
import {
  MemberDetailUpperWrap,
  MemberDetailWrap,
} from "../../style/AdminMemberStyle";
import { TableHorizontal, TableWrap } from "../../style/AdminLayoutStyle";
import { useOutletContext } from "react-router-dom";

const MemberDetailUpper = ({
  userInfomation,
}: {
  userInfomation: IUserDetail["userInfo"];
}) => {
  const { listPathName } = useOutletContext() as { listPathName: string };

  return (
    <TableWrap>
      <TableHorizontal listPathName={listPathName}>
        <table>
          <caption>데이터테이블</caption>
          <tbody>
            <tr>
              <th>회원 번호 :</th> <td>{userInfomation.userId}</td>
              <th></th> <td></td>
            </tr>
            <tr>
              <th>회원 아이디 :</th> <td>{userInfomation.email}</td>
              <th>총 구매건수 :</th> <td>{userInfomation.orderCount} 건</td>
            </tr>
            <tr>
              <th>회원 이름 :</th> <td>{userInfomation.nm}</td>
              <th>총 구매금액 :</th>{" "}
              <td>{userInfomation.sumOrderPrice.toLocaleString()} 원</td>
            </tr>
          </tbody>
        </table>
      </TableHorizontal>
    </TableWrap>
  );
};

export default MemberDetailUpper;
