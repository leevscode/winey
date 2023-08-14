import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { SellQuickWrap } from "../../style/ProductDetailStyle";

const WineSellQuick = ({ iproduct }) => {
  const userData = useSelector(state => state.user);
  return (
    <SellQuickWrap>
      <ul>
        <li>
          <NavLink to={userData.userId ? `/productsell/${iproduct}` : `/login`}>
            구매하기
          </NavLink>
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
