import React from "react";
import { NavLink } from "react-router-dom";
import { NavListWrap } from "../../style/MainStyle";

const NavList = () => {
  return (
    <NavListWrap>
      <ul>
        <li>
          <NavLink to="/">
            <img src="https://via.placeholder.com/55" alt="레드" />
            <span>레드</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src="https://via.placeholder.com/55" alt="화이트" />
            <span>화이트</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src="https://via.placeholder.com/55" alt="스파클링" />
            <span>스파클링</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img src="https://via.placeholder.com/55" alt="기타" />
            <span>기타</span>
          </NavLink>
        </li>
      </ul>
    </NavListWrap>
  );
};

export default NavList;
