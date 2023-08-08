/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useRef, useState } from "react";
import { DetailInfoWrap } from "../../style/ProductDetailStyle";

const WindeDetailInfo = ({ productDetail }) => {
  const barOl = useRef();
  const barLi = barOl.current?.children;
  // 당도 보관 state
  const [sweety, setSweety] = useState();
  const getSweety = async () => {
    console.log("==========시작===========");
    await setSweety(productDetail.wineDetailVo?.sweety);
    console.log("==========끝===========");
  };
  useEffect(() => {
    getSweety();
    // if (sweety === 1) {
    //   console.log("당도 1이에요");
    // } else if (sweety === 2) {
    //   console.log("당도 2에요");
    // } else if (sweety === 3) {
    //   console.log("당도 3이에요");
    // } else if (sweety === 4) {
    //   console.log("당도 4에요");
    // } else if (sweety === 5) {
    //   console.log("당도 5에요");
    // }
  }, [productDetail]);
  console.log("li태그", barLi);
  // console.log("li태그배열", liArray());
  console.log("당도", sweety);
  // const test = barLi[0];
  // console.log("li 선택해", test);
  return (
    <DetailInfoWrap>
      {productDetail.wineDetailVo && (
        <>
          <ul>
            <li className="title component-title">
              <i></i>당도
            </li>
            <li className="bar">
              {/* <ol ref={barOl}>{barLi}</ol> */}
              <ol ref={barOl}>
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
              <ol>
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
              <ol>
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
