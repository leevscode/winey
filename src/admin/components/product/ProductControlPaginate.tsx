/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import { Pagination } from "antd";
import React from "react";
import { ProductControlPaginateWrap } from "../../style/product/AdminProductStyle";

// props 타입 정의
interface Iprops {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

const ProductControlPaginate = ({ page, setPage, totalPage }: Iprops) => {
  // console.log("page", page);
  // console.log("totalPage", totalPage);
  // 페이지네이션 버튼 클릭 이벤트
  const handleOnChange = (_page: number) => {
    // console.log("페이지 버튼 눌렀습니다", page);
    setPage(_page);
  };
  return (
    <ProductControlPaginateWrap>
      <Pagination
        current={page}
        onChange={handleOnChange}
        total={totalPage}
        pageSize={12}
      />
    </ProductControlPaginateWrap>
  );
};

export default ProductControlPaginate;
