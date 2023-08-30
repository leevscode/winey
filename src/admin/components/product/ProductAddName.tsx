/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Input } from "antd";
import { ProductNameWrap } from "../../style/product/AdminProductStyle";

const ProductAddName = () => {
  // 상품명 한글 state
  const [productNameKr, setProductNameKr] = useState<string>("");
  console.log("1. 상품명 한글 : ", productNameKr);
  // 상품명 한글 입력창 이벤트
  const checkKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 한글, 숫자, 공백만 사용하는 정규표현식
    const targetFilter = target.replace(/[^\d가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, "");
    setProductNameKr(targetFilter);
  };
  // 상품명 영문 state
  const [productNameEn, setProductNameEn] = useState<string>("");
  console.log("2. 상품명 영문 : ", productNameEn);
  // 상품명 영문 입력창 이벤트
  const checkEn = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                onChange={checkKr}
              />
            </Form.Item>
            <Form.Item label="영문">
              <Input
                placeholder="상품 영문명을 입력해주세요."
                value={productNameEn}
                onChange={checkEn}
              />
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductNameWrap>
  );
};

export default ProductAddName;
