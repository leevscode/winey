/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const OpenSourceWrap = styled.div`
  padding-bottom: 12rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    padding: ${WidthPd.padding};
    padding-top: 15px;
    padding-bottom: 15px;
    background: ${Maincolor.beige};
  }
  ul {
    & > li {
      & > ol {
        & > li {
          border-bottom: 0.05rem solid ${opacity.white};
          a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.5rem;
            padding: ${WidthPd.padding};
            padding-top: 15px;
            padding-bottom: 15px;
            i {
              color: ${opacity.gray};
              font-size: 0.95em;
            }
          }
          &:last-of-type {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;
