/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import { AnimatePresence, motion } from "framer-motion";

import { ContentsWrap, NavWrap } from "./style/GlobalComponents";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";
import NavList from "./pages/NavList";

const User = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavActive, setIsNavActive] = useState(false);
  // 네비게이션 메뉴 버튼 핸들러
  const handlerOpenNav = e => {
    e.preventDefault();
    setIsNavActive(!isNavActive);
  };
  const closeNav = path => {
    setIsNavActive(false);
    navigate(path);
  };

  return (
    <LayoutWrap>
      <Header handlerOpenNav={handlerOpenNav} />
      <ContentsWrap>
        <Outlet />
      </ContentsWrap>
      {location.pathname === "/" ||
      location.pathname === "/productdetail" ||
      location.pathname === "/windeguide" ? (
        <Footer />
      ) : null}
      <QuickMenu handlerOpenNav={handlerOpenNav} />
      {/* 네비게이션 메뉴 */}
      <AnimatePresence>
        {isNavActive && (
          <NavWrap
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavList handlerOpenNav={handlerOpenNav} closeNav={closeNav} />
          </NavWrap>
        )}
      </AnimatePresence>
    </LayoutWrap>
  );
};

export default User;
