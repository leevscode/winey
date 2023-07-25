import React from "react";
import { Outlet } from "react-router-dom";
import { LayoutWrap } from "./style/LayoutStyle";
import Header from "./components/Header";
import QuickMenu from "./components/QuickMenu";

const User = () => {
  return (
    <LayoutWrap>
      <Header />
      <div className="test">
        <Outlet />
      </div>
      <QuickMenu />
    </LayoutWrap>
  );
};

export default User;
