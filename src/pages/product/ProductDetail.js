/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { ProductDetailWrap } from "../../style/ProductDetailStyle";
import { SectionLine } from "../../style/GlobalStyle";
import WineInfo from "../../components/productdetail/WineInfo";
import WindeDetailInfo from "../../components/productdetail/WindeDetailInfo";
import WineReview from "../../components/productdetail/WineReview";
import WineInfoTable from "../../components/productdetail/WineInfoTable";
import WineLevel from "../../components/productdetail/WineLevel";
import WineRecommend from "../../components/productdetail/WineRecommend";
import WineSellQuick from "../../components/productdetail/WineSellQuick";
import { useParams } from "react-router";
import { getProductDetail } from "../../api/patchproduct";

const ProductDetail = () => {
  const { iproduct } = useParams();
  // 상품 상세페이지 데이터 보관할 state
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    getProductDetail(setProductDetail, iproduct);
  }, []);
  // console.log(productDetail);
  return (
    <ProductDetailWrap>
      {/* 상품 이미지, 와인 종류, 원산지, 이름, 가격정보 */}
      <WineInfo productDetail={productDetail} />
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
      {/* 구매하기 퀵메뉴 버튼 */}
      <WineSellQuick />
    </ProductDetailWrap>
  );
};

export default ProductDetail;
