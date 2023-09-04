/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { ProductWineWrap } from "../../style/product/AdminProductStyle";

export interface IProductWine {
  wineValue: number;
  setWineValue: React.Dispatch<React.SetStateAction<number>>;
}

const ProductAddWine = ({ wineValue, setWineValue }: IProductWine) => {
  const selectWine = (e: RadioChangeEvent) => {
    setWineValue(e.target.value);
  };
  // console.log("와인 종류 클릭했습니다.", wineValue);
  return (
    <ProductWineWrap>
      <ul>
        <li>
          <div className="title">와인 종류</div>
          <div className="content">
            <Form.Item>
              <Radio.Group onChange={selectWine} value={wineValue}>
                <ul>
                  <li>
                    <Radio value={1}>레드</Radio>
                  </li>
                  <li>
                    <Radio value={2}>화이트</Radio>
                  </li>
                  <li>
                    <Radio value={3}>스파클링</Radio>
                  </li>
                  <li>
                    <Radio value={4}>기타</Radio>
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

export default React.memo(ProductAddWine);
