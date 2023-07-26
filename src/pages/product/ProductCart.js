/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

import React, { useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCartNone,
  ProductCartIn,
  ProductCartInfo,
} from "../../style/ProductCartStyle";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
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
        <ProductCartNone>
          {" "}
          <div>
            <i>
              <FontAwesomeIcon icon={faExclamation} />
            </i>
          </div>
          장바구니에 담긴 상품이 없습니다.
        </ProductCartNone>
      ) : (
        // 상품이 장바구니에 담겨있을 때
        <ProductCartIn>
          <div>장바구니에 총 {cartItemCount}개의 상품이 있습니다.</div>
          <ul>
            <ProductCartInfo>
              {/* 데이터 넣을 곳 */}
              <div>이미지</div>
              <span>
                  <p>제프 까렐, 울띰 헤꼴뜨</p>
                  <p>Ultime Recolite By Jeff Carrel</p>
                <span>32,900원</span>
                <div>
                  <span>+</span>
                  <span>2</span>
                  <span>-</span>
                </div>
                </span>
                <p>x</p>
              <div>
              </div>
            </ProductCartInfo>
          </ul>
          <ButtonOk>구매하기</ButtonOk>
        </ProductCartIn>
      )}
      <button onClick={addItemToCart}>상품 추가 되면 보여요</button>
      <button onClick={removeItemFromCart}>상품 제거</button>
      <ButtonCancel>메인으로 돌아가기</ButtonCancel>
    </>
  );
};

export default ProductCart;
