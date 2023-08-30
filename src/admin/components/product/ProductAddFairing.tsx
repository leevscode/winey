import { Checkbox, Form } from "antd";
import React from "react";
import { ProductFairingWrap } from "../../style/product/AdminProductStyle";

const ProductAddFairing = () => {
  return (
    <ProductFairingWrap>
      <ul>
        <li>
          <div className="title">페어링음식</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group>
                <ul>
                  <li>
                    <Checkbox value={1}>스테이크</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={2}>삼겹살</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={3}>치킨</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={4}>생선</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={5}>해산물</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={6}>샐러드</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={7}>튀김</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={8}>치즈</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={9}>과일</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={10}>한식</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={11}>양식</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={12}>디저트</Checkbox>
                  </li>
                </ul>
              </Checkbox.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductFairingWrap>
  );
};

export default ProductAddFairing;
