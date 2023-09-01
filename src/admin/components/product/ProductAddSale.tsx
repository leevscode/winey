/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { DatePicker, Form, InputNumber, Popover } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import {
  ProductFormBtn,
  ProductSaleDateWrap,
} from "../../style/product/AdminProductStyle";

// RangePicker 범위 타입 지정
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

export interface IProductSaleDate {
  // 정상가 타입 설정
  productPrice: number | null;
  // 할인율 타입 설정
  salePer: number | null;
  setSalePer: React.Dispatch<React.SetStateAction<number | null>>;
  // 할인적용금액 타입 설정
  saleProductPrice: number;
  setSaleProductPrice: React.Dispatch<React.SetStateAction<number>>;

  // 할인기간 타입 설정
  startSale: string | undefined;
  setStartSale: React.Dispatch<React.SetStateAction<string | undefined>>;
  endSale: string | undefined;
  setEndSale: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ProductAddSale = ({
  productPrice,
  salePer,
  setSalePer,
  saleProductPrice,
  setSaleProductPrice,
  startSale,
  setStartSale,
  endSale,
  setEndSale,
}: IProductSaleDate) => {
  // 할인율적용 버튼 에러메세지 출력 state (Popover 컴포넌트)
  const [open, setOpen] = useState(false);
  // 할인율 입력창 이벤트
  const changeSalePer = (value: number | null) => {
    if (value?.toString().includes(".")) {
      return;
    }
    setSalePer(value);
  };
  // 할인율 계산
  const per = () => {
    // 정상가, 할인율의 값이 truthy 할 때 실행
    if (productPrice && salePer) {
      const res = productPrice * (salePer / 100);
      const result = productPrice - res;
      // console.log("할인된 금액은", res);
      // console.log("최종 할인 금액은", Math.floor(result));
      // 최종 할인 금액에서 소숫점을 내림 처리
      setSaleProductPrice(Math.floor(result));
    } else {
      // 정상가, 할인율의 값이 falsy 할 때 실행
      setOpen(true);
      setSaleProductPrice(0);
      // 2.5초 뒤 Popover 컴포넌트 숨김
      const closeOpen = setTimeout(() => setOpen(false), 2500);
      return () => clearTimeout(closeOpen);
    }
  };
  const perCalc: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    per();
    console.log("할인율 적용 버튼 눌렀습니다.");
  };
  console.log("3. 정상가", productPrice);
  console.log("4. 할인율", salePer);
  console.log("5. 최종할인금액", saleProductPrice);
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
          <div className="title">할인설정</div>
          <div className="content">
            <ol>
              <li>
                <Form.Item label="할인율 :">
                  <div className="input-wrap">
                    <InputNumber
                      min={0}
                      max={100}
                      controls={false}
                      value={salePer}
                      onChange={changeSalePer}
                    />
                    %
                  </div>
                  <Popover
                    content={
                      <div className="popover-content">
                        <i>
                          <FontAwesomeIcon icon={faTriangleExclamation} />
                        </i>
                        <p>정상가 또는 할인율을 입력해주세요.</p>
                      </div>
                    }
                    placement="bottom"
                    trigger="click"
                    open={open}
                  >
                    <ProductFormBtn onClick={perCalc}>
                      할인율적용
                    </ProductFormBtn>
                  </Popover>
                </Form.Item>
                <Form.Item label="할인적용금액 :">
                  <InputNumber
                    controls={false}
                    value={saleProductPrice}
                    readOnly={true}
                  />
                  원
                </Form.Item>
              </li>
              <li>
                <Form.Item label="할인 기간 설정 :">
                  <RangePicker
                    format={dateFormat}
                    picker="month"
                    disabledDate={disabledDate}
                    onChange={onRangeChange}
                  />
                </Form.Item>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </ProductSaleDateWrap>
  );
};

export default React.memo(ProductAddSale);
