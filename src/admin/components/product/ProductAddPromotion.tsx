/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Checkbox, Form } from "antd";
import { ProductPromotionWrap } from "../../style/product/AdminProductStyle";

const ProductAddPromotion = () => {
  return (
    <ProductPromotionWrap>
      <ul>
        <li>
          <div className="title">추천 유무</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group>
                <ul>
                  <li>
                    <Checkbox value={"추천상품"}>추천상품</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={"입문자 추천"}>입문자 추천</Checkbox>
                  </li>
                </ul>
              </Checkbox.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductPromotionWrap>
  );
};

export default ProductAddPromotion;
