/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
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
import { NotProductListItem } from "../../style/ProductStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import { getFoodWines } from "../../api/patchmain";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import Item from "./Item";

const FoodWine = ({ setIsModalOpen }) => {
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3, 4, 5, 6];
  // 음식별 와인 데이터 보관할 state
  const [foodWines, setFoodWines] = useState([]);
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 버튼 활성화 state
  const [isActive, setIsActive] = useState(1);
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
    // console.log("현재데이터", foodWines);
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
  // ];
  useEffect(() => {
    getFoodWines(isActive, setFoodWines, setIsLoading);
    // console.log("useEffect에서 로딩 컴포넌트", isLoading);
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
            <Item foodWines={foodWines} setIsModalOpen={setIsModalOpen} />
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
        <MainTabLink to="/productmain/food">
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
