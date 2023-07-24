import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";

const User = () => {
  return (
    <LayoutWrap>
      <Header />
      <Outlet />
      <QuickMenu />
    </LayoutWrap>
  );
};

export default User;
