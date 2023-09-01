/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, InputNumber } from "antd";
import { ProductPriceWrap } from "../../style/product/AdminProductStyle";

export interface IProductPrice {
  productPrice: number | null;
  setProductPrice: React.Dispatch<React.SetStateAction<number | null>>;
}

const ProductAddPrice = ({ productPrice, setProductPrice }: IProductPrice) => {
  // 정상가 입력창 이벤트
  const changePrice = (value: number | null) => {
    if (value?.toString().includes(".")) {
      return;
    }
    setProductPrice(value);
  };
  console.log("정상가", productPrice);
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
                value={productPrice}
                onChange={changePrice}
              />
              원
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductPriceWrap>
  );
};

export default React.memo(ProductAddPrice);
