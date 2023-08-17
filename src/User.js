/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";

import { ContentsWrap, NavWrap } from "./style/GlobalComponents";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";
import NavList from "./pages/NavList";

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { iselllist } = useParams();
  const [isNavActive, setIsNavActive] = useState(false);
  // 스크롤 감지 state
  const [scrollPosition, setScrollPosition] = useState(0);
  // 헤더 클래스 토글 설정 state
  const [isActive, setIsActive] = useState(false);
  let activeScroll = () => {
    setScrollPosition(window.scrollY);
  };
  // 헤더 스크롤 이벤트
  useEffect(() => {
    window.addEventListener("scroll", activeScroll);
    if (scrollPosition !== 0) {
      // console.log("스크롤 위치값", scrollPosition);
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    return () => {
      window.removeEventListener("scroll", activeScroll);
    };
  }, [scrollPosition]);
  // 네비게이션 메뉴 버튼 핸들러
  const handleOpenNav = e => {
    e.preventDefault();
    setIsNavActive(!isNavActive);
  };
  const closeNav = path => {
    setIsNavActive(false);
    navigate(path);
  };
  // // Quick menu Scroll top 이벤트 핸들러
  // const handleScrollTop = e => {
  //   e.preventDefault();
  //   console.log("스크롤 탑 이벤트 버튼");
  // };

  return (
    <LayoutWrap>
      <Header handleOpenNav={handleOpenNav} isActive={isActive} />
      <ContentsWrap
        pageBgc={
          location.pathname === "/keywordselect" ||
          location.pathname === "/keywordselectedit" ||
          location.pathname === "/selllist" ||
          location.pathname === `/selllistdetail/${iselllist}`
        }
      >
        <Outlet />
      </ContentsWrap>
      {location.pathname === "/main" || location.pathname === "/windeguide" ? (
        <Footer />
      ) : null}
      <QuickMenu
        handleOpenNav={handleOpenNav}
        // handleScrollTop={handleScrollTop}
      />
      {/* 네비게이션 메뉴 */}
      {isNavActive && (
        <NavWrap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <NavList handleOpenNav={handleOpenNav} closeNav={closeNav} />
        </NavWrap>
      )}
    </LayoutWrap>
  );
};

export default User;
