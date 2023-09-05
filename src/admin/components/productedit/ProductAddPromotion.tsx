/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Checkbox, Form } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { ProductPromotionWrap } from "../../style/product/AdminProductStyle";
import { IProductPut } from "../../interface/ProductInterface";

const ProductAddPromotion = ({
  postProductData,
  setPostProductData,
}: IProductPut) => {
  const checkPromotion = (checkedValues: CheckboxValueType[]) => {
    // console.log(checkedValues);
    // checkedValues에 "추천상품" 포함되어 있으면 promotionValue에 1을 전달
    if (checkedValues.includes("추천상품")) {
      // console.log("추천상품입니다.");
      setPostProductData(prevState => {
        return {
          ...prevState,
          promotion: 1,
        };
      });
    } else {
      setPostProductData(prevState => {
        return {
          ...prevState,
          promotion: 0,
        };
      });
    }
    // checkedValues에 "입문자추천" 포함되어 있으면 beginnerValue에 1을 전달
    if (checkedValues.includes("입문자추천")) {
      // console.log("입문자추천입니다.");
      setPostProductData(prevState => {
        return {
          ...prevState,
          beginner: 1,
        };
      });
    } else {
      setPostProductData(prevState => {
        return {
          ...prevState,
          beginner: 0,
        };
      });
    }
  };
  // console.log("promotionValue의 값은?", postProductData.promotion);
  // console.log("beginnerValue의 값은?", postProductData.beginner);
  // 체크박스 value값 설정
  const promotionArr = [];
  if (postProductData.promotion === 1) {
    // 추천상품 값이 있을 때
    // console.log("추천상품 체크합니다");
    promotionArr[0] = "추천상품";
  }
  if (postProductData.beginner === 1) {
    // console.log("입문자추천 체크합니다");
    promotionArr[1] = "입문자추천";
  }
  return (
    <ProductPromotionWrap>
      <ul>
        <li>
          <div className="title">추천 유무</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group onChange={checkPromotion} value={promotionArr}>
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
