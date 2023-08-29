// import React from "react";
// import { Outlet } from "react-router-dom";
// import { AdminWrap } from "./style/AdminStyle";
import React, { useEffect, useState } from "react";

import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdminHeader from "./admin/components/AdminHeader";
import AdminFooter from "./admin/components/AdminFooter";
import AdminSideMenu from "./admin/components/AdminSideMenu";
import { LayoutContentWrap } from "./admin/style/AdminLayoutStyle";
import { Gradation } from "./style/GlobalStyle";
const { Content } = Layout;

const Admin: React.FC = () => {
  const { pathname } = useLocation();
  // pathname에서 /admin/ 는 제외처리
  const listPathName: string = pathname.slice(7);
  // console.log(listPathName);
  // 네비게이션 gnb state
  const [breadCrumbGnb, setBreadCrumbGnb] = useState("");
  // 네비게이션 lnb title state
  const [breadCrumbLnbTitle, setBreadCrumbLnbTitle] = useState("");
  // 네비게이션 lnb path state
  const [breadCrumbLnbPath, setBreadCrumbLnbPath] = useState("");
  // 관리자페이지 - lnb 데이터
  const lnbData: Array<{ title: string; path: string }> = [
    {
      title: "가입회원리스트",
      path: "membercontrol",
    },
    {
      title: "회원상세내역",
      path: "memberdetail",
    },
    {
      title: "주문내역관리",
      path: "ordercontrol",
    },
    {
      title: "주문상세리스트",
      path: "orderdetail",
    },
    {
      title: "등록된상품",
      path: "productlist",
    },
    {
      title: "상품등록하기",
      path: "productadd",
    },
    {
      title: "상품수정하기",
      path: "productedit",
    },
  ];
  // 관리자페이지 - 네비게이션 데이터
  const breadcrumbItems = [
    {
      title: <Link to="/admin">Home</Link>,
    },
    {
      title: breadCrumbGnb,
    },
    {
      title: breadCrumbLnbTitle,
    },
  ];
  const findPath = lnbData.find(item => item.path === listPathName);
  useEffect(() => {
    findPath;
    // console.log("페이지 이동 할 때마다 동작합니다.");
    // gnb 데이터 갱신
    if (pathname.includes("member")) {
      // console.log("member 포함되었어요");
      setBreadCrumbGnb("회원관리");
    } else if (pathname.includes("order")) {
      // console.log("order 포함되었어요");
      setBreadCrumbGnb("주문관리");
    } else if (pathname.includes("product")) {
      // console.log("product 포함되었어요");
      setBreadCrumbGnb("상품관리");
    } else {
      // console.log("메인이에요");
      setBreadCrumbGnb("");
    }
    // lnb 데이터 갱신
    if (findPath) {
      setBreadCrumbLnbTitle(findPath.title);
      setBreadCrumbLnbPath(findPath.path);
      // console.log("제목", breadCrumbLnbTitle);
      // console.log("path이름", breadCrumbLnbPath);
    } else {
      setBreadCrumbLnbTitle("");
    }
  }, [pathname]);
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
            {/* 관리자페이지 - 네비게이션 */}
            <div className="breadcrumb-wrap">
              {breadCrumbLnbTitle !== "" && (
                <Breadcrumb items={breadcrumbItems} />
              )}
            </div>
            <div className="layout-box">
              {/* 관리자페이지 - 페이지 이름 표시 */}
              {breadCrumbLnbTitle !== "" && (
                <div className="pg-title">
                  <h2>{breadCrumbLnbTitle}</h2>
                </div>
              )}
              <Layout>
                {/* 관리자페이지 - 사이드메뉴 */}
                <AdminSideMenu />
                {/* 관리자페이지 - 내용 */}
                <div className="contents-box">
                  <Outlet context={{ listPathName }} />
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
