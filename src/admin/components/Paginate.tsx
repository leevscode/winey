/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { getMemberList } from "../api/admMember";

const Paginate: React.FC = () => {
  const [current, setCurrent] = useState<number>(3);

  const handlePage: PaginationProps["onChange"] = (page, pageSize) => {
    console.log(page);
    // setCurrent({ page, pageSize }); // 현재 페이지와 페이지 크기를 객체로 설정하면 안 됩니다.
    setCurrent(page); // 현재 페이지만 설정하도록 수정합니다.
    getMemberList({ page, pageSize });
  };

  return (
    <Pagination
      current={current}
      onChange={(page, pageSize) => handlePage(page, pageSize)}
      total={50}
    />
  );
};

export default Paginate;