/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import { AnimatePresence } from "framer-motion";

import { ContentsWrap, NavWrap } from "./style/GlobalComponents";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";
import NavList from "./pages/NavList";

const User = () => {
  const { ilist } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
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
      <ContentsWrap>
        <Outlet />
      </ContentsWrap>
      {location.pathname === "/" ||
      location.pathname === `/productlist/${ilist}` ||
      location.pathname === "/productdetail" ||
      location.pathname === "/windeguide" ? (
        <Footer />
      ) : null}
      <QuickMenu
        handleOpenNav={handleOpenNav}
        // handleScrollTop={handleScrollTop}
      />
      {/* 네비게이션 메뉴 */}
      <AnimatePresence>
        {isNavActive && (
          <NavWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavList handleOpenNav={handleOpenNav} closeNav={closeNav} />
          </NavWrap>
        )}
      </AnimatePresence>
    </LayoutWrap>
  );
};

export default User;
