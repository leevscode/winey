import React from "react";
import { NavLink } from "react-router-dom";
import { SellQuickWrap } from "../../style/ProductDetailStyle";

const WineSellQuick = () => {
  return (
    <SellQuickWrap>
      <ul>
        <li>
          <NavLink to="/">구매하기</NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
              alt="장바구니"
            />
          </NavLink>
        </li>
      </ul>
    </SellQuickWrap>
  );
};

export default WineSellQuick;
