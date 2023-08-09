/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { DetailInfoWrap } from "../../style/ProductDetailStyle";

const WindeDetailInfo = ({ productDetail }) => {
  // 당도 데이터 보관 state
  const [sweety, setSweety] = useState();
  // 산도 데이터 보관 state
  const [acidity, setAcidity] = useState();
  // 바디 데이터 보관 state
  const [body, setBody] = useState();
  // 당도
  const getSweety = async () => {
    await setSweety(productDetail.wineDetailVo?.sweety);
  };
  // 산도
  const getAcidity = async () => {
    await setAcidity(productDetail.wineDetailVo?.acidity);
  };
  // 바디
  const getBody = async () => {
    await setBody(productDetail.wineDetailVo?.body);
  };
  useEffect(() => {
    getSweety();
    getAcidity();
    getBody();
  }, [productDetail]);
  // console.log("당도", sweety);
  // console.log("산도", acidity);
  // console.log("바디", body);
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
                {Array(sweety)
                  .fill()
                  .map(index => (
                    <>
                      <li key={index}></li>
                    </>
                  ))}
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
                {Array(acidity)
                  .fill()
                  .map(index => (
                    <>
                      <li key={index}></li>
                    </>
                  ))}
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
                {Array(body)
                  .fill()
                  .map(index => (
                    <>
                      <li key={index}></li>
                    </>
                  ))}
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
