import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import { ContentsWrap } from "./style/GlobalComponents";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";
import Footer from "./components/Footer";
import NavList from "./pages/NavList";

const User = () => {
  return (
    <LayoutWrap>
      <Header />
      <ContentsWrap>
        <Outlet />
      </ContentsWrap>
      <Footer />
      <QuickMenu />
      {/* 네비게이션 메뉴 */}
      <NavList />
    </LayoutWrap>
  );
};

export default User;
