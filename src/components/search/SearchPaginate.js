/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect } from "react";
import { PaginationWrap } from "../../admin/style/AdminLayoutStyle";
import { Pagination } from "antd";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { v4 } from "uuid";
import { getSearchPatch } from "../../api/searchpatch";
import { readSortRecoil } from "./SearchFilter";
import { readUrlRecoil } from "./SearchList";
import { searchResultRecoil } from "./SearchBar";

// 페이지값 저장 recoil
export const pageRecoil = atom({
  key: `pageRecoil/${v4()}`,
  default: 1,
});

const SearchPaginate = () => {
  // 페이지 recoil
  const [clickPage, setClickPage] = useRecoilState(pageRecoil);
  console.log("clickPage", clickPage);
  // url Make
  const urlData = useRecoilValue(readUrlRecoil);
  // recoil sort
  const sortList = useRecoilValue(readSortRecoil);
  // 검색결과 받아오는 recoil
  const [resultData, setResultData] = useRecoilState(searchResultRecoil);

  const pageOnChange = async page => {
    setClickPage(page);
    console.log("페이지 onchange", page);
    try {
      const result = await getSearchPatch({
        urlData,
        sortList,
        clickPage,
      });
      return setResultData(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSearchPatch(clickPage);
  }, [clickPage]);
  return (
    <div style={{ marginBottom: "100px" }}>
      <PaginationWrap>
        <Pagination
          current={clickPage}
          pageSize={6}
          onChange={page => pageOnChange(page)}
          total={resultData?.count}
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
