/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Checkbox, Form } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { ProductFairingWrap } from "../../style/product/AdminProductStyle";
import { IProductPost } from "../../interface/ProductInterface";

const ProductAddFairing = ({
  postProductData,
  setPostProductData,
}: IProductPost) => {
  const changeFairing = (checkedValues: CheckboxValueType[]) => {
    // 배열을 오름차순으로 정렬함
    setPostProductData(prevState => {
      return {
        ...prevState,
        smallCategoryId: checkedValues.sort(
          (a: CheckboxValueType, b: CheckboxValueType) => +a - +b,
        ),
      };
    });
  };
  // console.log("페어링 출력합니다.", postProductData.smallCategoryId);

  return (
    <ProductFairingWrap>
      <ul>
        <li>
          <div className="title">페어링음식</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group onChange={changeFairing}>
                <ul>
                  <li>
                    <Checkbox value={1}>스테이크</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={2}>치킨</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={3}>샐러드</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={4}>삼겹살</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={5}>해산물</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={6}>생선</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={7}>튀김</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={8}>한식</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={9}>치즈</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={10}>과일</Checkbox>
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

export default React.memo(ProductAddFairing);
