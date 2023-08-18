/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const MypageWrap = styled.div`
  padding-bottom: 120px;
  .user-title {
    padding: ${WidthPd.padding};
    padding-bottom: 20px;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      & > p {
        font-size: 0.7em;
        font-weight: 500;
        margin-bottom: 5px;
      }
      & > div {
        img {
          display: block;
          width: 100px;
          height: auto;
          margin: 10px auto 15px;
        }
        p {
          font-size: 1.6rem;
          line-height: 1.5;
          text-align: center;
          margin-bottom: 25px;
        }
      }
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
        width: 100%;
        text-align: left;
        padding-top: 20px;
        padding-bottom: 20px;
      }
    }
  }
`;
