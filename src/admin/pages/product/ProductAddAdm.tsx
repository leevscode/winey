/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { ProductAddAdmWrap } from "../../style/product/AdminProductStyle";
import { ConfigProvider, Form, UploadFile } from "antd";
import { AdminColor } from "../../style/AdminLayoutStyle";
import ProductAddName from "../../components/product/ProductAddName";
import ProductAddPrice from "../../components/product/ProductAddPrice";
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
import { CheckboxValueType } from "antd/es/checkbox/Group";
import ProductAddSale from "../../components/product/ProductAddSale";
import { Iproduct } from "../../interface/ProductInterface";
import ProductAddAlcohol from "../../components/product/ProductAddAlcohol";
import { getAdmProductPost } from "../../api/patchAdmProduct";

const ProductAddAdm = () => {
  // 상품명 =========================
  // 상품명 한글 state
  const [productNameKr, setProductNameKr] = useState<string>("");
  // 상품명 영문 state
  const [productNameEn, setProductNameEn] = useState<string>("");
  // 가격 =========================
  // 정상가 state
  const [productPrice, setProductPrice] = useState<number | null>(0);
  // 할인설정 =========================
  // 할인 유무 설정 state
  const [saleYn, setSaleYn] = useState<number>(0);
  // 할인율 state
  const [salePer, setSalePer] = useState<number | null>(0);
  // 할인적용금액 state
  const [saleProductPrice, setSaleProductPrice] = useState<number>(0);
  // 할인 시작 state
  const [startSale, setStartSale] = useState<string | undefined>("0000-00-01");
  // 할인 끝 state
  const [endSale, setEndSale] = useState<string | undefined>("0000-00-01");
  // 원산지 =========================
  // 원산지 value 보관되는 state
  const [countryValue, setCountryValue] = useState<number>(1);
  // 와인종류 =========================
  // 와인 종류 value 보관되는 state
  const [wineValue, setWineValue] = useState<number>(1);
  // 도수 =========================
  // 도수 value 보관되는 state
  const [productAlcohol, setProductAlcohol] = useState<number | null>(0);
  // 당도 =========================
  // 당도 value 보관되는 state
  const [sweetyValue, setSweetyValue] = useState<number>(1);
  // 산도 =========================
  // 산도 value 보관되는 state
  const [acidityValue, setAcidityValue] = useState<number>(1);
  // 바디 =========================
  // 바디 value 보관되는 state
  const [bodyValue, setBodyValue] = useState<number>(1);
  // 향(아로마) =========================
  // 향(아로마) value 보관되는 state
  const [aromaArr, setAromaArr] = useState<CheckboxValueType[]>([]);
  // 페어링음식 =========================
  // 페어링음식 value 보관되는 state
  const [fairingArr, setFairingArr] = useState<CheckboxValueType[]>([]);
  // 추천유무 =========================
  // 추천상품 value 보관되는 state
  const [promotionValue, setPromotionValue] = useState<number>(0);
  // 입문자추천 value 보관되는 state
  const [beginnerValue, setBeginnerValue] = useState<number>(0);
  // 재고수량 =========================
  // 재고수량 value 보관되는 state
  const [quantityValue, setQuantityValue] = useState<number | null>(1);
  // 상품 이미지 업로드 =========================
  // 상품 이미지 보관되는 state
  const [selectImage, setSelectImage] = useState<UploadFile<any>[]>([]);
  // 상품 등록 POST
  const param: Iproduct = {
    nmKor: productNameKr,
    nmEng: productNameEn,
    price: productPrice,
    promotion: promotionValue,
    beginner: beginnerValue,
    alcohol: productAlcohol,
    quantity: quantityValue,
    country: countryValue,
    sweety: sweetyValue,
    acidity: acidityValue,
    body: bodyValue,
    category: wineValue,
    aroma: aromaArr,
    sale: salePer,
    salePrice: saleProductPrice,
    startSale: startSale,
    endSale: endSale,
    smallCategoryId: fairingArr,
    saleYn: saleYn,
  };
  // 상품 등록 성공
  const onFinish = () => {
    console.log("productParam 보냅니다. ", param);

    const formData = new FormData();
    formData.append("pic", selectImage[0]?.originFileObj || "");
    formData.append(
      "param", //data pk명
      new Blob([JSON.stringify(param)], {
        type: "application/json",
      }),
    );
    console.log("전송완료", formData);
    getAdmProductPost(formData);
  };
  // 상품 등록 실패
  const onFinishFailed = (errorInfo: any) => {
    console.log("결과 : 상품 등록 실패", errorInfo);
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
          <ProductAddName
            productNameKr={productNameKr}
            setProductNameKr={setProductNameKr}
            productNameEn={productNameEn}
            setProductNameEn={setProductNameEn}
          />
          {/* 가격 */}
          <ProductAddPrice
            productPrice={productPrice}
            setProductPrice={setProductPrice}
          />
          {/* 할인 설정 */}
          <ProductAddSale
            saleYn={saleYn}
            setSaleYn={setSaleYn}
            productPrice={productPrice}
            salePer={salePer}
            setSalePer={setSalePer}
            saleProductPrice={saleProductPrice}
            setSaleProductPrice={setSaleProductPrice}
            startSale={startSale}
            setStartSale={setStartSale}
            endSale={endSale}
            setEndSale={setEndSale}
          />
          {/* 원산지 */}
          <ProductAddCountry
            countryValue={countryValue}
            setCountryValue={setCountryValue}
          />
          {/* 와인 종류 */}
          <ProductAddWine wineValue={wineValue} setWineValue={setWineValue} />
          {/* 도수 */}
          <ProductAddAlcohol
            productAlcohol={productAlcohol}
            setProductAlcohol={setProductAlcohol}
          />
          {/* 당도 */}
          <ProductAddSweety
            sweetyValue={sweetyValue}
            setSweetyValue={setSweetyValue}
          />
          {/* 산도 */}
          <ProductAddAcidity
            acidityValue={acidityValue}
            setAcidityValue={setAcidityValue}
          />
          {/* 바디 */}
          <ProductAddBody bodyValue={bodyValue} setBodyValue={setBodyValue} />
          {/* 향(아로마) */}
          <ProductAddAroma aromaArr={aromaArr} setAromaArr={setAromaArr} />
          {/* 페어링음식 */}
          <ProductAddFairing
            fairingArr={fairingArr}
            setFairingArr={setFairingArr}
          />
          {/* 추천유무 */}
          <ProductAddPromotion
            promotionValue={promotionValue}
            setPromotionValue={setPromotionValue}
            beginnerValue={beginnerValue}
            setBeginnerValue={setBeginnerValue}
          />
          {/* 재고수량 */}
          <ProductAddQuantity
            quantityValue={quantityValue}
            setQuantityValue={setQuantityValue}
          />
          {/* 상품이미지업로드 */}
          <ProductAddImage
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
        </Form>
      </ConfigProvider>
    </ProductAddAdmWrap>
  );
};

export default ProductAddAdm;
