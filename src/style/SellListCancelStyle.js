/*
    작업자 : 이동은
    노션 : https://leevscode.notion.site/leevscode/leevscode-105a8fbbc74e446fa6e87b0418508fdb
    깃허브 : https://github.com/leevscode
*/
import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const OrderCancelModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 9999;
`;

export const OrderCancelContent = styled.div`
  position: absolute;
  top: 25vh;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  background-color: ${Maincolor.white};
  width: 300px;
  padding: 60px 15px 35px;

  border-radius: 8px;
  p {
    color: ${Maincolor.black};
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
  }
  & > div {
    display: flex;
    & button:first-of-type {
      margin-right: 5px;
    }
  }
`;
