/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faWineGlassEmpty,
} from "@fortawesome/free-solid-svg-icons";
import {
  MainProductSecton,
  MainTabBtn,
  MainTabLink,
  MainTitle,
} from "../../style/MainStyle";
import { NotProductListItem, ProductListItem } from "../../style/ProductStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import { getContryWines } from "../../api/patchmain";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import NoImage from "../../assets/no_image.jpg";

const CountryWine = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3, 4, 5, 6];
  // 음식별 와인 데이터 보관할 state
  const [countryWines, setCountryWines] = useState([]);
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 버튼 활성화 state
  const [isActive, setIsActive] = useState(1);
  // 국가별 와인 탭메뉴 버튼
  const countryBtns = [
    {
      ibtn: 1,
      name: "프랑스",
    },
    {
      ibtn: 2,
      name: "미국",
    },
    {
      ibtn: 3,
      name: "이탈리아",
    },
    {
      ibtn: 4,
      name: "칠레",
    },
    {
      ibtn: 5,
      name: "기타",
    },
  ];
  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    setIsActive(_ibtn);
  };
  // 상품 더미 데이터
  // const countryItem = [
  //   {
  //     productId: 6,
  //     categoryId: 1,
  //     featureId: 151,
  //     countryId: 1,
  //     aromaId: 151,
  //     nmKor: "바르티나",
  //     nmEng: "Bartina",
  //     price: 13640,
  //     quantity: 7,
  //     pic: "wine/6/xXCu1X1QRi2eVEsS3ij-tg_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 9,
  //   },
  //   {
  //     productId: 10,
  //     categoryId: 1,
  //     featureId: 67,
  //     countryId: 1,
  //     aromaId: 67,
  //     nmKor: "바디아 파시그나노 그란 셀레지온 치안티 클라시코",
  //     nmEng: "Badia a Passignano Gran Selezione Chianti Classico",
  //     price: 14000,
  //     quantity: 10,
  //     pic: "wine/10/hxzM5LQaQEmv24npsUIXfQ_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 13,
  //   },
  //   {
  //     productId: 16,
  //     categoryId: 1,
  //     featureId: 55,
  //     countryId: 1,
  //     aromaId: 55,
  //     nmKor: "콜리 델라 토스카나 센트랄 일 소렐 디 알레산드로",
  //     nmEng: "Colli Della Toscana Centrale Il Sole di Alessandro",
  //     price: 14550,
  //     quantity: 30,
  //     pic: "wine/16/b6bdHil1SQO31xJ5KI32-g_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 9,
  //   },
  //   {
  //     productId: 20,
  //     categoryId: 1,
  //     featureId: 475,
  //     countryId: 1,
  //     aromaId: 475,
  //     nmKor: "부르봉 바렐 에이지드 레드 블렌드",
  //     nmEng: "Bourbon Barrels Aged Red blend",
  //     price: 15000,
  //     quantity: 20,
  //     pic: "wine/20/3IZf5taHRHimHaLvSkNABw_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 13,
  //   },
  //   {
  //     productId: 24,
  //     categoryId: 1,
  //     featureId: 49,
  //     countryId: 1,
  //     aromaId: 49,
  //     nmKor: "컬멘 레저 바 리오하",
  //     nmEng: "Culmen Reserva Rioja",
  //     price: 15837,
  //     quantity: 13,
  //     pic: "wine/24/eyzAu-aCSJuV69OKW4mgEw_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 10,
  //   },
  //   {
  //     productId: 32,
  //     categoryId: 3,
  //     featureId: 37,
  //     countryId: 1,
  //     aromaId: 37,
  //     nmKor:
  //       "카바 크립타 그란 레저바 브루트 네이처(Cava Kripta Grand Reserve Brut Nature",
  //     nmEng: "Cava Kripta Gran Reserva Brut Nature",
  //     price: 17472,
  //     quantity: 11,
  //     pic: "wine/32/XprZ9WneQUqv6mIclWCklA_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 17,
  //   },
  // ];
  useEffect(() => {
    getContryWines(isActive, setCountryWines, setIsLoading);
  }, [isActive]);
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
          {countryBtns.map(item => (
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
      {/* 국가별 추천 와인 내용 */}
      <ContentsListItemWrap>
        {isLoading ? (
          // 로딩 화면 출력
          productListSkeleton.map(index => <ProductListSkeleton key={v4()} />)
        ) : countryWines.length > 0 ? (
          // 상품이 존재할 경우 출력
          countryWines.map((item, index) => (
            <ProductListItem key={v4()}>
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
                      <span>
                        {item.salePrice === null
                          ? item.price.toLocaleString()
                          : item.salePrice.toLocaleString()}
                      </span>
                      원
                    </li>
                    <li>
                      <span>{item.price.toLocaleString()}원</span>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </ProductListItem>
          ))
        ) : (
          // 상품이 존재하지 않을 경우 출력
          <NotProductListItem>
            <div>
              <i>
                <FontAwesomeIcon icon={faWineGlassEmpty} />
              </i>
              <p>상품이 존재하지 않습니다.</p>
            </div>
          </NotProductListItem>
        )}
      </ContentsListItemWrap>
      {/* 국가별 추천 와인 전체보기 */}
      <MainTabLink to="/productmainlist/country">
        국가별 추천 와인 전체보기
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </MainTabLink>
    </MainProductSecton>
  );
};

export default CountryWine;
