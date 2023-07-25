import React from "react";
import { ButtonCancel } from "../../style/GlobalStyle";
import { ProductCartNone } from "../../style/ProductCartStyle";

const ProductCart = () => {
  return (
    <>
      <ProductCartNone>장바구니에 담긴 상품이 없습니다.</ProductCartNone>
      <div>
        장바구니에 총 {2}개의 상품이 있습니다
      </div>
      <ButtonCancel>메인으로 돌아가기</ButtonCancel>
    </>
  );
};

export default ProductCart;
