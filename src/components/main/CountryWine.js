/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  MainProductSecton,
  MainTabBtn,
  MainTabContents,
  MainTabLink,
  MainTitle,
} from "../../style/MainStyle";
import { ProductListItem } from "../../style/ProductStyle";

const CountryWine = () => {
  // 상품 더미 데이터
  const countryItem = [
    {
      iproduct: 1,
      producttitle: "1",
      price: 34545,
      sale: 32900,
      link: "/",
      image: "https://via.placeholder.com/135x175",
      isbadge: [0, 1],
    },
    {
      iproduct: 2,
      producttitle: "2",
      price: 10000,
      sale: 10000,
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [],
    },
    {
      iproduct: 3,
      producttitle: "3",
      price: 20000,
      sale: 20000,
      link: "/",
      image: "https://via.placeholder.com/135x175/456",
      isbadge: [0, 1],
    },
    {
      iproduct: 4,
      producttitle: "4",
      price: 40000,
      sale: 40000,
      link: "/",
      image: "https://via.placeholder.com/135x175/789",
      isbadge: [0],
    },
    {
      iproduct: 5,
      producttitle: "5",
      price: 50000,
      sale: 50000,
      link: "/",
      image: "https://via.placeholder.com/135x175",
      isbadge: [1],
    },
    {
      iproduct: 6,
      producttitle: "6",
      price: 60000,
      sale: 60000,
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [0, 1],
    },
  ];
  return (
    <MainProductSecton>
      {/* 타이틀 */}
      <MainTitle>
        <h2>
          <span>새로운 취향과 맛의 세계를 보여줄</span>
          <p>
            <span className="clearfix">
              <i></i>국가별 추천 와인<i></i>
            </span>
          </p>
        </h2>
      </MainTitle>
      {/* 탭메뉴 */}
      <MainTabBtn>
        <ul>
          <li>
            <button>프랑스</button>
          </li>
          <li>
            <button>미국</button>
          </li>
          <li>
            <button>이탈리아</button>
          </li>
          <li>
            <button>칠레</button>
          </li>
          <li>
            <button>기타</button>
          </li>
        </ul>
      </MainTabBtn>
      {/* 국가별 추천 와인 내용 */}
      <MainTabContents>
        {countryItem.map(item => (
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
      </MainTabContents>
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

export default CountryWine;
