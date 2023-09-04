/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Input } from "antd";
import { ProductNameWrap } from "../../style/product/AdminProductStyle";
import { AnimatePresence, motion } from "framer-motion";

export interface IProductName {
  productNameKr: string;
  setProductNameKr: React.Dispatch<React.SetStateAction<string>>;
  productNameEn: string;
  setProductNameEn: React.Dispatch<React.SetStateAction<string>>;
  nameNoKr: boolean;
  nameNoEn: boolean;
}

const ProductAddName = ({
  productNameKr,
  setProductNameKr,
  productNameEn,
  setProductNameEn,
  nameNoKr,
  nameNoEn,
}: IProductName) => {
  // console.log("1. 상품명 한글 : ", productNameKr);
  // console.log("2. 상품명 영문 : ", productNameEn);
  // 상품명 한글 입력창 이벤트
  const checkKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 한글, 숫자, 공백만 사용하는 정규표현식
    // const targetFilter = target.replace(/[^\d가-힣ㄱ-ㅎㅏ-ㅣ\s]/g, "");
    setProductNameKr(target);
  };
  // 상품명 영문 입력창 이벤트
  const checkEn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    // 영문, 숫자, 공백만 사용하는 정규표현식
    // const targetFilter = target.replace(/[^\da-zA-Z\s]/g, "");
    setProductNameEn(target);
  };
  return (
    <ProductNameWrap>
      <ul>
        <li>
          <div className="title">상품명</div>
          <div className="content">
            <Form.Item label="한글">
              <Input
                placeholder="상품명을 한글로 입력해주세요."
                value={productNameKr}
                onChange={checkKr}
              />
              <AnimatePresence>
                {nameNoKr === true && (
                  <motion.p
                    className="notice"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    * 한글 상품명을 입력해주세요.
                  </motion.p>
                )}
              </AnimatePresence>
            </Form.Item>
            <Form.Item label="영문">
              <Input
                placeholder="상품명을 영문으로 입력해주세요."
                value={productNameEn}
                onChange={checkEn}
              />
              <AnimatePresence>
                {nameNoEn === true && (
                  <motion.p
                    className="notice"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    * 영문 상품명을 입력해주세요.
                  </motion.p>
                )}
              </AnimatePresence>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductNameWrap>
  );
};

export default React.memo(ProductAddName);
