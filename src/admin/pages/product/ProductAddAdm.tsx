import React, { useEffect, useState } from "react";
import {
  AdmProductBtnCancel,
  AdmProductBtnOk,
  ProductAddAdmWrap,
  ProductFormBtn,
} from "../../style/product/AdminProductStyle";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Upload,
} from "antd";
import { AdminColor } from "../../style/AdminLayoutStyle";
import ProductAddName from "../../components/product/ProductAddName";
import ProductAddPrice from "../../components/product/ProductAddPrice";
import ProductAddSaleDate from "../../components/product/ProductAddSaleDate";
import ProductAddCountry from "../../components/product/ProductAddCountry";
import ProductAddWine from "../../components/product/ProductAddWine";
import ProductAddSweety from "../../components/product/ProductAddSweety";
import ProductAddAcidity from "../../components/product/ProductAddAcidity";
import ProductAddBody from "../../components/product/ProductAddBody";
import ProductAddAroma from "../../components/product/ProductAddAroma";
import ProductAddFairing from "../../components/product/ProductAddFairing";
import ProductAddPromotion from "../../components/product/ProductAddPromotion";
import ProductAddQuantity from "../../components/product/ProductAddQuantity";
import ProductAddImage from "../../components/product/ProductAddImage";
import ProductAddSubmit from "../../components/product/ProductAddSubmit";

const ProductAddAdm = () => {
  // 안트디자인 기본 코드
  const { RangePicker } = DatePicker;

  // 상품명 한글 state
  const [productNameKr, setProductNameKr] = useState<string>("");
  console.log("1. 상품명 한글", productNameKr);
  // 상품명 한글 입력창 핸들러
  const handleKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 한글, 숫자, 공백만 사용하는 정규표현식
    const targetFilter = target.replace(/[^\d가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, "");
    setProductNameKr(targetFilter);
  };
  // 상품명 영문 state
  const [productNameEn, setProductNameEn] = useState<string>("");
  console.log("2. 상품명 영문", productNameEn);
  // 상품명 영문 입력창 핸들러
  const handleEn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 영문, 숫자, 공백만 사용하는 정규표현식
    const targetFilter = target.replace(/[^\da-zA-Z\s]/g, "");
    setProductNameEn(targetFilter);
  };
  // 상품 등록 성공
  const onFinish = () => {
    console.log("상품 등록 완료");
  };
  // 상품 등록 실패
  const onFinishFailed = (errorInfo: any) => {
    console.log("상품 등록 실패", errorInfo);
  };
  return (
    <ProductAddAdmWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: AdminColor.headColorC,
          },
        }}
      >
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {/* 상품 등록 버튼 */}
          <ProductAddSubmit />
          {/* 상품명 */}
          <ProductAddName />
          {/* 가격 */}
          <ProductAddPrice />
          {/* 할인기간설정 */}
          <ProductAddSaleDate />
          {/* 원산지 */}
          <ProductAddCountry />
          {/* 와인 종류 */}
          <ProductAddWine />
          {/* 당도 */}
          <ProductAddSweety />
          {/* 산도 */}
          <ProductAddAcidity />
          {/* 바디 */}
          <ProductAddBody />
          {/* 향(아로마) */}
          <ProductAddAroma />
          {/* 페어링음식 */}
          <ProductAddFairing />
          {/* 추천유무 */}
          <ProductAddPromotion />
          {/* 재고수량 */}
          <ProductAddQuantity />
          {/* 상품이미지업로드 */}
          <ProductAddImage />
        </Form>
      </ConfigProvider>
    </ProductAddAdmWrap>
  );
};

export default ProductAddAdm;
