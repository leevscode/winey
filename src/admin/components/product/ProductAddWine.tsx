import { Form, Radio } from "antd";
import React from "react";
import { ProductWineWrap } from "../../style/product/AdminProductStyle";

const ProductAddWine = () => {
  return (
    <ProductWineWrap>
      <ul>
        <li>
          <div className="title">와인 종류</div>
          <div className="content">
            <Form.Item>
              <Radio.Group>
                <ul>
                  <li>
                    <Radio value="레드">레드</Radio>
                  </li>
                  <li>
                    <Radio value="화이트">화이트</Radio>
                  </li>
                  <li>
                    <Radio value="스파클링">스파클링</Radio>
                  </li>
                  <li>
                    <Radio value="기타">기타</Radio>
                  </li>
                </ul>
              </Radio.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductWineWrap>
  );
};

export default ProductAddWine;
