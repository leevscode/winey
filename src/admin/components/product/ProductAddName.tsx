/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Input } from "antd";
import { ProductNameWrap } from "../../style/product/AdminProductStyle";

const ProductAddName = () => {
  return (
    <ProductNameWrap>
      <ul>
        <li>
          <div className="title">상품명</div>
          <div className="content">
            <Form.Item
              label="한글"
              name="nmKor"
              rules={[
                {
                  pattern: /^[ㄱ-ㅎ가-힣0-9\s]+$/,
                  message: "상품명을 한글로 입력해주세요.",
                },
              ]}
            >
              <Input placeholder="상품명을 한글로 입력해주세요." />
            </Form.Item>
            <Form.Item
              label="영문"
              name="nmEng"
              rules={[
                {
                  pattern: /^[a-zA-Z0-9\s]+$/,
                  message: "상품명을 영문으로 입력해주세요.",
                },
              ]}
            >
              <Input placeholder="상품명을 영문으로 입력해주세요." />
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductNameWrap>
  );
};

export default React.memo(ProductAddName);
