/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { v4 } from "uuid";
import { DetailInfoWrap } from "../../style/ProductDetailStyle";

const WindeDetailInfo = ({ productDetail }) => {
  // 당도 데이터 보관 state
  const sweety = productDetail.wineDetailVo?.sweety;
  const acidity = productDetail.wineDetailVo?.acidity;
  const body = productDetail.wineDetailVo?.body;
  // console.log("당도", sweety);
  // console.log("산도", acidity);
  // console.log("바디", body);
  // console.log("uuid", v4());
  return (
    <DetailInfoWrap>
      {productDetail.wineDetailVo && (
        <>
          <ul>
            <li className="title component-title">
              <i></i>당도
            </li>
            <li className="bar">
              <ol className="active_bar">
                {sweety !== undefined &&
                  Array(sweety)
                    .fill()
                    .map(index => <li key={v4()}></li>)}
              </ol>
              <ol className="default_bar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </li>
          </ul>
          <ul>
            <li className="title component-title">
              <i></i>산도
            </li>
            <li className="bar">
              <ol className="active_bar">
                {acidity !== undefined &&
                  Array(acidity)
                    .fill()
                    .map(index => <li key={v4()}></li>)}
              </ol>
              <ol className="default_bar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </li>
          </ul>
          <ul>
            <li className="title component-title">
              <i></i>바디
            </li>
            <li className="bar">
              <ol className="active_bar">
                {body !== undefined &&
                  Array(body)
                    .fill()
                    .map(index => <li key={v4()}></li>)}
              </ol>
              <ol className="default_bar">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
            </li>
          </ul>
        </>
      )}
    </DetailInfoWrap>
  );
};

export default WindeDetailInfo;
