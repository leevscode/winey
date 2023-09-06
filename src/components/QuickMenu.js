/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { QuickWrap, ScrollTopBtn } from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faHashtag,
  faHouseChimney,
  faUser,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const QuickMenu = ({ handleOpenNav }) => {
  const location = useLocation();
  const { iproduct } = useParams();
  // 회원정보 불러오기
  const userData = useSelector(state => state.user);
  // Quick menu Scroll top 이벤트 핸들러
  const handleScrollTop = () => {
    // e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {location.pathname !== "/keywordselectedit" && (
        <ScrollTopBtn>
          <button onClick={handleScrollTop}>
            <i>
              <FontAwesomeIcon icon={faArrowUp} />
            </i>
          </button>
        </ScrollTopBtn>
      )}
      {location.pathname !== `/productdetail/${iproduct}` && (
        <QuickWrap>
          <ul>
            <li>
              <NavLink
                to="/main"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faHouseChimney} />
                </i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={userData.userId ? "/keywordselectedit" : "/login"}
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faHashtag} />
                </i>
              </NavLink>
            </li>
            <li>
              <button onClick={handleOpenNav}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon_navbtn_1.svg`}
                  alt="메뉴보기"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon_navbtn_3.svg`}
                  alt="메뉴보기"
                />
              </button>
            </li>
            <li>
              <NavLink
                to="/windeguide"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faWineGlass} />
                </i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mypageList"
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
              </NavLink>
            </li>
          </ul>
        </QuickWrap>
      )}
    </>
  );
};

export default QuickMenu;
