/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const LoadingProductListItem = styled.div`
  /* width: calc(100% / 3 - 14px); */
  div {
    position: relative;
    background: #f5f1eb;
    overflow: hidden;
    border-radius: 3px;
    box-shadow: 0px 0 20px 0 #f2eade inset !important;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      background: url(/images/skeleton_grade.png) center;
      animation: skeleton 1.3s infinite ease-in-out;
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
