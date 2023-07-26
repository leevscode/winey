/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderWrap } from "../style/GlobalComponents";

const Header = () => {
  const location = useLocation();
  // 스크롤 감지 state
  const [scrollPosition, setScrollPosition] = useState(0);
  // 헤더 클래스 토글 설정 state
  const [isActive, setIsActive] = useState(false);
  let activeScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", activeScroll);
    if (scrollPosition !== 0) {
      // console.log("스크롤 이벤트 나왔다.");
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    return () => {
      window.removeEventListener("scroll", activeScroll);
    };
  }, [scrollPosition]);

  return (
    <>
      <HeaderWrap
        className={location.pathname === "/" && isActive ? "active" : ""}
        mainBgc={location.pathname === "/"}
      >
        <ul>
          <li>
            <button>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_1.svg`}
                alt="메뉴보기"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/icon_navbtn_2.svg`}
                alt="메뉴보기"
              />
            </button>
          </li>
          <li>
            <h1>
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo_1.svg`}
                  alt="로고"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/logo_2.svg`}
                  alt="로고"
                />
              </Link>
            </h1>
          </li>
          <li>
            <ol>
              <li>
                <button className="search">
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
                <button className="cart">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_cart_1.svg`}
                    alt="장바구니"
                  />
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                    alt="장바구니"
                  />
                  <span>0</span>
                </button>
              </li>
            </ol>
          </li>
        </ul>
      </HeaderWrap>
    </>
  );
};

export default Header;
