import { Form, Radio } from "antd";
import React from "react";
import { ProductAcidityWrap } from "../../style/product/AdminProductStyle";

const ProductAddAcidity = () => {
  return (
    <ProductAcidityWrap>
      <ul>
        <li>
          <div className="title">산도</div>
          <div className="content">
            <Form.Item>
              <Radio.Group>
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
    </ProductAcidityWrap>
  );
};

export default ProductAddAcidity;
