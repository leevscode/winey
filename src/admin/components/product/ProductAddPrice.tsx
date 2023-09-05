/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, InputNumber } from "antd";
import { ProductPriceWrap } from "../../style/product/AdminProductStyle";
import { AnimatePresence, motion } from "framer-motion";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddPrice = ({
  postProductData,
  setPostProductData,
  priceNo,
}: IProductPost) => {
  // 정상가 입력창 이벤트
  const changePrice = (value: number | null) => {
    // 소숫점 예외처리
    if (value?.toString().includes(".")) {
      return;
    }
    setPostProductData(prevState => {
      return { ...prevState, price: value };
    });
  };
  console.log("정상가", postProductData.price);
  return (
    <ProductPriceWrap>
      <ul>
        <li>
          <div className="title">정상가</div>
          <div className="content">
            <Form.Item>
              <InputNumber
                min={0}
                max={10000000}
                controls={false}
                value={postProductData.price}
                onChange={changePrice}
              />
              원
            </Form.Item>
            <AnimatePresence>
              {priceNo === true && (
                <motion.p
                  className="notice"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  * 상품 정상가를 입력해주세요.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </li>
      </ul>
    </ProductPriceWrap>
  );
};

export default React.memo(ProductAddPrice);
