/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

// 비주얼 슬라이드
export const VisualWrap = styled.div`
  position: relative;
  background: pink;
  height: 60vh;
  border-radius: 0 0 0 100px;
  overflow: hidden;
  isolation: isolate;
  .swiper {
    height: 100%;
    .swiper-pagination {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 48px;
      right: 5%;
      width: 100%;
      height: auto;
      text-align: right;
      max-width: 100px;
      font-size: 0;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 1px;
        background: ${Maincolor.white};
      }
      span {
        position: relative;
        width: auto;
        font-size: 1.4rem;
        color: ${Maincolor.white};
      }
    }
  }
`;
export const VisualText = styled.div`
  position: absolute;
  top: 23%;
  width: 100%;
  height: 0;
  padding: 0 5%;
  & > div {
    color: ${Maincolor.white};
    font-size: 1.8rem;
    p {
      font-size: 2.5em;
      font-weight: 900;
      margin-top: 3px;
    }
    a {
      display: block;
      color: ${Maincolor.white};
      border: 0.05rem solid ${Maincolor.white};
      max-width: 130px;
      text-align: center;
      padding: 10px 0;
      font-size: 1.4rem;
      margin-top: 30px;
      transition: 0.3s ease-in-out;
      &:hover {
        background: ${opacity.whiteB};
      }
      i {
        margin-left: 10px;
        font-size: 1.3rem;
      }
    }
  }
`;
