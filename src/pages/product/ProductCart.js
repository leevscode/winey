import React, { useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { ProductCartNone, ProductCartIn } from "../../style/ProductCartStyle";
import { useNavigate } from "react-router";

const ProductCart = () => {
  // 장바구니에 담긴 상품의 수를 추적하는 상태
  const [cartItemCount, setCartItemCount] = useState(0);

  // 상품을 장바구니에 추가하는 함수
  const addItemToCart = () => {
    // 상품 추가
    setCartItemCount(cartItemCount + 1);
  };

  // 상품을 장바구니에서 제거하는 함수
  const removeItemFromCart = () => {
    // 상품 제거
    setCartItemCount(cartItemCount - 1);
  };

  const navigate = useNavigate();
  return (
    <>
      {/* 상품이 장바구니에 담겨있지 않을 때 */}
      {cartItemCount === 0 ? (
        <ProductCartNone>장바구니에 담긴 상품이 없습니다.</ProductCartNone>
      ) : (
        // 상품이 장바구니에 담겨있을 때
        <ProductCartIn>
          장바구니에 총 {cartItemCount}개의 상품이 있습니다. 최종결제 금액
          123456원
          <ButtonOk>구매하기</ButtonOk>
        </ProductCartIn>
      )}
      <button onClick={addItemToCart}>상품 추가</button>
      <button onClick={removeItemFromCart}>상품 제거</button>
      <ButtonCancel>메인으로 돌아가기</ButtonCancel>
    </>
  );
};

export default ProductCart;
