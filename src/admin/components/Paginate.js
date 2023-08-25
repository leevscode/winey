/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getMemberList } from "../api/patchAdmMember";
import { PaginationWrap } from "../style/AdminLayoutStyle";

const Paginate = ({ memberList, setMemberList }) => {
  // 페이지 정보(page / row: 페이지 당 개수)
  const [paginate, setPaginate] = useState({ page: 1, row: 12 });
  const pageInfo = memberList.page;

  const onChange = async page => {
    setPaginate(prevPaginate => ({ ...prevPaginate, page }));
    console.log("page", page);
  };

  const getPage = async () => {
    // 페이지 정보를 보내고(paginate) , list 정보를 받는다
    const data = await getMemberList({ paginate, setMemberList });
  };

  useEffect(() => {
    getPage();
  }, [paginate.page]);
  console.log("paginate", paginate);
  console.log("pageInfo", pageInfo);
  return (
    <>
      {pageInfo && (
        <Pagination
          current={pageInfo.page}
          pageSize={pageInfo.pageSize}
          onChange={page => onChange(page)}
          total={pageInfo.totalRecordCount}
          // size="small"
        />
      )}
    </>
  );
};

export default Paginate;
