/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Checkbox, Form } from "antd";
import { ProductAromaWrap } from "../../style/product/AdminProductStyle";

const ProductAddAroma = () => {
  return (
    <ProductAromaWrap>
      <ul>
        <li>
          <div className="title">향(아로마)</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group>
                <ul>
                  <li>
                    <Checkbox value={1}>꽃</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={2}>과일</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={3}>식물</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={4}>향신료</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={5}>흙냄새</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={6}>탄향</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={7}>견과류</Checkbox>
                  </li>
                </ul>
              </Checkbox.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductAromaWrap>
  );
};

export default ProductAddAroma;
