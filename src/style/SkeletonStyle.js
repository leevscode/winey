/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
// import { keyframes } from "@emotion/react";
import { Maincolor } from "./GlobalStyle";
import { keyframes } from "@emotion/react";

export const LoadingProductListItem = styled.div`
  width: calc(100% / 3 - 14px);
  div {
    position: relative;
    background: ${Maincolor.grayMedium};
    border-radius: 3px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 50px;
      height: 100%;
      background: pink;
    }
  }
  .img {
    padding-top: 135%;
  }
  .title {
    margin: 15px 0 10px;
    min-height: 3.22rem;
  }
  .price {
    min-height: 2rem;
  }
  .sale {
    min-height: 1.4rem;
    margin-top: 5px;
  }
`;
export const floating = keyframes`
    from{
      background: red;
    }
    to{
      background: black;
    }
`;
