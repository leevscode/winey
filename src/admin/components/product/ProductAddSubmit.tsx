import { Form } from "antd";
import React from "react";
import {
  AdmProductBtnCancel,
  AdmProductBtnOk,
  ProductSubmitWrap,
} from "../../style/product/AdminProductStyle";

const ProductAddSubmit = () => {
  return (
    <ProductSubmitWrap>
      <div className="content">
        <Form.Item>
          <ul>
            <li>
              <AdmProductBtnOk type="submit">상품 등록</AdmProductBtnOk>
            </li>
            <li>
              <AdmProductBtnCancel type="submit">취소</AdmProductBtnCancel>
            </li>
          </ul>
        </Form.Item>
      </div>
    </ProductSubmitWrap>
  );
};

export default ProductAddSubmit;
