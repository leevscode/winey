/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Checkbox, Form } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { ProductAromaWrap } from "../../style/product/AdminProductStyle";

export interface IProductAroma {
  aromaArr: CheckboxValueType[];
  setAromaArr: React.Dispatch<React.SetStateAction<CheckboxValueType[]>>;
}

const ProductAddAroma = ({ aromaArr, setAromaArr }: IProductAroma) => {
  const changeAroma = (checkedValues: CheckboxValueType[]) => {
    // 배열을 오름차순으로 정렬함
    setAromaArr(
      checkedValues.sort(
        (a: CheckboxValueType, b: CheckboxValueType) => +a - +b,
      ),
    );
  };
  // console.log("아로마 데이터 출력합니다.", aromaArr);
  return (
    <ProductAromaWrap>
      <ul>
        <li>
          <div className="title">향(아로마)</div>
          <div className="content">
            <Form.Item>
              <Checkbox.Group onChange={changeAroma}>
                <ul>
                  <li>
                    <Checkbox value={1}>꽃</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={2}>식물</Checkbox>
                  </li>
                  <li>
                    <Checkbox value={3}>과일</Checkbox>
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

export default React.memo(ProductAddAroma);
