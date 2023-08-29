/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getMemberDetail } from "../../api/patchAdmMember";
import {
  IUserDetail,
  IUserDetailState,
  IinitialPg,
} from "../../interface/MemberInterface";
import { PaginationWrap } from "../../style/AdminLayoutStyle";

// 불러온 멤버리스트를 props로 전달받음
const MemberDetailPaginate = ({
  userInfomation,
  setUserInfomation,
  clickUserId,
}: IUserDetailState) => {
  // 페이지 정보(page / row: 페이지 당 개수)
  const [paginate, setPaginate] = useState<IinitialPg>({ page: 1, row: 12 });

  const pageInfo: IUserDetail["page"] | null = userInfomation.page;

  const onChange = async (page: number) => {
    setPaginate(prevPaginate => ({ ...prevPaginate, page }));
  };

  const getPage = async () => {
    // 페이지 정보를 보내고(paginate) , list 정보를 받는다
    const data = await getMemberDetail(
      paginate,
      setUserInfomation,
      clickUserId,
    );
    return data;
  };

  useEffect(() => {
    getPage();
  }, [paginate.page]);

  console.log("paginate", paginate);
  console.log("pageInfo", pageInfo);
  return (
    <PaginationWrap>
      {pageInfo && (
        <Pagination
          current={pageInfo.page}
          pageSize={12}
          onChange={page => onChange(page)}
          total={pageInfo.totalRecordCount}
          // size="small"
        />
      )}
    </PaginationWrap>
  );
};

export default MemberDetailPaginate;
