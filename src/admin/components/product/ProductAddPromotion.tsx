/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Checkbox, Form } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ProductPromotionWrap } from "../../style/product/AdminProductStyle";

export interface IProductPromotion {
  promotionValue: number;
  setPromotionValue: React.Dispatch<React.SetStateAction<number>>;
  beginnerValue: number;
  setBeginnerValue: React.Dispatch<React.SetStateAction<number>>;
}

const ProductAddPromotion = ({
  promotionValue,
  setPromotionValue,
  beginnerValue,
  setBeginnerValue,
}: IProductPromotion) => {
  const checkPromotion = (checkedValues: CheckboxValueType[]) => {
    // console.log(checkedValues);
    // checkedValues에 "추천상품" 포함되어 있으면 promotionValue에 1을 전달
    if (checkedValues.includes("추천상품")) {
      // console.log("추천상품입니다.");
      setPromotionValue(1);
    } else {
      setPromotionValue(0);
    }
    // checkedValues에 "입문자추천" 포함되어 있으면 beginnerValue에 1을 전달
    if (checkedValues.includes("입문자추천")) {
      // console.log("입문자추천입니다.");
      setBeginnerValue(1);
    } else {
      setBeginnerValue(0);
    }
  };
  // console.log("promotionValue의 값은?", promotionValue);
  // console.log("beginnerValue의 값은?", beginnerValue);
  return (
    <ProductPromotionWrap>
      <ul>
        <li>
          <div className="title">추천 유무</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group onChange={checkPromotion}>
                <ul>
                  <li>
                    <Checkbox value="추천상품">추천상품</Checkbox>
                  </li>
                  <li>
                    <Checkbox value="입문자추천">입문자 추천</Checkbox>
                  </li>
                </ul>
              </Checkbox.Group>
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductPromotionWrap>
  );
};

export default React.memo(ProductAddPromotion);
