/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import NoImage from "../../assets/no_image.jpg";
import { InfoWrap } from "../../style/ProductDetailStyle";

const WineInfo = ({ productDetail }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  return (
    <InfoWrap>
      {productDetail.wineDetailVo && (
        <>
          <div className="img">
            {/* 상품 이미지 */}
            <img
              src={`/img/${productDetail.wineDetailVo.pic}`}
              alt={productDetail.wineDetailVo.nmKor}
              onError={onImgError}
            />
          </div>
          <div className="txt">
            <div className="title-wrap">
              <ul>
                {/* 와인 종류 */}
                <li>{productDetail.wineDetailVo.categoryNm}&nbsp;와인</li>
                {/* 원산지 */}
                <li>{productDetail.wineDetailVo.countryNm}</li>
              </ul>
              {/* 상품명 */}
              <h2>
                {productDetail.wineDetailVo.nmKor}
                <span>{productDetail.wineDetailVo.nmEng}</span>
              </h2>
            </div>
            <div className="price-wrap">
              <div className="price">
                <ul>
                  <li className="sale-price">
                    {/* 판매가 */}
                    <span>
                      {productDetail.selSale === null
                        ? productDetail.wineDetailVo.price.toLocaleString()
                        : productDetail.selSale.salePrice.toLocaleString()}
                    </span>
                    원
                  </li>
                  {productDetail.selSale && (
                    <>
                      <li className="default-price">
                        {/* 원가 */}
                        {productDetail.wineDetailVo.price.toLocaleString()}원
                      </li>
                    </>
                  )}
                </ul>
              </div>
              {/* 할인율 */}
              {productDetail.selSale && (
                <>
                  <div className="percent">{productDetail.selSale?.sale}%</div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </InfoWrap>
  );
};

export default WineInfo;
