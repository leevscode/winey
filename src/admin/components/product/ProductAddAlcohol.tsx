/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Form, InputNumber } from "antd";
import { ProductAddAlcoholWrap } from "../../style/product/AdminProductStyle";

export interface IProductAlcohol {
  productAlcohol: number | null;
  setProductAlcohol: React.Dispatch<React.SetStateAction<number | null>>;
}

const ProductAddAlcohol = ({
  productAlcohol,
  setProductAlcohol,
}: IProductAlcohol) => {
  // 도수 입력창 이벤트
  const changeAlcohol = (value: number | null) => {
    if (value?.toString().includes(".")) {
      return;
    }
    setProductAlcohol(value);
  };
  console.log("도수", productAlcohol);
  return (
    <ProductAddAlcoholWrap>
      <ul>
        <li>
          <div className="title">도수</div>
          <div className="content">
            <Form.Item>
              약
              <InputNumber
                min={0}
                max={50}
                controls={false}
                value={productAlcohol}
                onChange={changeAlcohol}
              />
              %
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductAddAlcoholWrap>
  );
};

export default React.memo(ProductAddAlcohol);
