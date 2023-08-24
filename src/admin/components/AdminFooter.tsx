import React from "react";
import { Layout } from "antd";
import { LayoutFooterWrap } from "../style/AdminLayoutStyle";
const { Footer } = Layout;

const AdminFooter = () => {
  return (
    <LayoutFooterWrap>
      <Footer>
        Product by. <b>PODOJect</b>
      </Footer>
    </LayoutFooterWrap>
  );
};

export default AdminFooter;
