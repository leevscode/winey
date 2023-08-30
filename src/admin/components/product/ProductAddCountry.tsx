import { Form, Radio } from "antd";
import React from "react";
import { ProductCountryWrap } from "../../style/product/AdminProductStyle";

const ProductAddCountry = () => {
  return (
    <ProductCountryWrap>
      <ul>
        <li>
          <div className="title">원산지</div>
          <div className="content">
            <Form.Item>
              <Radio.Group>
                <ul>
                  <li>
                    <Radio value="프랑스">프랑스</Radio>
                  </li>
                  <li>
                    <Radio value="이탈리아">이탈리아</Radio>
                  </li>
                  <li>
                    <Radio value="칠레">칠레</Radio>
                  </li>
                  <li>
                    <Radio value="스페인">스페인</Radio>
                  </li>
                  <li>
                    <Radio value="호주">호주</Radio>
                  </li>
                  <li>
                    <Radio value="미국">미국</Radio>
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
    </ProductCountryWrap>
  );
};

export default ProductAddCountry;
