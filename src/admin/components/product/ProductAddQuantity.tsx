/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Form, Input } from "antd";
import { ProductQuantityWrap } from "../../style/product/AdminProductStyle";

const ProductAddQuantity = () => {
  return (
    <ProductQuantityWrap>
      <ul>
        <li>
          <div className="title">재고수량</div>
          <div className="content">
            <Form.Item>
              <Input />개
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductQuantityWrap>
  );
};

export default ProductAddQuantity;
