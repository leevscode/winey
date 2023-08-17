/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api/patchproduct";
import { ProductDetailWrap } from "../../style/ProductDetailStyle";
import { SectionLine } from "../../style/GlobalStyle";
import WineInfo from "../../components/productdetail/WineInfo";
import WindeDetailInfo from "../../components/productdetail/WindeDetailInfo";
import WineReview from "../../components/productdetail/WineReview";
import WineInfoTable from "../../components/productdetail/WineInfoTable";
import WineLevel from "../../components/productdetail/WineLevel";
import WineRecommend from "../../components/productdetail/WineRecommend";
import WineSellQuick from "../../components/productdetail/WineSellQuick";
import ProductCartModal from "../../components/product/ProductCartModal";

const ProductDetail = () => {
  const { iproduct } = useParams();
  // 상품 상세페이지 데이터 보관할 state
  const [productDetail, setProductDetail] = useState({});
  const getData = async () => {
    await getProductDetail(setProductDetail, iproduct);
  };
  // 장바구니 완료 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getData();
  }, [iproduct]);
  return (
    <ProductDetailWrap>
      {/* 상품 이미지, 와인 종류, 원산지, 이름, 가격정보 */}
      <WineInfo productDetail={productDetail} />
      <SectionLine />
      {/* 당도, 산도, 바디 */}
      <WindeDetailInfo productDetail={productDetail} />
      <SectionLine />
      {/* 입문 난이도 */}
      <WineLevel productDetail={productDetail} />
      <SectionLine />
      {/* 페어링, 아로마, 음용온도 */}
      <WineRecommend productDetail={productDetail} />
      <SectionLine />
      {/* 와인 평점 */}
      <WineReview productDetail={productDetail} />
      <SectionLine />
      {/* 상품 정보 */}
      <WineInfoTable productDetail={productDetail} />
      {/* 구매하기 퀵메뉴 버튼 */}
      <WineSellQuick iproduct={iproduct} setIsModalOpen={setIsModalOpen} />
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </ProductDetailWrap>
  );
};

export default ProductDetail;
