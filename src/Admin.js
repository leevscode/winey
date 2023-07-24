import React from "react";
import { Outlet } from "react-router-dom";
import { AdminWrap } from "./style/AdminStyle";

const Admin = () => {
  return (
    <AdminWrap>
      <Outlet />
    </AdminWrap>
  );
};

export default Admin;
