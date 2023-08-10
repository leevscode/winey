/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMemberInfo } from "../api/joinpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavList = ({ handleOpenNav, closeNav }) => {
  const dispatch = useDispatch();
  // 회원정보 불러오기
  const userData = useSelector(state => state.user);
  useEffect(() => {
    if (userData) {
      console.log("결과가 참이에요");
      dispatch(getMemberInfo());
    }
    console.log("리덕스 성공해라", userData);
  }, [userData]);
  return (
    <>
      <ul className="top">
        <li>
          <NavLink
            to="/main"
            onClick={() => {
              closeNav("/productlist/red");
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
              alt="로고"
            />
          </NavLink>
        </li>
        <li>
          <button onClick={handleOpenNav}>
            <i>
              <FontAwesomeIcon icon={faXmark} />
            </i>
          </button>
        </li>
      </ul>
      <div className="middle">
        <ul>
          <li>
            <NavLink
              to="/productlist/red"
              onClick={() => {
                closeNav("/productlist/red");
              }}
            >
              레드 와인
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productlist/white"
              onClick={() => {
                closeNav("/productlist/white");
              }}
            >
              화이트 와인
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productlist/spakling"
              onClick={() => {
                closeNav("/productlist/spakling");
              }}
            >
              스파클링 와인
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productlist/etc"
              onClick={() => {
                closeNav("/productlist/etc");
              }}
            >
              기타
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="bottom">
        <li>
          <NavLink
            to="/login"
            onClick={() => {
              closeNav("/login");
            }}
          >
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/join"
            onClick={() => {
              closeNav("/join");
            }}
          >
            회원가입
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavList;
