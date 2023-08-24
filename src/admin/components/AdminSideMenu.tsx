/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { LayoutSideMenuWrap } from "../style/AdminLayoutStyle";
import { Link } from "react-router-dom";
import { IMenu } from "../interface/LayoutInterface";
const { Sider } = Layout;

const AdminSideMenu = () => {
  const menuItems: IMenu[] = [
    {
      key: "sub1",
      icon: <UserOutlined />,
      title: "회원관리",
      items: [
        {
          key: "1",
          link: "/admin/membercontrol",
          label: "가입회원리스트",
        },
        { key: "2", link: "/admin/memberdetail", label: "회원상세내역" },
      ],
    },
    {
      key: "sub2",
      icon: <LaptopOutlined />,
      title: "주문관리",
      items: [
        { key: "5", link: "/admin/ordercontrol", label: "주문내역관리" },
        { key: "6", link: "/admin/orderdetail", label: "주문상세리스트" },
      ],
    },
    {
      key: "sub3",
      icon: <NotificationOutlined />,
      title: "상품관리",
      items: [
        { key: "9", link: "/admin/productlist", label: "등록된 상품" },
        { key: "10", link: "/admin/productadd", label: "상품등록하기" },
        { key: "11", link: "/admin/productedit", label: "상품수정하기" },
      ],
    },
  ];
  return (
    <div>
      <Sider style={{ background: "#fcf8f1" }} width={200}>
        <LayoutSideMenuWrap>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={menuItems.map(item => item.key)}
            style={{ height: "100%", background: "#fcf8f1" }}
          >
            {menuItems.map(menuItem => (
              <SubMenu
                key={menuItem.key}
                icon={menuItem.icon}
                title={menuItem.title}
              >
                {menuItem.items.map(item => (
                  <Menu.Item key={item.key}>
                    <Link to={item.link}>{item.label}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </LayoutSideMenuWrap>
      </Sider>
    </div>
  );
};

export default AdminSideMenu;
