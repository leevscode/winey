import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

export const JoinWrap = styled.div`
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const ButtonConfirm = styled.button`
  display: block;
  background: ${Maincolor.grayBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.grayBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 40%;
  height: 4rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;

export const RegionSelectWrap = styled.div`
`

export const RegionSelect = styled.button`
  background: ${Maincolor.redBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.redBold};
  font-size: 1.4rem;
  font-weight: 500;
  width: 6rem;
  height: 3rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  padding
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;
