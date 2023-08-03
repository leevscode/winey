import React from "react";
import { ProductDetailWrap } from "../../style/ProductDetailStyle";
import { SectionLine } from "../../style/GlobalStyle";
import WineInfo from "../../components/productdetail/WineInfo";
import WindeDetailInfo from "../../components/productdetail/WindeDetailInfo";
import WineReview from "../../components/productdetail/WineReview";
import WineInfoTable from "../../components/productdetail/WineInfoTable";
import WineLevel from "../../components/productdetail/WineLevel";
import WineRecommend from "../../components/productdetail/WineRecommend";

const ProductDetail = () => {
  return (
    <ProductDetailWrap>
      {/* 상품 이미지, 와인 종류, 원산지, 이름, 가격정보 */}
      <WineInfo />
      <SectionLine />
      {/* 당도, 산도, 바디 */}
      <WindeDetailInfo />
      <SectionLine />
      {/* 입문 난이도 */}
      <WineLevel />
      <SectionLine />
      {/* 페어링, 아로마, 음용온도 */}
      <WineRecommend />
      <SectionLine />
      {/* 와인 평점 */}
      <WineReview />
      <SectionLine />
      {/* 상품 정보 */}
      <WineInfoTable />
    </ProductDetailWrap>
  );
};

export default ProductDetail;
