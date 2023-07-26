/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import { ContentsWrap } from "./style/GlobalComponents";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";
import NavList from "./pages/NavList";

const User = () => {
  const location = useLocation();
  return (
    <LayoutWrap>
      <Header />
      <ContentsWrap>
        <Outlet />
      </ContentsWrap>
      {location.pathname !== "/mypageList" ? <Footer /> : null}
      <QuickMenu />
      {/* 네비게이션 메뉴 */}
      <NavList />
    </LayoutWrap>
  );
};

export default User;
