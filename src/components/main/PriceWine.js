/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
import NoImage from "../../assets/no_image.jpg";
import {
  getPriceMinusTwo,
  getPriceOverFive,
  getPriceOverTwo,
  getPricePlusTen,
} from "../../api/patchmain";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";

const PriceWine = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3, 4, 5, 6];
  // 금액별 와인 데이터 보관할 state
  const [priceWines, setPriceWines] = useState([]);
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 버튼 활성화 state
  const [isActive, setIsActive] = useState(1);
  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    setIsActive(_ibtn);
    getPriceWines(_ibtn);
  };
  // 상품 더미 데이터
  const PriceItem = [
    {
      productId: 1,
      categoryId: 4,
      featureId: 470,
      countryId: 2,
      aromaId: 470,
      nmKor: "트라마리 로제 디 프리미티보",
      nmEng: "Tramari Rosé di Primitivo",
      price: 11298,
      quantity: 7,
      pic: "wine/1/qMwuRhM3Sl2mHZSfzDwwXg_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 8,
    },
    {
      productId: 2,
      categoryId: 1,
      featureId: 81,
      countryId: 3,
      aromaId: 81,
      nmKor: "러시아 리버 밸리 피노 누아",
      nmEng: "Russian River Valley Pinot Noir",
      price: 12000,
      quantity: 11,
      pic: "wine/2/4-vr4iXPT5eVsW46Yi6MnA_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 10,
    },
    {
      productId: 3,
      categoryId: 3,
      featureId: 303,
      countryId: 3,
      aromaId: 303,
      nmKor: "프레스티지 브뤼 샴페인",
      nmEng: "Prestige Brut Champagne",
      price: 12000,
      quantity: 21,
      pic: "wine/3/6pFwX3A_RJODoWCd8NCKAg_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 9,
    },
    {
      productId: 4,
      categoryId: 3,
      featureId: 34,
      countryId: 4,
      aromaId: 34,
      nmKor: "블랑 드 블랑 브뤼 샴페인 그랑 크뤼",
      nmEng: "Blanc de Blancs Brut Champagne Grand Cru",
      price: 13153,
      quantity: 10,
      pic: "wine/4/p8xBSEKOSc-7SVQmUHnOFA_pb_x960.png",
      promotion: 1,
      beginner: 1,
      alcohol: 12,
    },
    {
      productId: 5,
      categoryId: 1,
      featureId: 69,
      countryId: 3,
      aromaId: 69,
      nmKor: "더 퍼즐",
      nmEng: "The Puzzle",
      price: 13383,
      quantity: 15,
      pic: "wine/5/EGiP-o0HRJaFinNBg9LURw_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 17,
    },
    {
      productId: 6,
      categoryId: 1,
      featureId: 151,
      countryId: 1,
      aromaId: 151,
      nmKor: "바르티나",
      nmEng: "Bartina",
      price: 13640,
      quantity: 7,
      pic: "wine/6/xXCu1X1QRi2eVEsS3ij-tg_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 9,
    },
  ];
  // 가격별 와인 탭메뉴 버튼
  const priceBtns = [
    {
      ibtn: 1,
      name: "2만원 미만",
    },
    {
      ibtn: 2,
      name: "2~5만원",
    },
    {
      ibtn: 3,
      name: "5~10만원",
    },
    {
      ibtn: 4,
      name: "10만원 이상",
    },
  ];
  // 금액별 와인 데이터 가져오기
  const getPriceWines = async _ibtn => {
    let products;
    switch (_ibtn) {
      case 1:
        products = await getPriceMinusTwo(setPriceWines, setIsLoading);
        break;
      case 2:
        products = await getPriceOverTwo(setPriceWines, setIsLoading);
        break;
      case 3:
        products = await getPriceOverFive(setPriceWines, setIsLoading);
        break;
      case 4:
        products = await getPricePlusTen(setPriceWines, setIsLoading);
        break;
    }
  };
  useEffect(() => {
    getPriceWines(1);
  }, []);

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
        {isLoading
          ? productListSkeleton.map(index => (
              <ProductListSkeleton key={index} />
            ))
          : priceWines.map((item, index) => (
              <ProductListItem key={index}>
                <NavLink to={`/productdetail/${item.productId}`}>
                  <div className="img">
                    <img
                      src={`/img/${item.pic}`}
                      alt={item.nmKor}
                      onError={onImgError}
                    />
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
                      {item.promotion === 1 && (
                        <span className="recommend">추천상품</span>
                      )}
                      {item.beginner === 1 && (
                        <span className="beginner">입문자추천</span>
                      )}
                    </div>
                    <div className="title">{item.nmKor}</div>
                    <ul className="price">
                      <li>
                        <span>{item.price.toLocaleString()}</span>원
                      </li>
                      <li>
                        <span>{item.price.toLocaleString()}원</span>
                      </li>
                    </ul>
                  </div>
                </NavLink>
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
