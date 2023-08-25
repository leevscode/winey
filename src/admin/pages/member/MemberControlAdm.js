/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import Paginate from "../../components/Paginate";
// import { getMemberList } from "../../api/patchAdmMember";
// import MemberControlListItem from "../../components/member/MemberControlListItem";
// import { IMemberListObject, IPage } from "../../interface/LayoutInterface";
import {
  LayoutTable,
  PaginationWrap,
  TableWrap,
} from "../../style/AdminLayoutStyle";
import MemberControlListItem from "../../components/member/MemberControlListItem";
import { MemberWrap } from "../../style/AdminMemberControl";

const MemberControlAdm = () => {
  const [memberList, setMemberList] = useState([]);

  // const getList = async () => {
  //   try {
  //     const data = await getMemberList(setMemberList);
  //     console.log("data", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log;
  // useEffect(() => {
  //   getList();
  // }, []);

  return (
    <MemberWrap>
      <MemberControlListItem memberList={memberList} />
      <Paginate memberList={memberList} setMemberList={setMemberList} />
    </MemberWrap>
  );
};

export default MemberControlAdm;
