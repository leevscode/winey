/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrap } from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavList = ({ handlerOpenNav }) => {
  return (
    <>
      <ul className="top">
        <li>
          <NavLink to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
              alt="로고"
            />
          </NavLink>
        </li>
        <li>
          <button onClick={handlerOpenNav}>
            <i>
              <FontAwesomeIcon icon={faXmark} />
            </i>
          </button>
        </li>
      </ul>
      <div className="middle">
        <ul>
          <li>
            <NavLink to="/">레드 와인</NavLink>
          </li>
          <li>
            <NavLink to="/">화이트 와인</NavLink>
          </li>
          <li>
            <NavLink to="/">스파클링 와인</NavLink>
          </li>
          <li>
            <NavLink to="/">기타</NavLink>
          </li>
        </ul>
      </div>

      <ul className="bottom">
        <li>
          <NavLink to="/login">로그인</NavLink>
        </li>
        <li>
          <NavLink to="/join">회원가입</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;
