/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  MainProductSecton,
  MainTabBtn,
  MainTabLink,
  MainTitle,
} from "../../style/MainStyle";
import { ProductListItem } from "../../style/ProductStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";

const PriceWine = () => {
  // 버튼 활성화 state
  const [isActive, setIsActive] = useState(1);
  // 가격별 와인 탭메뉴 버튼
  const priceBtns = [
    {
      ibtn: 1,
      name: "2만원 미만",
      contents: "테스트 육류",
    },
    {
      ibtn: 2,
      name: "2~5만원",
      contents: "테스트 해산물",
    },
    {
      ibtn: 3,
      name: "5~10만원",
      contents: "테스트 유제품",
    },
    {
      ibtn: 4,
      name: "10만원 이상",
      contents: "테스트 야채",
    },
  ];
  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    setIsActive(_ibtn);
  };
  // 상품 더미 데이터
  const PriceItem = [
    {
      iproduct: 1,
      producttitle: "1",
      price: 34545,
      sale: 32900,
      link: "/main",
      image: "https://via.placeholder.com/135x175",
      isbadge: [0, 1],
    },
    {
      iproduct: 2,
      producttitle: "2",
      price: 10000,
      sale: 10000,
      link: "/main",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [],
    },
    {
      iproduct: 3,
      producttitle: "3",
      price: 20000,
      sale: 20000,
      link: "/main",
      image: "https://via.placeholder.com/135x175/456",
      isbadge: [0, 1],
    },
    {
      iproduct: 4,
      producttitle: "4",
      price: 40000,
      sale: 40000,
      link: "/main",
      image: "https://via.placeholder.com/135x175/789",
      isbadge: [0],
    },
    {
      iproduct: 5,
      producttitle: "5",
      price: 50000,
      sale: 50000,
      link: "/main",
      image: "https://via.placeholder.com/135x175",
      isbadge: [1],
    },
    {
      iproduct: 6,
      producttitle: "6",
      price: 60000,
      sale: 60000,
      link: "/main",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [0, 1],
    },
  ];
  return (
    <MainProductSecton>
      {/* 타이틀 */}
      <MainTitle>
        <h2>
          <span>합리적인 가격, 우수한 품질</span>
          <p>
            <span className="clearfix">
              <i></i>가격별 추천 와인<i></i>
            </span>
          </p>
        </h2>
      </MainTitle>
      {/* 탭메뉴 */}
      <MainTabBtn>
        <ul>
          {priceBtns.map(item => (
            <li key={item.ibtn}>
              <button
                className={isActive === item.ibtn ? "active" : null}
                onClick={e => handleTabBtn(item.ibtn, e)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </MainTabBtn>
      {/* 가격별 추천 와인 내용 */}
      <ContentsListItemWrap>
        {PriceItem.map(item => (
          <ProductListItem key={item.iproduct}>
            <Link to={item.link}>
              <div className="img">
                <img src={item.image} alt={item.producttitle} />
                {/* 장바구니 버튼 */}
                <button>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                    alt="장바구니에 담기"
                  />
                </button>
              </div>
              <div className="txt">
                <div className="badge">
                  {item.isbadge.length !== 0 && (
                    <>
                      {item.isbadge.includes(0) && (
                        <span className="recommend">추천상품</span>
                      )}
                      {item.isbadge.includes(1) && (
                        <span className="beginner">입문자추천</span>
                      )}
                    </>
                  )}
                </div>
                <div className="title">{item.producttitle}</div>
                <ul className="price">
                  <li>
                    <span>{item.sale.toLocaleString()}</span>원
                  </li>
                  <li>
                    <span>{item.price.toLocaleString()}원</span>
                  </li>
                </ul>
              </div>
            </Link>
          </ProductListItem>
        ))}
      </ContentsListItemWrap>
      {/* 국가별 추천 와인 전체보기 */}
      <MainTabLink>
        국가별 추천 와인 전체보기
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </MainTabLink>
    </MainProductSecton>
  );
};

export default PriceWine;
