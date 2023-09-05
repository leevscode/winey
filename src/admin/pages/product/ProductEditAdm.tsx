/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductAddAdmWrap } from "../../style/product/AdminProductStyle";
import { ConfigProvider, Form, Modal, UploadFile } from "antd";
import { AdminColor } from "../../style/AdminLayoutStyle";
import ProductAddName from "../../components/productedit/ProductAddName";
import ProductAddPrice from "../../components/productedit/ProductAddPrice";
import ProductAddCountry from "../../components/productedit/ProductAddCountry";
import ProductAddWine from "../../components/productedit/ProductAddWine";
import ProductAddSweety from "../../components/productedit/ProductAddSweety";
import ProductAddAcidity from "../../components/productedit/ProductAddAcidity";
import ProductAddBody from "../../components/productedit/ProductAddBody";
import ProductAddAroma from "../../components/productedit/ProductAddAroma";
import ProductAddFairing from "../../components/productedit/ProductAddFairing";
import ProductAddPromotion from "../../components/productedit/ProductAddPromotion";
import ProductAddQuantity from "../../components/productedit/ProductAddQuantity";
import ProductAddImage from "../../components/productedit/ProductAddImage";
import ProductAddSubmit from "../../components/productedit/ProductAddSubmit";
import ProductAddSale from "../../components/productedit/ProductAddSale";
import ProductAddAlcohol from "../../components/productedit/ProductAddAlcohol";
import { Iproduct } from "../../interface/ProductInterface";
import {
  getAdmProductDetail,
  getAdmProductPost,
  getAdmProductPut,
  getProductImgDel,
} from "../../api/patchAdmProduct";

const ProductEditAdm = () => {
  const navigate = useNavigate();
  const { iproduct } = useParams();
  // 상품명 한글 미입력에 대한 예외처리 state
  const [nameNoKr, setNameNoKr] = useState<boolean>(false);
  // 상품명 한글 미입력에 대한 예외처리 state
  const [nameNoEn, setNameNoEn] = useState<boolean>(false);
  // 정상가 금액 0일 경우에 대한 예외처리 state
  const [priceNo, setPriceNo] = useState<boolean>(false);
  // 상품 이미지 보관되는 state
  const [selectImage, setSelectImage] = useState<UploadFile<any>[]>([]);
  // 할인 여부를 선택하는 state
  const [saleYnCheck, setSaleYnCheck] = useState<number | undefined>(1);
  // 할인 여부 설정에 따른 할인율 컴포넌트 활성화, 비활성화 state
  const [saleDisabled, setSaleDisabled] = useState<boolean>(true);
  // 할인 여부 설정에 따른 할인 기간 컴포넌트 활성화, 비활성화 state
  const [dateDisabled, setDateDisabled] = useState<boolean>(true);
  // 상품 등록 PUT 데이터를 보관할 state
  const [postProductData, setPostProductData] = useState<Iproduct>({
    productId: "",
    nmKor: "",
    nmEng: "",
    price: 0,
    promotion: 0,
    beginner: 0,
    alcohol: 0,
    quantity: 0,
    pic: "",
    country: 1,
    sweety: 1,
    acidity: 1,
    body: 1,
    category: 1,
    aroma: [],
    sale: 0,
    salePrice: 0,
    startSale: "0000-00-01",
    endSale: "0000-00-01",
    smallCategoryId: [],
    saleYn: 0,
  });
  useEffect(() => {
    getAdmProductDetail(
      iproduct,
      setPostProductData,
      setSaleYnCheck,
      setSaleDisabled,
      setDateDisabled,
    );
    setSelectImage([
      {
        uid: "0",
        name: "업로드한 이미지",
        url: postProductData.pic,
      },
    ]);
  }, []);
  console.log("데이터", postProductData);
  // 상품 등록 성공
  const onFinish = () => {
    console.log("productParam 보냅니다. ", postProductData);
    // 상품명 미입력에 대한 예외처리
    if (postProductData.nmKor?.length === 0) {
      setNameNoKr(true);
      return;
    } else if (postProductData.nmEng?.length === 0) {
      setNameNoEn(true);
      return;
    }
    // 정상가 미입력에 대한 예외처리
    if (postProductData.price === 0) {
      setPriceNo(true);
      return;
    }

    const formData = new FormData();
    formData.append("pic", selectImage[0]?.originFileObj || "");
    formData.append(
      "param", //data pk명
      new Blob([JSON.stringify(postProductData)], {
        type: "application/json",
      }),
    );
    // 모달
    const handleProductUpload = () => {
      Modal.confirm({
        okText: "예",
        cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        content: (
          <ul>
            <li>상품 내용을 수정하시겠습니까?</li>
          </ul>
        ),
        onOk() {
          getAdmProductPut(formData);
          getProductImgDel(iproduct);
          navigate("../productlist");
        },
        onCancel() {
          // console.log("Cancel");
        },
      });
    };
    handleProductUpload();
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
            postProductData={postProductData}
            setPostProductData={setPostProductData}
            nameNoKr={nameNoKr}
            nameNoEn={nameNoEn}
          />
          {/* 가격 */}
          <ProductAddPrice
            postProductData={postProductData}
            setPostProductData={setPostProductData}
            priceNo={priceNo}
          />
          {/* 할인 설정 */}
          <ProductAddSale
            postProductData={postProductData}
            setPostProductData={setPostProductData}
            saleDisabled={saleDisabled}
            setSaleDisabled={setSaleDisabled}
            dateDisabled={dateDisabled}
            setDateDisabled={setDateDisabled}
            saleYnCheck={saleYnCheck}
            setSaleYnCheck={setSaleYnCheck}
          />
          {/* 원산지 */}
          <ProductAddCountry
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 와인 종류 */}
          <ProductAddWine
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 도수 */}
          <ProductAddAlcohol
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 당도 */}
          <ProductAddSweety
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 산도 */}
          <ProductAddAcidity
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 바디 */}
          <ProductAddBody
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 향(아로마) */}
          <ProductAddAroma
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 페어링음식 */}
          <ProductAddFairing
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 추천유무 */}
          <ProductAddPromotion
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 재고수량 */}
          <ProductAddQuantity
            postProductData={postProductData}
            setPostProductData={setPostProductData}
          />
          {/* 상품이미지업로드 */}
          <ProductAddImage
            postProductData={postProductData}
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
        </Form>
      </ConfigProvider>
    </ProductAddAdmWrap>
  );
};

export default ProductEditAdm;
