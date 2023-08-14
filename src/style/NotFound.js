/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const NotFoundWrap = styled.div`
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  .img {
    font-size: 10rem;
    color: ${Maincolor.redMedium};
  }
  .txt {
    font-size: 1.8rem;
    margin-top: 20px;
    p {
      font-size: 2.5em;
      font-weight: 900;
      color: ${Maincolor.redDeep};
      margin-bottom: 25px;
      span {
        display: block;
        font-size: 0.55em;
        font-weight: 500;
      }
    }
  }
`;
