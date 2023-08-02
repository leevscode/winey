/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode
    깃허브 : https://github.com/leevscode
*/

import styled from "@emotion/styled";

export const Maincolor = {
  beige: "#fcf8f1",
  white: "#fff",
  black: "#3c2323",
  redDeep: "#690a21",
  redBold: "#7c1d34",
  redMedium: "#9a6a6a",
  grayBold: "#837575",
  grayMedium: "#e7e4e4",
};

export const OrdercancelBtn = styled.div`
  display: flex;
  margin: 0 6px;
  justify-content: flex-end;
  button {
    font-size: 1.5rem;
  }
`;

export const NotOrder = styled.div`
  text-align: center;
  font-size: 2rem;
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
    background-color: #bdc3c7;
    color: #7f8c8d;
    border: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const SellListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  gap: 10px;
  margin: 6px;
`;