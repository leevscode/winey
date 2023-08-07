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

export const SellListProduct = styled.li`
  display: flex;
  flex-direction: column;
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
    background-color: #e7e4e4;
    color: #ffffff;
    border: #e7e4e4;
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

export const SellListReady = styled.div`
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
`

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


