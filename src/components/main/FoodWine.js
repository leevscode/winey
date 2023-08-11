/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faFish,
  faCheese,
  faCarrot,
  faIceCream,
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
import { getFoodWines } from "../../api/patchmain";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import NoImage from "../../assets/no_image.jpg";
import { addCart } from "../../api/patchcart";
import { useSelector } from "react-redux";

const FoodWine = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const userData = useSelector(state => state.user);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3, 4, 5, 6];
  // 음식별 와인 데이터 보관할 state
  const [foodWines, setFoodWines] = useState([]);
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 버튼 활성화 state
  const [isActive, setIsActive] = useState(1);
  // 장바구니 버튼 클릭 이벤트
  const showModal = useCallback(
    (_iproduct, e) => {
      e.preventDefault();
      // 비회원인 상태에서 장바구니 버튼 클릭했을 때
      if (userData.userId) {
        // 장바구니 POST 성공
        addCart(_iproduct);
        setIsModalOpen(true);
      } else {
        navigate("/login");
      }
      // console.log("선택한 상품의 아이디 값", _iproduct);
    },
    [setIsModalOpen],
  );
  // 음식별 와인 탭메뉴 버튼
  const foodBtns = [
    {
      ibtn: 1,
      icon: faBacon,
      name: "육류",
    },
    {
      ibtn: 2,
      icon: faFish,
      name: "해산물",
    },
    {
      ibtn: 3,
      icon: faCheese,
      name: "유제품",
    },
    {
      ibtn: 4,
      icon: faCarrot,
      name: "야채",
    },
    {
      ibtn: 5,
      icon: faIceCream,
      name: "디저트",
    },
  ];
  // console.log("선택한번호", isActive);
  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    // console.log("숫자 몇번이야", _ibtn);
    setIsActive(_ibtn);
    setFoodWines([]); // 기존 랜더링된 값 초기화
    setIsLoading(true);
  };
  // 상품 더미 데이터
  // const foodItem = [
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
    getFoodWines(isActive, setFoodWines, setIsLoading);
  }, [isActive]);
  return (
    <>
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
        {/* 탭메뉴 버튼 */}
        <MainTabBtn>
          <ul>
            {foodBtns.map(item => (
              <li key={item.ibtn}>
                <button
                  className={isActive === item.ibtn ? "active" : null}
                  onClick={e => handleTabBtn(item.ibtn, e)}
                >
                  <i>
                    <FontAwesomeIcon icon={item.icon} />
                  </i>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </MainTabBtn>
        {/* 음식별 추천 와인 내용 - 탭메뉴 내용 */}
        <ContentsListItemWrap>
          {isLoading ? (
            // 로딩 화면 출력
            productListSkeleton.map(index => <ProductListSkeleton key={v4()} />)
          ) : foodWines.length > 0 ? (
            // 상품이 존재할 경우 출력
            foodWines.map((item, index) => (
              <ProductListItem key={v4()}>
                <Link to={`/productdetail/${item.productId}`}>
                  <div className="img">
                    {/* 상품 사진 */}
                    <img
                      src={`/img/${item.pic}`}
                      alt={item.nmKor}
                      onError={onImgError}
                    />
                    {/* 장바구니 버튼 */}
                    <button onClick={e => showModal(item.productId, e)}>
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
                </Link>
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
        {/* 음식별 추천 와인 전체보기 */}
        <MainTabLink to="/productmainlist/food">
          음식별 추천 와인 전체보기
          <i>
            <FontAwesomeIcon icon={faArrowRight} />
          </i>
        </MainTabLink>
      </MainProductSecton>
    </>
  );
};

export default React.memo(FoodWine);
