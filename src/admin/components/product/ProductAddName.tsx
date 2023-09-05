/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Input } from "antd";
import { ProductNameWrap } from "../../style/product/AdminProductStyle";
import { AnimatePresence, motion } from "framer-motion";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddName = ({
  postProductData,
  setPostProductData,
  nameNoKr,
  nameNoEn,
}: IProductPost) => {
  // 상품명 한글 입력창 이벤트
  const checkKr = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostProductData(prevState => {
      return { ...prevState, nmKor: e.target.value };
    });
  };
  // 상품명 영문 입력창 이벤트
  const checkEn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostProductData(prevState => {
      return { ...prevState, nmEng: e.target.value };
    });
  };
  // console.log("1. 상품명 한글 : ", postProductData.nmKor);
  // console.log("2. 상품명 영문 : ", postProductData.nmEng);
  return (
    <ProductNameWrap>
      <ul>
        <li>
          <div className="title">상품명</div>
          <div className="content">
            <Form.Item label="한글">
              <Input
                placeholder="상품명을 한글로 입력해주세요."
                value={postProductData.nmKor}
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
                value={postProductData.nmEng}
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
