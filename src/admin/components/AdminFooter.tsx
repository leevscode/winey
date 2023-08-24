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
