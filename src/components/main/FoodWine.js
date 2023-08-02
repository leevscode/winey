/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faFish,
  faCheese,
  faCarrot,
  faIceCream,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  MainProductSecton,
  MainTabBtn,
  MainTabLink,
  MainTitle,
} from "../../style/MainStyle";
import { ProductListItem } from "../../style/ProductStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";

const FoodWine = () => {
  // 상품 더미 데이터
  const foodItem = [
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
          <span>와인의 풍미를 더할</span>
          <p>
            <span className="clearfix">
              <i></i>음식별 추천 와인<i></i>
            </span>
          </p>
        </h2>
      </MainTitle>
      {/* 탭메뉴 */}
      <MainTabBtn>
        <ul>
          <li>
            <button>
              <i>
                <FontAwesomeIcon icon={faBacon} />
              </i>
              육류
            </button>
          </li>
          <li>
            <button>
              <i>
                <FontAwesomeIcon icon={faFish} />
              </i>
              해산물
            </button>
          </li>
          <li>
            <button>
              <i>
                <FontAwesomeIcon icon={faCheese} />
              </i>
              유제품
            </button>
          </li>
          <li>
            <button>
              <i>
                <FontAwesomeIcon icon={faCarrot} />
              </i>
              야채
            </button>
          </li>
          <li>
            <button>
              <i>
                <FontAwesomeIcon icon={faIceCream} />
              </i>
              디저트
            </button>
          </li>
        </ul>
      </MainTabBtn>
      {/* 음식별 추천 와인 내용 */}
      <ContentsListItemWrap>
        {foodItem.map(item => (
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
      {/* 음식별 추천 와인 전체보기 */}
      <MainTabLink>
        음식별 추천 와인 전체보기
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </MainTabLink>
    </MainProductSecton>
  );
};

export default FoodWine;
