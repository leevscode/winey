import React, { useState } from "react";
import { ProductNameWrap } from "../../style/product/AdminProductStyle";
import { Form, Input } from "antd";

const ProductAddName = () => {
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
  return (
    <ProductNameWrap>
      <ul>
        <li>
          <div className="title">상품명</div>
          <div className="content">
            <Form.Item label="한글">
              <Input
                placeholder="상품 한글명을 입력해주세요."
                value={productNameKr}
                onChange={handleKr}
              />
            </Form.Item>
            <Form.Item label="영문">
              <Input
                placeholder="상품 영문명을 입력해주세요."
                value={productNameEn}
                onChange={handleEn}
              />
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductNameWrap>
  );
};

export default ProductAddName;
