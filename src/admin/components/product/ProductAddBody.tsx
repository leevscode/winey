/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { ProductBodyWrap } from "../../style/product/AdminProductStyle";

const ProductAddBody = () => {
  // 바디 value 보관되는 state
  const [bodyValue, setBodyValue] = useState(1);
  const changeBody = (e: RadioChangeEvent) => {
    console.log("바디 클릭했습니다.", e.target.value);
    setBodyValue(e.target.value);
  };
  return (
    <ProductBodyWrap>
      <ul>
        <li>
          <div className="title">바디</div>
          <div className="content">
            <Form.Item>
              <Radio.Group onChange={changeBody} value={bodyValue}>
                <ul>
                  <li>
                    <Radio value="1">1</Radio>
                  </li>
                  <li>
                    <Radio value="2">2</Radio>
                  </li>
                  <li>
                    <Radio value="3">3</Radio>
                  </li>
                  <li>
                    <Radio value="4">4</Radio>
                  </li>
                  <li>
                    <Radio value="5">5</Radio>
                  </li>
                </ul>
              </Radio.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductBodyWrap>
  );
};

export default ProductAddBody;
