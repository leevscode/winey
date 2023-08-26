/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getMemberList } from "../api/patchAdmMember";
import {
  IMemControl,
  IMemberState,
  IinitialPg,
} from "../interface/MemberInterface";

// 불러온 멤버리스트를 props로 전달받음
const PaginateEX = ({ memberList, setMemberList }: IMemberState) => {
  // 페이지 정보(page / row: 페이지 당 개수)
  const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 12 });

  const pageInfo: IMemControl["page"] | null = memberList.page;

  // 클릭한 페이지 숫자를 set함수에 담아서
  const onChange = async (page: number) => {
    setPaginate(prevPaginate => ({ ...prevPaginate, page }));
  };

  // axios연결
  const getPageData = async () => {
    // 페이지 정보를 보내고(paginate) , list데이터 정보를 받는다
    const data = await getMemberList(paginate, setMemberList);
  };

  useEffect(() => {
    getPageData();
  }, [paginate.page]);
  return (
    <>
      {pageInfo && (
        <Pagination
          // 클릭하는 페이지 숫자를 담아옴
          current={pageInfo.page}
          pageSize={pageInfo.pageSize}
          onChange={page => onChange(page)}
          // 총 데이터 개수
          total={Math.floor(pageInfo.totalRecordCount)}
          // size="small"
        />
      )}
    </>
  );
};

export default PaginateEX;
