/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/

import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

// 주문내역 리스트 감싸는 div
export const SellListBox = styled.div`
  padding-bottom: 140px;
`;

export const OrdercancelBtn = styled.div`
  display: flex;
  /* margin: 0 6px; */
  margin: ${WidthPd.padding};
  margin-top: 2rem;
  margin-bottom: 1rem;
  justify-content: flex-end;
  button {
    font-size: 1.2rem;
    color: ${Maincolor.grayBold};
    i {
      font-size: 0.8em;
      vertical-align: 1px;
      margin-left: 10px;
    }
  }
`;

export const NotOrder = styled.div`
  text-align: center;
  font-size: 2rem;
`;

export const SellListProduct = styled.li`
  font-size: 2rem;
  display: inline-block;
  position: absolute;
  margin-top: -30px;
  flex-direction: column;
  color: black !important;
`;

export const PickUpButton = styled.button`
  display: block;
  background: ${Maincolor.redBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.redBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
  &:disabled {
    background-color: ${Maincolor.grayMedium};
    color: ${Maincolor.white};
    border: ${Maincolor.grayMedium};
    cursor: not-allowed;
  }
`;

export const SellListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 10px;
  color: #b8abab;
  margin: ${WidthPd.padding};
  margin-bottom: 2rem;
`;

export const SellListReady = styled.div`
  display: flex;
  background: ${Maincolor.white};
  text-align: center;
  justify-content: center;
  /* padding: 15px; */
  color: ${Maincolor.black};
  border: 0.05rem solid ${Maincolor.grayMedium};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  border-radius: 0.5rem;
`;

export const ReviewOk = styled.div`
  display: flex;
  background: ${Maincolor.white};
  text-align: center;
  justify-content: center;
  padding: 15px;
  color: ${Maincolor.black};
  border: 0.05rem solid ${Maincolor.grayMedium};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 5rem;
  border-radius: 0.5rem;
`;
