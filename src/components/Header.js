/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BackBtn,
  HeaderTitle,
  HeaderWrap,
  NoticeModal,
} from "../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleOpenNav, isActive }) => {
  const location = useLocation();
  const navigate = useNavigate();
  // 뒤로가기 버튼 핸들러
  const handleBack = () => navigate(-1);
  // 서브페이지 헤더 페이지 타이틀 state
  const [pageTitle, setPageTitle] = useState("");
  // 서브페이지 헤더 페이지 위치 state
  const [pagePath, setPagePath] = useState("");
  // 검색 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // 페이지별 타이틀
  const pageName = [
    {
      title: "와인가이드",
      path: "/windeguide",
    },
    {
      title: "구매하기",
      path: "/productsell",
    },
    {
      title: "구매완료",
      path: "/productcomplete",
    },
    {
      title: "로그인",
      path: "/login",
    },
    {
      title: "회원가입",
      path: "/join",
    },
    {
      title: "마이페이지",
      path: "/mypageList",
    },
    {
      title: "장바구니",
      path: "/cart",
    },
    {
      title: "주문내역",
      path: "/selllist",
    },
    {
      title: "선호 키워드 변경",
      path: "/keywordselectedit",
    },
    {
      title: "와인 가이드",
      path: "/windeguide",
    },
    {
      title: "정보수정",
      path: "/joinedit",
    },
    {
      title: "만든사람들",
      path: "/about",
    },
    {
      title: "오픈소스",
      path: "/opensource",
    },
    // 와인 카테고리
    {
      title: "레드 와인",
      path: "/productlist/red",
    },
    {
      title: "화이트 와인",
      path: "/productlist/white",
    },
    {
      title: "스파클링 와인",
      path: "/productlist/spakling",
    },
    {
      title: "기타 와인",
      path: "/productlist/etc",
    },
  ];
  useEffect(() => {
    const findPath = pageName.find(item => item.path === location.pathname);
    if (findPath) {
      setPageTitle(findPath.title);
      setPagePath(findPath.path);
    }
    // console.log("현재위치:", location.pathname);
    // console.log("실시간타이틀", pageTitle);
    // console.log("실시간위치", pagePath);
  });

  return (
    <>
      <HeaderWrap
        className={location.pathname === "/main" && isActive ? "active" : ""}
        mainBgc={location.pathname === "/main"}
      >
        <ul>
          <li>
            {location.pathname === "/main" ? (
              // 네비게이션 메뉴 보기 버튼
              <button onClick={handleOpenNav}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon_navbtn_1.svg`}
                  alt="메뉴보기"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon_navbtn_2.svg`}
                  alt="메뉴보기"
                />
              </button>
            ) : (
              // 서브페이지 헤더 뒤로가기 버튼
              <BackBtn onClick={handleBack}>
                <i>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </i>
              </BackBtn>
            )}
          </li>
          <li>
            <h1>
              {location.pathname === "/main" ? (
                // 헤더 로고
                <NavLink to="/main">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
                    alt="로고"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo_2.svg`}
                    alt="로고"
                  />
                </NavLink>
              ) : (
                // 서브페이지 헤더 페이지 이름 출력
                <HeaderTitle>
                  {location.pathname === pagePath ? pageTitle : ""}
                </HeaderTitle>
              )}
            </h1>
          </li>
          <li>
            <ol>
              <li>
                <button className="search" onClick={showModal}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_search_1.svg`}
                    alt="검색"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_search_2.svg`}
                    alt="검색"
                  />
                </button>
              </li>
              <li>
                <NavLink to="/cart" className="cart">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
                    alt="장바구니"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                    alt="장바구니"
                  />
                  <span>0</span>
                </NavLink>
              </li>
            </ol>
          </li>
        </ul>
      </HeaderWrap>
      {/* 준비중 모달창 */}
      <NoticeModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>
          <i>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </i>
          준비중입니다.
        </p>
      </NoticeModal>
    </>
  );
};

export default Header;
