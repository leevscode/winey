/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { DatePicker, Form, InputNumber, Radio, RadioChangeEvent } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import { ProductSaleDateWrap } from "../../style/product/AdminProductStyle";
import moment from "moment";
import { IProductPut } from "../../interface/ProductInterface";

// RangePicker 범위 타입 지정
export type RangeValue = [Dayjs | null, Dayjs | null] | null;

const ProductAddSale = ({
  postProductData,
  setPostProductData,
  saleYnCheck,
  setSaleYnCheck,
  saleDisabled,
  setSaleDisabled,
  dateDisabled,
  setDateDisabled,
}: IProductPut) => {
  // 오늘 날짜
  const today = new Date();
  // 오늘 날짜를 YYYY-MM 형식으로 변환
  const todayMoment = moment(today).format("YYYY-MM");
  // console.log("오늘", todayMoment);
  // // 할인 여부 설정에 따른 할인율 컴포넌트 활성화, 비활성화 state
  // const [saleDisabled, setSaleDisabled] = useState<boolean>(true);
  // // 할인 여부 설정에 따른 할인 기간 컴포넌트 활성화, 비활성화 state
  // const [dateDisabled, setDateDisabled] = useState<boolean>(true);
  // 할인 여부 설정
  const selectSaleDate = (e: RadioChangeEvent) => {
    if (e.target.value === 1) {
      // 할인하지않음 선택
      setSaleYnCheck!(1);
      setSaleDisabled!(true);
      setDateDisabled!(true);
      // 날짜 초기화
      setPostProductData(prevState => {
        return {
          ...prevState,
          saleYn: 0,
          startSale: "0000-00-01",
          endSale: "0000-00-01",
        };
      });
    } else if (e.target.value === 2) {
      // 상시 할인 선택
      // console.log("값이 2입니다.");
      setSaleYnCheck!(2);
      setSaleDisabled!(false);
      setDateDisabled!(true);
      // 상시 할인 선택 시 시작 날짜 : 오늘 ~ 2999년 12월 01까지
      setPostProductData(prevState => {
        return {
          ...prevState,
          saleYn: 1,
          startSale: todayMoment + "-01",
          endSale: "2999-12-01",
        };
      });
    } else if (e.target.value === 3) {
      // 기간별 할인 선택
      // console.log("값이 3입니다.");
      setSaleYnCheck!(3);
      setSaleDisabled!(false);
      setDateDisabled!(false);
      // 날짜 초기화
      setPostProductData(prevState => {
        return {
          ...prevState,
          saleYn: 1,
          startSale: "0000-00-01",
          endSale: "0000-00-01",
        };
      });
    }
  };
  // 할인율 입력창 이벤트
  const changeSalePer = (value: number | null) => {
    if (value?.toString().includes(".")) {
      return;
    }
    // setSalePer(value);

    setPostProductData(prevState => {
      return {
        ...prevState,
        sale: value,
      };
    });
  };
  const productPrice = postProductData.price;
  const salePer = postProductData.sale;
  // 할인율 계산
  const per = () => {
    // 정상가, 할인율의 값이 truthy 할 때 실행
    if (productPrice && salePer) {
      const res = productPrice * (salePer / 100);
      const result = productPrice - res;
      // console.log("할인된 금액은", res);
      // console.log("최종 할인 금액은", Math.floor(result));
      // 최종 할인 금액에서 소숫점을 내림 처리
      setPostProductData(prevState => {
        return {
          ...prevState,
          salePrice: Math.floor(result),
        };
      });
    } else {
      setPostProductData(prevState => {
        return {
          ...prevState,
          salePrice: 0,
        };
      });
    }
  };
  // console.log("3. 정상가", productPrice);
  // console.log("4. 할인율", salePer);
  // console.log("5. 최종할인금액", saleProductPrice);
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
      console.log("할인시작날짜:", dateStrings[0] + "-01");
      console.log("할인종료날짜:", dateStrings[1] + "-01");
      setPostProductData(prevState => {
        return {
          ...prevState,
          startSale: dateStrings[0] + "-01",
          endSale: dateStrings[1] + "-01",
        };
      });
    } else {
      // 날짜 초기화
      // console.log("Clear");
    }
  };
  // console.log("할인 시작날짜 담았습니다.", postProductData.startSale);
  // console.log("할인 종료날짜 담았습니다.", postProductData.endSale);

  // 정상가 or 할인율 변할 때 할인적용금액 계산됨
  useEffect(() => {
    per();
  }, [productPrice, salePer]);

  return (
    <ProductSaleDateWrap>
      <ul>
        <li>
          <div className="title">할인설정</div>
          <div className="content">
            <ol>
              <li>
                <Form.Item label="할인 여부 설정 :">
                  <Radio.Group
                    buttonStyle="solid"
                    onChange={selectSaleDate}
                    value={saleYnCheck}
                  >
                    <Radio.Button value={1}>할인하지않음</Radio.Button>
                    <Radio.Button value={2}>상시 할인</Radio.Button>
                    <Radio.Button value={3}>기간별 할인</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </li>
              <li>
                <Form.Item label="할인율 :">
                  <div className="input-wrap">
                    <InputNumber
                      min={0}
                      max={100}
                      controls={false}
                      value={salePer}
                      onChange={changeSalePer}
                      disabled={saleDisabled}
                    />
                    %
                  </div>
                </Form.Item>
                <Form.Item label="할인적용금액 :">
                  <InputNumber
                    controls={false}
                    value={postProductData.salePrice}
                    readOnly={true}
                    disabled={saleDisabled}
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
                    disabled={dateDisabled}
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
