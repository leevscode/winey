import { Form, Input } from "antd";
import React from "react";
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
