/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
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
