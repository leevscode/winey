import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

export const JoinWrap = styled.div`
  margin-top: 3rem;
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
  & form span {
    position: relative;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.7rem;
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
  & p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
    margin-left: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
export const ButtonConfirm = styled.button`
  display: block;
  background: ${Maincolor.grayBold};
  color: ${Maincolor.white};
  border: 0.05rem solid ${Maincolor.grayBold};
  font-size: 1.6rem;
  font-weight: 500;
  width: 100%;
  height: 4rem;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;

export const ConfirmArray = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;

    & input {
      margin: 0 auto;
      width: 41rem;
    }
  }
  & button {
    margin: 0 auto;
    width: 15rem;
    margin-left: 1rem;
  }
`;
export const RegionSelectWrap = styled.div`
  & div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 1px;
    & label {
      width: 7rem;
      padding: 1rem;
      margin: 0.85rem;
      border: 0.1rem solid ${Maincolor.grayMedium};
      border-radius: 0.5rem;
      &::before {
        display: none;
      }
      & span {
        position: absolute;
        top: 1rem;
        left: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }
`;

export const TermsWarp = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  & span {
    position: relative;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.7rem;
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
  & div {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    & span {
      position: relative;
      font-size: 1.4rem;
      color: ${Maincolor.redDeep};
      line-height: 1.7rem;
      cursor: pointer;
      & svg {
        position: absolute;
        top: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
      }
    }
    & label {
      font-size: 1rem;
      & span {
        font-size: 1.4rem;
        color: #000000;
        font-weight: 500;
        line-height: 1.7rem;
      }
    }
  }
`;
