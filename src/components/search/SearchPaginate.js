/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect } from "react";
import { PaginationWrap } from "../../admin/style/AdminLayoutStyle";
import { ConfigProvider, Pagination } from "antd";
import {
  atom,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { v4 } from "uuid";
import { getSearchPatch } from "../../api/searchpatch";
import { readSortRecoil } from "./SearchFilter";
import { readUrlRecoil } from "./SearchList";
import { searchResultRecoil } from "./SearchBar";
import { SearchPaginationWrap } from "../../style/SearchStyle";

// 페이지값 저장 recoil
export const pageRecoil = atom({
  key: `pageRecoil/${v4()}`,
  default: 1,
});

const SearchPaginate = () => {
  // 페이지 recoil
  const [clickPage, setClickPage] = useRecoilState(pageRecoil);
  // url Make
  const urlData = useRecoilValue(readUrlRecoil);
  // recoil sort
  const sortList = useRecoilValue(readSortRecoil);
  // 검색결과 받아오는 recoil
  const [resultData, setResultData] = useRecoilState(searchResultRecoil);

  const pageOnChange = async page => {
    const temp = await setClickPage(page);
    // console.log("페이지 onchange", page);
    try {
      const result = await getSearchPatch({
        urlData,
        sortList,
        clickPage: page,
      });
      return setResultData(result);
    } catch (error) {
      console.log("error", error);
    }
  };
  // console.log("-----page clickPage", clickPage);

  useEffect(() => {
    // console.log("-----page re-render");
  }, [clickPage]);
  return (
    <div>
      <SearchPaginationWrap>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#79213d",
              fontFamily:
                '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            },
          }}
        >
          <Pagination
            current={clickPage}
            pageSize={6}
            onChange={page => pageOnChange(page)}
            total={resultData?.count}
            // defaultCurrent={clickPage}
          />
        </ConfigProvider>
      </SearchPaginationWrap>
    </div>
  );
};

export default SearchPaginate;
