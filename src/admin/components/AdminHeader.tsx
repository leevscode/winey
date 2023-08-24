/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { LayoutHeaderWrap } from "../style/AdminLayoutStyle";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Maincolor } from "../../style/GlobalStyle";
const { Header } = Layout;

const AdminHeader = () => {
  return (
    <Layout>
      <Header
        style={{
          background: `${Maincolor.black}`,
        }}
      >
        <LayoutHeaderWrap>
          <div>
            <Link to="/admin">
              <h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo_2.svg`}
                  alt="와이니"
                />
                Admin
              </h2>
            </Link>
          </div>
        </LayoutHeaderWrap>
      </Header>
    </Layout>
  );
};

export default AdminHeader;
