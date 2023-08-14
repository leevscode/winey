/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Outlet } from "react-router-dom";
import { ProductListWrap } from "../../style/ProductListStyle";
import ProductListTitle from "../../components/product/ProductListTitle";

const ProductList = () => {
  return (
    <>
      <ProductListWrap>
        {/* 상품리스트 타이틀 */}
        <ProductListTitle />
        {/* 상품리스트 목록 */}
        <Outlet />
      </ProductListWrap>
    </>
  );
};

export default ProductList;
