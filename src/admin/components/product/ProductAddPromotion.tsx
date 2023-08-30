import { Checkbox, Form } from "antd";
import React from "react";
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
