import React, { useEffect, useState } from "react";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import {
  ProductCompleteBox,
  ProductCompleteMain,
  ProductCompleteText,
  ProductCompleteinfo,
} from "../../style/ProductCompleteStyle";
import { Link, useLocation } from "react-router-dom";
import NoImage from "../../assets/no_image.jpg";

const ProductComplete = () => {
  // const [isLoading, setIsLoading] = useState(true); // 로딩 상태

  // const { state } = useLocation();
  const location = useLocation();
  const state = [location.state];
  console.log("state", state);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  return (
    <ProductCompleteMain>
      <ProductCompleteText>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon_sell_complete.svg`}
          alt="complete"
        />
        <p>결제가 완료되었습니다!</p>
        <span>
          픽업예정일과 시간에 맞춰 상품을 수령해주세요. <br />
          신분증을 소지하고 방문해 주시기 바랍니다.
        </span>
      </ProductCompleteText>
      {state && (
        <ProductCompleteinfo>
          {state.map((option, index) => (
            <div key={index}>
              <div className="imgWrap">
                <img
                  src={`/img/${option.productCollect.wineDetailVo.pic}`}
                  alt="img"
                  onError={onImgError}
                />
              </div>
              <ul>
                <li>{option.productCollect.wineDetailVo.nmKor}</li>
                <li>{option.productCollect.wineDetailVo.nmEng}</li>
                <li>
                  {(
                    (option.productCollect.selSale === null
                      ? parseInt(option.productCollect.wineDetailVo.price)
                      : parseInt(option.productCollect.selSale.salePrice)) *
                    option.editQuantity.quantity
                  ).toLocaleString()}
                  원 <span>{option.editQuantity.quantity}개</span>{" "}
                </li>
              </ul>
            </div>
          ))}
        </ProductCompleteinfo>
      )}
      <ProductCompleteBox>
        <div>
          {state && (
            <div>
              <ul>
                <li>
                  <span>픽업 지점</span>
                  <span>이마트 {state[0].selectCollect.pickUpSpot.nm}</span>
                </li>
                <li>
                  <span>픽업 주소</span>{" "}
                  <span>{state[0].selectCollect.pickUpSpot.address}</span>
                </li>
                <li>
                  <span>픽업 날짜</span>
                  <span>
                    {state[0].selectCollect.changeDate.substring(0, 16)}
                  </span>
                </li>
                <li>
                  <span>총 결제금액</span>{" "}
                  <span>{state[0].totalPrice.toLocaleString()}원</span>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="confirmButton">
          <Link to="/selllist">
            <ButtonOk>주문내역 확인 하기</ButtonOk>
          </Link>
          <Link to="/main">
            <ButtonCancel>메인보기</ButtonCancel>
          </Link>
        </div>
      </ProductCompleteBox>
    </ProductCompleteMain>
  );
};

export default ProductComplete;
