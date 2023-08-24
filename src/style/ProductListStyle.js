/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Gradation, Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const ProductListWrap = styled.div`
  margin-top: -2rem;
`;
const gradientStyle = props => {
  // 상품 리스트의 params에 따라 타이틀 배경 색상 결정
  if (props.listPathName === "red") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.wineA} 35%,
        ${Gradation.wineC} 100%
      );
      color: ${Maincolor.white};
    `;
  } else if (props.listPathName === "white") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.whiteA} 35%,
        ${Gradation.whiteB} 100%
      );
      color: ${Maincolor.black};
    `;
  } else if (props.listPathName === "spakling") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.sparkA} 35%,
        ${Gradation.sparkB} 100%
      );
      color: ${Maincolor.black};
    `;
  } else if (props.listPathName === "etc") {
    return css`
      background: linear-gradient(
        90deg,
        ${Gradation.etcA} 35%,
        ${Gradation.etcB} 100%
      );
      color: ${Maincolor.white};
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
// 상품 메인 추천별 상품리스트
export const ProductMainItemWrap = styled.div`
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

// 상품리스트 퀵메뉴 버튼
export const QuickProductListWrap = styled.div`
  position: relative;
  padding: ${WidthPd.padding};
  border-bottom: 0.05rem solid ${opacity.white};
  margin-left: -12px;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: block;
    width: 30px;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 45%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .swiper-slide {
    width: auto;
    a {
      position: relative;
      display: block;
      font-size: 1.4rem;
      text-align: center;
      color: ${Maincolor.grayBold};
      padding: 15px 20px;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
      }
      &.active {
        color: ${Maincolor.redDeep};
        font-weight: 700;
        &::after {
          background: ${Maincolor.redDeep};
        }
      }
    }
  }
`;
