import React from "react";
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
  FoodWineWrap,
  MainTabBtn,
  MainTabContents,
  MainTabLink,
  MainTitle,
} from "../../style/MainStyle";
import { ProductListItem } from "../../style/ProductStyle";

const FoodWine = () => {
  // 상품 더미 데이터
  const foodItem = [
    {
      producttitle: "와인 가이드",
      price: "34545",
      sale: "32900",
      link: "/",
      image: "https://via.placeholder.com/135x175",
    },
    {
      producttitle: "1",
      price: "10000",
      sale: "10000",
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
    },
    {
      producttitle: "2",
      price: "20000",
      sale: "20000",
      link: "/",
      image: "https://via.placeholder.com/135x175/456",
    },
    {
      producttitle: "3",
      price: "30000",
      sale: "30000",
      link: "/",
      image: "https://via.placeholder.com/135x175/789",
    },
  ];
  return (
    <FoodWineWrap>
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
      <MainTabContents>
        {foodItem.map((item, index) => (
          <ProductListItem key={index}>
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
              <div className="title">{item.producttitle}</div>
              <ul className="price">
                <li>
                  <span>{item.sale}</span>원
                </li>
                <li>
                  <span>{item.price}원</span>
                </li>
              </ul>
            </div>
          </ProductListItem>
        ))}
      </MainTabContents>
      {/* 음식별 추천 와인 전체보기 */}
      <MainTabLink>
        음식별 추천 와인 전체보기
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </MainTabLink>
    </FoodWineWrap>
  );
};

export default FoodWine;
