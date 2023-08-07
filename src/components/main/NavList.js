import React from "react";
import { NavLink } from "react-router-dom";
import { NavListWrap } from "../../style/MainStyle";

const NavList = () => {
  return (
    <NavListWrap>
      <ul>
        <li>
          <NavLink to="/productlist/red">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_redwine.svg`}
              alt="레드와인"
            />
            <span>레드</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productlist/white">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_whitewine.svg`}
              alt="화이트와인"
            />
            <span>화이트</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productlist/spakling">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_spakling.svg`}
              alt="스파클링와인"
            />
            <span>스파클링</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/productlist/etc">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_etcwine.svg`}
              alt="기타와인"
            />
            <span>기타</span>
          </NavLink>
        </li>
      </ul>
    </NavListWrap>
  );
};

export default NavList;
