// import React from "react";
// import { Outlet } from "react-router-dom";
// import { AdminWrap } from "./style/AdminStyle";
import React from "react";

import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import AdminHeader from "./admin/components/AdminHeader";
import AdminFooter from "./admin/components/AdminFooter";
import AdminSideMenu from "./admin/components/AdminSideMenu";
import { LayoutContentWrap } from "./admin/style/AdminLayoutStyle";
const { Content } = Layout;

const Admin: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#79213d",
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        },
      }}
    >
      <Layout>
        {/* 관리자페이지 - 헤더 */}
        <AdminHeader />
        <LayoutContentWrap>
          <Content
            style={{
              padding: "0 50px",
              height: "810px",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Layout style={{ padding: "24px 0", background: "#fcf8f1" }}>
              {/* 관리자페이지 - 사이드메뉴 */}
              <AdminSideMenu />
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Outlet />
              </Content>
            </Layout>
          </Content>
        </LayoutContentWrap>
        {/* 관리자페이지 - 푸터 */}
        <AdminFooter />
      </Layout>
    </ConfigProvider>
  );
  // return (
  //   <AdminWrap>
  //     <Outlet />
  //   </AdminWrap>
  // );
};

export default Admin;
