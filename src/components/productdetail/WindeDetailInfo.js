/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { DetailInfoWrap } from "../../style/ProductDetailStyle";

const WindeDetailInfo = () => {
  return (
    <DetailInfoWrap>
      <ul>
        <li className="title component-title">
          <i></i>당도
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
    </DetailInfoWrap>
  );
};

export default WindeDetailInfo;
