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
import { Gradation } from "./style/GlobalStyle";
const { Content } = Layout;

const Admin: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${Gradation.wineB}`,
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        },
      }}
    >
      <Layout>
        {/* 관리자페이지 - 헤더 */}
        <AdminHeader />
        <LayoutContentWrap>
          <Content>
            {/* 관리자페이지 - 페이지 이름 표시 */}
            <Breadcrumb>페이지 이름 표시되는 컴포넌트</Breadcrumb>
            <div className="layout-box">
              <Layout>
                {/* 관리자페이지 - 사이드메뉴 */}
                <AdminSideMenu />
                {/* 관리자페이지 - 내용 */}
                <div className="contents-box">
                  <Outlet />
                </div>
              </Layout>
            </div>
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
