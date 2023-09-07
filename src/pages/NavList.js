/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLogout } from "../api/joinpatch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { removeCookie } from "../api/cookie";
import { logoutUser } from "../reducers/userSlice";
import { totalItem } from "../reducers/cartSlice";
import { Modal } from "antd";

const NavList = ({ handleOpenNav, closeNav }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 회원정보 불러오기
  const userData = useSelector(state => state.user);
  // 로그아웃
  const handleLogout = async e => {
    Modal.confirm({
      title: "로그아웃",
      content: "로그아웃 하시겠습니까?",
      async onOk() {
        e.preventDefault();
        await getLogout("");
        dispatch(logoutUser({}));
        dispatch(totalItem(0));
        removeCookie("accessToken");
        removeCookie("refreshToken");
        // console.log("로그아웃 실행");
        navigate("/main");
        closeNav("/main");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
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
          <li className="focus">
            <NavLink
              to="/productlist/sale"
              onClick={() => {
                closeNav("/productlist/sale");
              }}
            >
              🍷&nbsp;&nbsp;이달의 할인 상품&nbsp;&nbsp;🍷
            </NavLink>
          </li>
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
        {userData.userId ? (
          <>
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
            <li>
              <NavLink
                to="/mypageList"
                onClick={() => {
                  closeNav("/mypageList");
                }}
              >
                마이페이지
              </NavLink>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </>
  );
};

export default NavList;
