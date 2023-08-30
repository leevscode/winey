import React from "react";
import { ProductSaleDateWrap } from "../../style/product/AdminProductStyle";
import { DatePicker, Form } from "antd";

const ProductAddSaleDate = () => {
  // ant design RangePicker
  const { RangePicker } = DatePicker;
  return (
    <ProductSaleDateWrap>
      <ul>
        <li>
          <div className="title">할인기간설정</div>
          <div className="content">
            <Form.Item>
              <RangePicker picker="month" />
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductSaleDateWrap>
  );
};

export default ProductAddSaleDate;
