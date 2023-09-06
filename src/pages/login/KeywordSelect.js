/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWineGlass,
  faMoneyBill1,
  faDrumstickBite,
  faBacon,
  faEgg,
  faFish,
  faShrimp,
  faLeaf,
  faBone,
  faCheese,
  faAppleWhole,
  faBowlFood,
  faPizzaSlice,
  faIceCream,
  faSun,
  faMound,
  faHollyBerry,
  faCannabis,
  faLemon,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";
import KeywordChooseCp from "../../components/join/KeywordChooseCp";
import { Gradation, Maincolor } from "../../style/GlobalStyle";
// 선호키워드 선택옵션
export const wineOptions = {
  categoryId: [
    {
      id: 1,
      value: (
        <>
          <i style={{ color: Gradation.wineB }}>
            <FontAwesomeIcon icon={faWineGlass} />
          </i>
          레드
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <i style={{ color: Gradation.whiteA }}>
            <FontAwesomeIcon icon={faWineGlass} />
          </i>
          화이트
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <i style={{ color: Gradation.sparkA }}>
            <FontAwesomeIcon icon={faWineGlass} />
          </i>
          스파클링
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <i style={{ color: Gradation.etcA }}>
            <FontAwesomeIcon icon={faWineGlass} />
          </i>
          기타
        </>
      ),
    },
  ],
  priceRange: [
    {
      id: 1,
      value: (
        <>
          <i style={{ color: Gradation.wineE }}>
            <FontAwesomeIcon icon={faMoneyBill1} />
          </i>
          2만원미만
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <i style={{ color: Gradation.wineD }}>
            <FontAwesomeIcon icon={faMoneyBill1} />
          </i>
          2~5만원
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <i style={{ color: Gradation.wineC }}>
            <FontAwesomeIcon icon={faMoneyBill1} />
          </i>
          5~10만원
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <i style={{ color: Gradation.wineB }}>
            <FontAwesomeIcon icon={faMoneyBill1} />
          </i>
          10만원이상
        </>
      ),
    },
  ],
  smallCategoryId: [
    {
      id: 1,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faDrumstickBite} />
          </i>
          스테이크
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faBacon} />
          </i>
          돼지고기
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faEgg} />
          </i>
          치킨
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faFish} />
          </i>
          해산물
        </>
      ),
    },
    {
      id: 5,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faShrimp} />
          </i>
          어패류
        </>
      ),
    },
    {
      id: 6,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faLeaf} />
          </i>
          샐러드
        </>
      ),
    },
    {
      id: 7,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faBone} />
          </i>
          튀김
        </>
      ),
    },
    {
      id: 8,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faCheese} />
          </i>
          치즈
        </>
      ),
    },
    {
      id: 9,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faAppleWhole} />
          </i>
          과일
        </>
      ),
    },
    {
      id: 10,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faBowlFood} />
          </i>
          한식
        </>
      ),
    },
    {
      id: 11,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faPizzaSlice} />
          </i>
          피자
        </>
      ),
    },
    {
      id: 12,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faIceCream} />
          </i>
          디저트
        </>
      ),
    },
  ],
  aromaCategoryId: [
    {
      id: 1,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faSun} />
          </i>
          꽃
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faLeaf} />
          </i>
          식물
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faAppleWhole} />
          </i>
          과일
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faCannabis} />
          </i>
          향신료
        </>
      ),
    },
    {
      id: 5,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faMound} />
          </i>
          흙냄새
        </>
      ),
    },
    {
      id: 6,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faHollyBerry} />
          </i>
          오크
        </>
      ),
    },
    {
      id: 7,
      value: (
        <>
          <i>
            <FontAwesomeIcon icon={faLemon} />
          </i>
          견과류
        </>
      ),
    },
  ],
  countryId: [
    {
      id: 1,
      value: (
        <>
          <i style={{ color: Maincolor.redDeep }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          미국
        </>
      ),
    },
    {
      id: 2,
      value: (
        <>
          <i style={{ color: Gradation.wineA }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          스페인
        </>
      ),
    },
    {
      id: 3,
      value: (
        <>
          <i style={{ color: Gradation.wineB }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          이탈리아
        </>
      ),
    },
    {
      id: 4,
      value: (
        <>
          <i style={{ color: Gradation.wineC }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          칠레
        </>
      ),
    },
    {
      id: 5,
      value: (
        <>
          <i style={{ color: Gradation.wineD }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          포르투갈
        </>
      ),
    },
    {
      id: 6,
      value: (
        <>
          <i style={{ color: Gradation.wineE }}>
            <FontAwesomeIcon icon={faFlag} />
          </i>
          프랑스
        </>
      ),
    },
  ],
};
const KeywordSelect = () => {
  return (
    <div>
      <KeywordChooseCp />
    </div>
  );
};

export default KeywordSelect;
