/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import Visual from "../components/main/Visual";
import NavList from "../components/main/NavList";
import RecommWine from "../components/main/RecommWine";

const Main = () => {
  return (
    <>
      {/* 비주얼 슬라이드 */}
      <Visual></Visual>
      {/* 네비게이션 메뉴 리스트 */}
      <NavList></NavList>
      {/* 맞춤 와인 추천 */}
      <RecommWine></RecommWine>
      {/* 음식별 추천 와인 */}
      {/* 국가별 추천 와인 */}
      {/* 가격별 추천 와인 */}
    </>
  );
};

export default Main;
