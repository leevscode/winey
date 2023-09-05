/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { ProductAcidityWrap } from "../../style/product/AdminProductStyle";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddAcidity = ({
  postProductData,
  setPostProductData,
}: IProductPost) => {
  const selectAcidity = (e: RadioChangeEvent) => {
    setPostProductData(prevState => {
      return { ...prevState, acidity: e.target.value };
    });
  };
  // console.log("산도 클릭했습니다.", acidityValue);
  return (
    <ProductAcidityWrap>
      <ul>
        <li>
          <div className="title">산도</div>
          <div className="content">
            <Form.Item>
              <Radio.Group
                onChange={selectAcidity}
                value={postProductData.acidity}
              >
                <ul>
                  <li>
                    <Radio value={1}>1</Radio>
                  </li>
                  <li>
                    <Radio value={2}>2</Radio>
                  </li>
                  <li>
                    <Radio value={3}>3</Radio>
                  </li>
                  <li>
                    <Radio value={4}>4</Radio>
                  </li>
                  <li>
                    <Radio value={5}>5</Radio>
                  </li>
                </ul>
              </Radio.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductAcidityWrap>
  );
};

export default React.memo(ProductAddAcidity);
