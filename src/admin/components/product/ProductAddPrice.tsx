import React from "react";
import {
  ProductFormBtn,
  ProductPriceWrap,
} from "../../style/product/AdminProductStyle";
import { Form, InputNumber } from "antd";

const ProductAddPrice = () => {
  return (
    <ProductPriceWrap>
      <ul>
        <li>
          <div className="title">정상가</div>
          <div className="content">
            <Form.Item>
              <InputNumber defaultValue={0} min={0} controls={false} />원
            </Form.Item>
          </div>
        </li>
        <li>
          <div className="title">할인율</div>
          <div className="content sale-price-content">
            <Form.Item>
              <div className="input-wrap">
                <InputNumber
                  defaultValue={0}
                  min={0}
                  max={100}
                  controls={false}
                />
                %
              </div>
              <ProductFormBtn>할인율적용</ProductFormBtn>
            </Form.Item>
          </div>
        </li>
        <li>
          <div className="title">최종판매금액</div>
          <div className="content">
            <Form.Item>
              <span>12500</span>원
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductPriceWrap>
  );
};

export default ProductAddPrice;
