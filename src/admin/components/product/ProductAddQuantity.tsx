/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Form, Input, InputNumber } from "antd";
import { ProductQuantityWrap } from "../../style/product/AdminProductStyle";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddQuantity = ({
  postProductData,
  setPostProductData,
}: IProductPost) => {
  // 재고수량 입력창 이벤트
  const changeQuantity = (value: number | null) => {
    if (value?.toString().includes(".")) {
      return;
    }
    setPostProductData(prevState => {
      return {
        ...prevState,
        quantity: value,
      };
    });
  };
  // console.log("재고수량", postProductData.quantity);

  return (
    <ProductQuantityWrap>
      <ul>
        <li>
          <div className="title">재고수량</div>
          <div className="content">
            <Form.Item>
              <InputNumber
                min={0}
                max={999}
                controls={false}
                value={postProductData.quantity}
                onChange={changeQuantity}
              />
              개
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductQuantityWrap>
  );
};

export default React.memo(ProductAddQuantity);
