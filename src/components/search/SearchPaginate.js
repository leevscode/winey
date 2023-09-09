/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect } from "react";
import { PaginationWrap } from "../../admin/style/AdminLayoutStyle";
import { Pagination } from "antd";
import { atom, useRecoilState } from "recoil";
import { v4 } from "uuid";
import { getSearchPatch } from "../../api/searchpatch";

// 페이지값 저장 recoil
export const pageRecoil = atom({
  key: `pageRecoil/${v4()}`,
  default: 1,
});

const SearchPaginate = () => {
  // 페이지 recoil
  const [clickPage, setClickPage] = useRecoilState(pageRecoil);
  console.log("clickPage", clickPage);

  const pageOnChange = page => {
    setClickPage(page);
    console.log("페이지 onchange", page);
  };

  useEffect(() => {
    getSearchPatch(clickPage);
  }, [clickPage]);
  return (
    <div>
      <PaginationWrap>
        <Pagination
          current={clickPage}
          pageSize={6}
          onChange={page => pageOnChange(page)}
          total={10}
          // current={pageInfo.page}
          // pageSize={paginate.row}
          // onChange={page => pageOnChange(page)}
          // total={pageInfo.totalElements}
        />
      </PaginationWrap>
    </div>
  );
};

export default SearchPaginate;
