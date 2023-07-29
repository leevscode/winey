/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { MainProductWrap, MainWrap } from "../style/MainStyle";
import Visual from "../components/main/Visual";
import NavList from "../components/main/NavList";
import RecommWine from "../components/main/RecommWine";
import FoodWine from "../components/main/FoodWine";
import CountryWine from "../components/main/CountryWine";
import PriceWine from "../components/main/PriceWine";

const Main = () => {
  return (
    <MainWrap>
      {/* 비주얼 슬라이드 */}
      <Visual></Visual>
      {/* 네비게이션 메뉴 리스트 */}
      <NavList></NavList>
      <div className="main-product-wrap">
        {/* 맞춤 와인 추천 */}
        <RecommWine></RecommWine>
        {/* 음식별 추천 와인 */}
        <FoodWine></FoodWine>
        {/* 국가별 추천 와인 */}
        <CountryWine></CountryWine>
        {/* 가격별 추천 와인 */}
        <PriceWine></PriceWine>
      </div>
    </MainWrap>
  );
};

export default Main;
