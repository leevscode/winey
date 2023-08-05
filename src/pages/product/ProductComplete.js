import React, { useEffect, useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteMain,
  ProductCompleteText,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";
import { useLocation } from "react-router-dom";
import NoImage from "../../assets/no_image.jpg";

const ProductComplete = () => {
  // const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  // const { state } = useLocation();
  const location = useLocation();
  // console.log("state", state);

  const data = [{ ...location.state }];
  // const { totalPayList } = location.state;
  console.log("data", data);
  // console.log("totalPayList", totalPayList);

  // 첫 번째 요소 구조분해 할당
  const [firstItem] = data;

  // 내부의 객체들 구조분해 할당
  const {
    isPayment,
    productCollect,
    selectCollect: {
      pickUpSpot: { address, pk, title },
      pickUpData,
      pickUpTime,
    },
    totalPrice,
  } = firstItem;

  console.log("productCollect", productCollect);

  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  // useEffect(() => {
  //   data({ ...state }).then(result => {
  //     setIsLoading(false); // 로딩 상태 변경
  //   });
  // }, []);

  // // 데이터 로딩 중인 경우 로딩 표시
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <ProductCompleteMain>
      <ProductCompleteText>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon_sell_complete.svg`}
          alt="complete"
        />
        <p>결제가 완료되었습니다!</p>
        <span>픽업예정일과 시간에 맞춰 상품을 수령해주세요.</span>
      </ProductCompleteText>
      <ProductCompleteinfo>
        {firstItem.productCollect.map((option, index) => (
          <div key={index}>
            <div className="imgWrap">
              <img src={option.productImg} alt="img" onError={onImgError} />
            </div>
            <ul>
              <li>{option.productKorName}</li>
              <li>{option.productEngName}</li>
              <li>
                {(option.sellPrice * option.number).toLocaleString()}원{" "}
                <span>{option.number}개</span>{" "}
              </li>
            </ul>
          </div>
        ))}
      </ProductCompleteinfo>
      <ProductCompleteBox>
        {firstItem && (
          <div>
            <ul>
              <li>픽업 지점: {firstItem.selectCollect.pickUpSpot.title}</li>
              <li>
                픽업 시간: {firstItem.selectCollect.pickUpData.substring(0, 2)}
                월 {firstItem.selectCollect.pickUpData.substring(3, 6)}일{" "}
                {firstItem.selectCollect.pickUpTime}
              </li>
            </ul>
            <p>총 결제금액 : {firstItem.totalPrice.toLocaleString()}원</p>
          </div>
        )}
        <ButtonOk>주문내역 확인 하기</ButtonOk>
        <ButtonCancel>메인보기</ButtonCancel>
      </ProductCompleteBox>
    </ProductCompleteMain>
  );
};

export default ProductComplete;
