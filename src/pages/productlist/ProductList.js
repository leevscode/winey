import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ProductListWrap } from "../../style/ProductListStyle";
import ProductListTitle from "../../components/product/ProductListTitle";
import ProductCartModal from "../../components/product/ProductCartModal";

const ProductList = () => {
  // 장바구니 완료 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProductListWrap>
        {/* 상품리스트 타이틀 */}
        <ProductListTitle />
        {/* 상품리스트 목록 */}
        <Outlet setIsModalOpen={setIsModalOpen} />
      </ProductListWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default ProductList;
