/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React from "react";
import { IUserDetail } from "../../interface/MemberInterface";
import { TableHorizontal, TableWrap } from "../../style/AdminLayoutStyle";
import { useOutletContext } from "react-router-dom";
import { MemberDetailUpperWrap } from "../../style/AdminMemberStyle";

const MemberDetailUpper = ({
  userInfomation,
}: {
  userInfomation: IUserDetail["userInfo"];
}) => {
  const { listPathName } = useOutletContext() as { listPathName: string };

  return (
    <MemberDetailUpperWrap>
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
                <th>회원 아이디 :</th>
                {userInfomation.email ? (
                  <td>{userInfomation.email}</td>
                ) : (
                  <td>
                    <img
                      style={{ width: "20px", marginRight: "3px" }}
                      src={`${process.env.PUBLIC_URL}/images/kakaologo.jpg`}
                    />
                    카카오 로그인 회원
                  </td>
                )}
                <th>총 구매건수 :</th> <td>{userInfomation.orderCount} 건</td>
              </tr>
              <tr>
                <th>회원 이름 :</th> <td>{userInfomation.unm}</td>
                <th>총 구매금액 :</th>{" "}
                <td>{userInfomation.sumOrderPrice.toLocaleString()} 원</td>
              </tr>
            </tbody>
          </table>
        </TableHorizontal>
      </TableWrap>
    </MemberDetailUpperWrap>
  );
};

export default MemberDetailUpper;
