/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { getKorNm } from "../api/patchproduct";
import { useDispatch, useSelector } from "react-redux";
import { cartLengthData } from "../api/patchcart";

const Header = ({ handleOpenNav, isActive }) => {
  const { iproduct, isell, iselllist, icate } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 사용자 정보
  const userData = useSelector(state => state.user);
  // 장바구니 상품 갯수
  const cartData = useSelector(state => state.cart);
  // console.log("사용자 정보", userData);
  // console.log("장바구니 상품 갯수", cartData.cartLength);

  // 뒤로가기 버튼 핸들러
  const handleBack = () => navigate(-1);
  // 서브페이지 헤더 페이지 타이틀 state
  const [pageTitle, setPageTitle] = useState("");
  // 서브페이지 헤더 페이지 위치 state
  const [pagePath, setPagePath] = useState("");
  // 와인 한글이름 보관할 state
  const [korNm, setKorNm] = useState("");
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
  // 검색 컴포넌트 오픈
  const navigateSearch = () => {
    navigate("");
  };
  // 페이지별 타이틀
  const pageName = [
    {
      title: "와인가이드",
      path: "/windeguide",
    },
    {
      title: "구매하기",
      path: `/productsell/${isell}`,
    },
    {
      title: "구매하기",
      path: "/productsellcart",
    },
    {
      title: "구매완료",
      path: "/productcomplete",
    },
    {
      title: "구매완료",
      path: "/ProductComplete",
    },
    {
      title: "구매완료",
      path: "/ProductCompleteCart",
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
      title: "주문 상세내역",
      path: `/selllistdetail/${iselllist}`,
    },
    {
      title: "선호 키워드 선택",
      path: "/keywordselect",
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
    // 와인 전체보기 카테고리
    {
      title: "음식별 추천 와인",
      path: "/productmain/food",
    },
    {
      title: "국가별 추천 와인",
      path: "/productmain/country",
    },
    {
      title: "가격별 추천 와인",
      path: "/productmain/price",
    },
  ];
  let findPath = pageName.find(item => item.path === location.pathname);
  useEffect(() => {
    findPath;

    if (findPath) {
      setPageTitle(findPath.title);
      setPagePath(findPath.path);
    } else if (iproduct) {
      const readKorNm = async () => {
        await getKorNm(setKorNm, iproduct);
      };
      readKorNm();
    }
    // 로그인 했을 때 이벤트 발생
    if (userData.userId) {
      cartLengthData(dispatch);
    }
    // console.log("현재위치:", location.pathname);
    // console.log("실시간타이틀", pageTitle);
    // console.log("실시간위치", pagePath);
    // console.log("상품이름", korNm.nmKor);
  }, [location.pathname]);

  useEffect(() => {
    // cartLengthData(dispatch);
  }, []);
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
                  {location.pathname === pagePath ? pageTitle : korNm?.nmKor}
                </HeaderTitle>
              )}
            </h1>
          </li>
          {location.pathname === "/keywordselect" ? null : (
            <li>
              <ol>
                <li>
                  <button className="search" onClick={navigateSearch}>
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
                  <NavLink
                    to={userData.userId ? "/cart" : "/login"}
                    className="cart"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
                      alt="장바구니"
                    />
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                      alt="장바구니"
                    />
                    <span>{cartData.cartLength}</span>
                  </NavLink>
                </li>
              </ol>
            </li>
          )}
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
