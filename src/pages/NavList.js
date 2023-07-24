import React from "react";
import { Link } from "react-router-dom";
import { NavWrap } from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <NavWrap>
      <ul className="top">
        <li>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
              alt="로고"
            />
          </Link>
        </li>
        <li>
          <button>
            <i>
              <FontAwesomeIcon icon={faXmark} />
            </i>
          </button>
        </li>
      </ul>
      <div className="middle">
        <ul>
          <li>
            <Link to="/">레드 와인</Link>
          </li>
          <li>
            <Link to="/">화이트 와인</Link>
          </li>
          <li>
            <Link to="/">스파클링 와인</Link>
          </li>
          <li>
            <Link to="/">기타</Link>
          </li>
        </ul>
      </div>

      <ul className="bottom">
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/join">회원가입</Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default NavList;
