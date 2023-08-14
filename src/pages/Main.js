/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { MainWrap } from "../style/MainStyle";
import Visual from "../components/main/Visual";
import NavList from "../components/main/NavList";
import RecommWine from "../components/main/RecommWine";
import FoodWine from "../components/main/FoodWine";
import CountryWine from "../components/main/CountryWine";
import PriceWine from "../components/main/PriceWine";
import ProductCartModal from "../components/product/ProductCartModal";

const Main = () => {
  // 장바구니 완료 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <MainWrap>
        {/* 비주얼 슬라이드 */}
        <Visual />
        {/* 네비게이션 메뉴 리스트 */}
        <NavList />
        <div className="main-product-wrap">
          {/* 맞춤 와인 추천 */}
          <RecommWine setIsModalOpen={setIsModalOpen} />
          {/* 음식별 추천 와인 */}
          <FoodWine setIsModalOpen={setIsModalOpen} />
          {/* 국가별 추천 와인 */}
          <CountryWine setIsModalOpen={setIsModalOpen} />
          {/* 가격별 추천 와인 */}
          <PriceWine setIsModalOpen={setIsModalOpen} />
        </div>
      </MainWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Main;
