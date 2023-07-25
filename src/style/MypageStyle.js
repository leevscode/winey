/*
    작업자 : 김아영
    노션 : https://www.notion.so/kimaydev
    깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const MypageWrap = styled.div`
  .user-title {
    padding: ${WidthPd.padding};
    padding-bottom: 20px;
    h2 {
      font-size: 2rem;
      font-weight: 700;
    }
  }
  ul {
    & > li {
      border-bottom: 0.05rem solid ${opacity.white};
      &:last-of-type {
        border-bottom: 0;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${WidthPd.padding};
        font-size: 1.5rem;
        padding-top: 20px;
        padding-bottom: 20px;
        i {
          color: ${opacity.gray};
          font-size: 0.95em;
        }
      }
      button {
        padding: ${WidthPd.padding};
        font-size: 1.5rem;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }
`;
