/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Form } from "antd";
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
