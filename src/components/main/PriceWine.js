/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import NoImage from "../../assets/no_image.jpg";
import {
  getPriceMinusTwo,
  getPriceOverFive,
  getPriceOverTwo,
  getPricePlusTen,
} from "../../api/patchmain";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { addCart, cartLengthData } from "../../api/patchcart";

const PriceWine = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
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
  // 장바구니 버튼 클릭 이벤트
  const showModal = useCallback(
    (_iproduct, e) => {
      e.preventDefault();
      addCart(_iproduct);
      cartLengthData(dispatch);
      setIsModalOpen(true);
    },
    [setIsModalOpen],
  );
  // 비회원 장바구니 버튼 클릭 이벤트
  const handleNotUser = useCallback(
    e => {
      e.preventDefault();
      navigate("/login");
    },
    [setIsModalOpen],
  );
  const handleTabBtn = (_ibtn, e) => {
    e.preventDefault();
    setIsActive(_ibtn);
    getPriceWines(_ibtn);
  };
  // 상품 더미 데이터
  // const PriceItem = [
  //   {
  //     productId: 1,
  //     categoryId: 4,
  //     featureId: 470,
  //     countryId: 2,
  //     aromaId: 470,
  //     nmKor: "트라마리 로제 디 프리미티보",
  //     nmEng: "Tramari Rosé di Primitivo",
  //     price: 11298,
  //     quantity: 7,
  //     pic: "wine/1/qMwuRhM3Sl2mHZSfzDwwXg_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 8,
  //   },
  // ];
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
        {isLoading ? (
          // 로딩 화면 출력
          productListSkeleton.map(index => <ProductListSkeleton key={v4()} />)
        ) : priceWines.length > 0 ? (
          // 상품이 존재할 경우 출력
          priceWines.map((item, index) => (
            <ProductListItem key={v4()}>
              <NavLink to={`/productdetail/${item.productId}`}>
                <div className="img">
                  <img
                    src={`/img/${item.pic}`}
                    alt={item.nmKor}
                    onError={onImgError}
                  />
                  {/* 장바구니 버튼 */}
                  <button
                    onClick={
                      userData.userId
                        ? e => showModal(item.productId, e)
                        : e => handleNotUser(e)
                    }
                  >
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
      {/* 가격별 추천 와인 전체보기 */}
      <MainTabLink to="/productmain/price">
        가격별 추천 와인 전체보기
        <i>
          <FontAwesomeIcon icon={faArrowRight} />
        </i>
      </MainTabLink>
    </MainProductSecton>
  );
};

export default React.memo(PriceWine);
