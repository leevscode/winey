/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { ProductCountryWrap } from "../../style/product/AdminProductStyle";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddCountry = ({
  postProductData,
  setPostProductData,
}: IProductPost) => {
  const selectCountry = (e: RadioChangeEvent) => {
    setPostProductData(prevState => {
      return { ...prevState, country: e.target.value };
    });
  };
  // console.log("원산지 클릭했습니다.", countryValue);
  return (
    <ProductCountryWrap>
      <ul>
        <li>
          <div className="title">원산지</div>
          <div className="content">
            <Form.Item>
              <Radio.Group
                onChange={selectCountry}
                value={postProductData.country}
              >
                <ul>
                  <li>
                    <Radio value={1}>프랑스</Radio>
                  </li>
                  <li>
                    <Radio value={2}>이탈리아</Radio>
                  </li>
                  <li>
                    <Radio value={3}>칠레</Radio>
                  </li>
                  <li>
                    <Radio value={4}>스페인</Radio>
                  </li>
                  <li>
                    <Radio value={5}>호주</Radio>
                  </li>
                  <li>
                    <Radio value={6}>미국</Radio>
                  </li>
                  <li>
                    <Radio value={7}>기타</Radio>
                  </li>
                </ul>
              </Radio.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductCountryWrap>
  );
};

export default React.memo(ProductAddCountry);
