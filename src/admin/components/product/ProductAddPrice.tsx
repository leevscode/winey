/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Form, InputNumber, Popover } from "antd";
import {
  ProductFormBtn,
  ProductPriceWrap,
} from "../../style/product/AdminProductStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const ProductAddPrice = () => {
  // 할인율적용 버튼 에러메세지 출력 state (Popover 컴포넌트)
  const [open, setOpen] = useState(false);
  console.log(open);
  // 정상가 state
  const [productPrice, setProductPrice] = useState<number | null>(0);
  // 정상가 입력창 이벤트
  const changePrice = (value: number | null) => {
    setProductPrice(value);
  };
  console.log("3. 정상가", productPrice);
  // 할인율 state
  const [salePer, setSalePer] = useState<number | null>(0);
  // 할인율 입력창 이벤트
  const changeSalePer = (value: number | null) => {
    setSalePer(value);
  };
  console.log("4. 할인율", salePer);
  // 할인적용금액 state
  const [saleProductPrice, setSaleProductPrice] = useState<number>(0);
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
  console.log("5. 최종할인금액", saleProductPrice);

  return (
    <ProductPriceWrap>
      <ul>
        <li>
          <div className="title">정상가</div>
          <div className="content">
            <Form.Item>
              <InputNumber
                min={0}
                max={10000000}
                controls={false}
                value={productPrice}
                onChange={changePrice}
              />
              원
            </Form.Item>
          </div>
        </li>
        <li>
          <div className="title">할인율</div>
          <div className="content sale-price-content">
            <Form.Item>
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
                <ProductFormBtn onClick={perCalc}>할인율적용</ProductFormBtn>
              </Popover>
            </Form.Item>
          </div>
        </li>
        <li>
          <div className="title">할인적용금액</div>
          <div className="content">
            <Form.Item>
              <InputNumber
                controls={false}
                value={saleProductPrice}
                readOnly={true}
              />
              원
            </Form.Item>
          </div>
        </li>
      </ul>
    </ProductPriceWrap>
  );
};

export default ProductAddPrice;
