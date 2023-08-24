/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { Layout } from "antd";
import { LayoutFooterWrap } from "../style/AdminLayoutStyle";
const { Footer } = Layout;

const AdminFooter = () => {
  return (
    <LayoutFooterWrap>
      <Footer style={{ textAlign: "center", background: "#fcf8f1" }}>
        Winey by PodoJect
      </Footer>
    </LayoutFooterWrap>
  );
};

export default AdminFooter;
