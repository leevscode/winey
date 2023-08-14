/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCartModal from "../../components/product/ProductCartModal";
import Food from "./Food";
import Country from "./Country";
import Price from "./Price";

const ProductMain = () => {
  const { pathname } = useLocation();
  // pathname에서 /productmain/ 는 제외처리
  const listPathName = pathname.slice(13);
  // console.log("pathname 출력해", listPathName);
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
      {/* 음식별 추천 와인 전체보기 */}
      {listPathName === "food" && <Food setIsModalOpen={setIsModalOpen} />}
      {/* 국가별 추천 와인 전체보기 */}
      {listPathName === "country" && (
        <Country setIsModalOpen={setIsModalOpen} />
      )}
      {/* 가격별 추천 와인 전체보기 */}
      {listPathName === "price" && <Price setIsModalOpen={setIsModalOpen} />}
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default ProductMain;
