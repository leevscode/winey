/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { css } from "@emotion/react";

export const ProductListWrap = styled.div`
  margin-top: -2rem;
`;
const gradientStyle = props => {
  // 상품 리스트의 params에 따라 타이틀 배경 색상 결정
  if (props.ilist === "0") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.wineA} 35%,
        ${Gradation.wineC} 100%
      );
    `;
  } else if (props.ilist === "1") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.whiteA} 35%,
        ${Gradation.whiteB} 100%
      );
    `;
  } else if (props.ilist === "2") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.sparkA} 35%,
        ${Gradation.sparkB} 100%
      );
    `;
  } else if (props.ilist === "3") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.etcA} 35%,
        ${Gradation.etcB} 100%
      );
    `;
  }
};
// 상품리스트 타이틀
export const ProductListTitleWrap = styled.div`
  display: flex;
  align-items: center;
  height: 15rem;
  ${gradientStyle};
  padding: ${WidthPd.padding};
  padding-bottom: 5px;
  h2 {
    font-size: 3rem;
    font-weight: 900;
    color: ${Maincolor.white};
    span {
      display: block;
      font-size: 0.5em;
      font-weight: 400;
      margin-bottom: 3px;
    }
  }
`;
// 상품리스트 목록
export const ProductListItemWrap = styled.div`
  padding: ${WidthPd.padding};
  padding-top: ${WidthPd.paddingTopSmall};
  padding-bottom: 100px;
  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.05rem solid ${opacity.grayLight};
    padding-bottom: 2px;
    margin-bottom: 15px;
    li {
      font-size: 1.2rem;
      &:first-of-type {
      }
      &:last-of-type {
      }
    }
    /* ant 셀렉트 컴포넌트 스타일링 */
    .ant-select {
      margin-right: -4px;
      .ant-select-selector {
        box-shadow: none !important;
      }
      .ant-select-arrow {
        font-size: 0.9rem;
      }
    }
  }
  & > div {
    display: flex;
    flex-wrap: wrap;
    margin-left: -7px;
    margin-right: -7px;
  }
`;
