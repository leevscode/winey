/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { MypageWrap } from "../style/MypageStyle";
import { ButtonOk, SectionLine } from "../style/GlobalStyle";
import { getLogout, getMemberInfo } from "../api/joinpatch";
import { removeCookie } from "../api/cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../reducers/userSlice";
import { Modal } from "antd";
import { totalItem } from "../reducers/cartSlice";

const MypageList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 회원정보 불러오기
  const userData = useSelector(state => state.user);
  const closeNav = path => {
    navigate(path);
  };
  const handleLogout = async e => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      // title: "로그아웃",
      content: (
        <ul>
          <li>로그아웃 하시겠습니까?</li>
        </ul>
      ),
      async onOk() {
        e.preventDefault();
        await getLogout("");
        dispatch(logoutUser({}));
        dispatch(totalItem(0));
        removeCookie("access_token");
        removeCookie("refresh_token");
        // console.log("로그아웃 실행");
        navigate("/main");
        closeNav("/main");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  useEffect(() => {
    dispatch(getMemberInfo());
  }, []);
  return (
    <>
      <MypageWrap>
        <div className="user-title">
          <h2>
            {userData.userId ? (
              <>
                <p>반갑습니다.</p>
                <span>{userData.unm}</span>님
              </>
            ) : (
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
                  alt="로고"
                />
                <p>
                  와이니와 함께 하시면
                  <br />
                  당신을 위한 와인을 추천드려요.
                </p>
                <Link to="/login">
                  <ButtonOk component={Link} to="/login">
                    로그인 · 회원가입
                  </ButtonOk>
                </Link>
              </div>
            )}
          </h2>
        </div>
        <SectionLine />
        <ul>
          {userData.roleType === "ADMIN" ? (
            <li>
              <NavLink
                to="/admin"
                onClick={() => {
                  closeNav("/admin");
                }}
              >
                관리자 페이지
                <i>
                  <FontAwesomeIcon icon={faAngleRight} />
                </i>
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink to={userData.userId ? "/cart" : "/login"}>
              장바구니
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to={userData.userId ? "/selllist" : "/login"}>
              주문 내역
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to={userData.userId ? "/keywordselectedit" : "/login"}>
              선호 키워드 변경
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/windeguide">
              와인 가이드
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to={userData.userId ? "/joinedit" : "/login"}>
              정보수정
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
        </ul>
        <SectionLine />
        <ul>
          <li>
            <NavLink to="/about">
              만든 사람들
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/opensource">
              오픈소스
              <i>
                <FontAwesomeIcon icon={faAngleRight} />
              </i>
            </NavLink>
          </li>
          {userData.userId && (
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          )}
        </ul>
      </MypageWrap>
    </>
  );
};

export default MypageList;
