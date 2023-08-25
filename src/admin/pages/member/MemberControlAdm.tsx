/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import Paginate from "../../components/Paginate";

import MemberControlListItem from "../../components/member/MemberControlListItem";
import { MemberWrap } from "../../style/AdminMemberStyle";
import { IMemControl, IMemberListUser } from "../../interface/MemberInterface";

const MemberControlAdm = () => {
  const [memberList, setMemberList] = useState<IMemControl>({
    page: {
      page: 1,
      row: 1,
      startIdx: 1,
      totalRecordCount: 1,
      totalPage: 1,
      pageSize: 1,
      prev: true,
      next: true,
      startPage: 1,
      endPage: 1,
    },
    list: [] as IMemberListUser[],
  });
  const regionOptions = [
    { regionNmId: 1, value: "서울" },
    { regionNmId: 2, value: "부산" },
    { regionNmId: 3, value: "대구" },
    { regionNmId: 4, value: "인천" },
    { regionNmId: 5, value: "광주" },
    { regionNmId: 6, value: "대전" },
    { regionNmId: 7, value: "울산" },
    { regionNmId: 8, value: "세종" },
    { regionNmId: 9, value: "경기" },
    { regionNmId: 10, value: "강원" },
    { regionNmId: 11, value: "충북" },
    { regionNmId: 12, value: "충남" },
    { regionNmId: 13, value: "전북" },
    { regionNmId: 14, value: "전남" },
    { regionNmId: 15, value: "경북" },
    { regionNmId: 16, value: "경남" },
    { regionNmId: 17, value: "제주" },
  ];

  const regionConvert = memberList.list.map(item => {
    const changeList = regionOptions.filter(
      option => item.regionNmId === option.regionNmId,
    );
    if (changeList.length > 0) {
      return { ...item, textRegion: changeList[0].value };
    }
    return item;
  });
  // setMemberList(prev => ({
  //   ...prev,
  //   textRegion: regionConvert,
  // }));

  return (
    <MemberWrap>
      <MemberControlListItem regionConvert={regionConvert} />
      <Paginate memberList={memberList} setMemberList={setMemberList} />
    </MemberWrap>
  );
};

export default MemberControlAdm;
