/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";
import { ProductSaleDateWrap } from "../../style/product/AdminProductStyle";
import { DatePicker, Form } from "antd";

// RangePicker 범위 타입 지정
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

export interface IProductSaleDate {
  startSale: string | undefined;
  setStartSale: React.Dispatch<React.SetStateAction<string | undefined>>;
  endSale: string | undefined;
  setEndSale: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ProductAddSaleDate = ({
  startSale,
  setStartSale,
  endSale,
  setEndSale,
}: IProductSaleDate) => {
  // ant design RangePicker 사용
  const { RangePicker } = DatePicker;
  // eslint-disable-next-line arrow-body-style
  // 지난달 선택 불가 처리
  const disabledDate: RangePickerProps["disabledDate"] = current => {
    return current && current < dayjs().endOf("day");
  };
  // 날짜 형식
  const dateFormat = "YYYY-MM";
  // 날짜 선택
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
  ) => {
    if (dates) {
      // console.log("From: ", dates[0], ", to: ", dates[1]);
      // console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      // console.log("할인시작날짜:", dateStrings[0] + "-01");
      // console.log("할인종료날짜:", dateStrings[1] + "-01");
      setStartSale(dateStrings[0] + "-01");
      setEndSale(dateStrings[1] + "-01");
    } else {
      // 날짜 초기화
      console.log("Clear");
    }
  };
  console.log("할인 시작날짜 담았습니다.", startSale);
  console.log("할인 종료날짜 담았습니다.", endSale);
  return (
    <ProductSaleDateWrap>
      <ul>
        <li>
          <div className="title">할인기간설정</div>
          <div className="content">
            <Form.Item>
              <RangePicker
                format={dateFormat}
                picker="month"
                disabledDate={disabledDate}
                onChange={onRangeChange}
              />
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductSaleDateWrap>
  );
};

export default React.memo(ProductAddSaleDate);
