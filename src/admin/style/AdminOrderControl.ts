/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/

import styled from "@emotion/styled";
import {
  Gradation,
  Maincolor,
  WidthPd,
  opacity,
} from "../../style/GlobalStyle";
import { AdminColor } from "./AdminLayoutStyle";

// 테이블 감싸는 div
export const OrderTableWrap = styled.div`
  .order-status-wrap {
    .ant-select-selector {
      width: 9rem;
      align-items: center;
      padding-inline-end: 10px;
      .ant-select-selection-search {
        /* background: pink; */
      }
    }
  }
`;

export const OrderTable = styled.table`
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
    tr {
      background: ${AdminColor.headColorA};
      th {
        border-bottom: 0.2rem solid ${opacity.white};
        font-weight: 700;
        color: ${Maincolor.white};
        min-width: 100px;
      }
    }
  }
  tbody {
    tr {
      transition: 0.1s ease-in-out background;
      &:hover {
        background: ${AdminColor.bodyColorA};
      }
      td {
        border-bottom: 0.05rem solid ${opacity.white};
      }
      button {
        font-size: 1.5rem;
      }
      button: {
        align-items: center;
      }
    }
  }
`;
