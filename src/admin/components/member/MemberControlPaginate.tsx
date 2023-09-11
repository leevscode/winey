/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getMemberList } from "../../api/patchAdmMember";
import {
  IMemControl,
  IMemberState,
  IinitialPg,
} from "../../interface/MemberInterface";
import { PaginationWrap } from "../../style/AdminLayoutStyle";

// 불러온 멤버리스트를 props로 전달받음
const MemberControlPaginate = ({
  memberList,
  setMemberList,
  sortOption,
  sortSearch,
  textSearch,
}: IMemberState) => {
  // 페이지 정보(page / row: 페이지 당 개수)
  const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 10 });

  const pageInfo: IMemControl["pageableCustom"] | null =
    memberList?.pageableCustom;

  const onChange = async (page: number) => {
    setPaginate(prevPaginate => ({ ...prevPaginate, page }));
  };

  const getPage = async () => {
    // 페이지 정보를 보내고(paginate) , list 정보를 받는다
    try {
      const getdata: any = await getMemberList(
        paginate,
        sortOption,
        sortSearch,
        textSearch,
      );
      setMemberList(getdata);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPage();
  }, [paginate.page, sortOption, textSearch]);
  return (
    <PaginationWrap>
      {pageInfo && (
        <Pagination
          current={pageInfo.page}
          pageSize={paginate.row}
          onChange={page => onChange(page)}
          total={pageInfo.totalElements}
          // size="small"
        />
      )}
    </PaginationWrap>
  );
};

export default MemberControlPaginate;
