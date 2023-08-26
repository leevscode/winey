import styled from "@emotion/styled";
import {
  Gradation,
  Maincolor,
  WidthPd,
  opacity,
} from "../../style/GlobalStyle";
import { AdminColor } from "./AdminLayoutStyle";

// 테이블 감싸는 div
export const OrderSubTableWrap = styled.div`
  /* background: pink; */
  overflow: auto;
  padding-bottom: 10px;
  /* 스크롤바 커스텀 */
  &::-webkit-scrollbar {
    display: block;
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${opacity.gray};
    border-radius: 10px;
  }
`;

export const OrderSubTable = styled.table`
  width: 100%;
  min-width: 1000px;
  background: ${Maincolor.white};
  border: 0.05rem solid ${opacity.white};
  text-align: center;
  th,
  td {
    padding: 15px 5px;
    border-right: 0.05rem solid ${opacity.white};
    vertical-align: middle;
    &:last-of-type {
      border-right: 0;
    }
  }
  thead {
    tr :nth-of-type(1) {
      background: ${AdminColor.headColorA};
      color: ${Maincolor.white};
      th {
        border-bottom: 0.2rem solid ${opacity.white};
        font-weight: 700;
        min-width: 100px;
      }
    }
  }
  tr :nth-of-type(3) {
    background: ${AdminColor.headColorA};
    color: ${Maincolor.white};
  }
  tbody {
    tr :nth-of-type(1) {
      transition: 0.1s ease-in-out background;
      /* &:hover {
        background: ${AdminColor.bodyColorA};
      } */
      background: ${AdminColor.headColorA};
      color: ${Maincolor.white};
      td {
        border-bottom: 0.05rem solid ${opacity.white};
      }
    }
  }
  button > td {
    padding: 15px 5px;
    border-right: 0.05rem solid ${opacity.white};
    vertical-align: middle;
  }
`;
