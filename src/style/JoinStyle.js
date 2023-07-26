/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { css } from "@emotion/react";

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
    & > label {
      width: 7rem;
      padding: 1rem;
      margin: 0.85rem;
      border: 0.1rem solid ${Maincolor.grayMedium};
      border-radius: 0.5rem;
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
    .ant-radio-button-wrapper::before {
      width: 0px;
    }
  }
`;

export const TermsWarp = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  margin-bottom: 7rem;
  & label > span {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.7rem;
  }
  & > span {
    position: relative;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.7rem;
    margin-bottom: 1rem;
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
`;

export const TermsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.3rem 1rem 0.3rem 1rem;
  & label span {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.7rem;
    & strong {
      color: ${opacity.gray};
    }
  }
  // 약관보기
  & div {
    display: flex;
    justify-content: space-between;
    & > span {
      position: relative;
      display: inline-block;
      font-size: 1.3rem;
      font-weight: 700;
      color: ${Maincolor.redDeep};
      line-height: 1.7rem;
      cursor: pointer;
      margin-right: 1rem;

      & svg {
        position: absolute;
        top: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
      }
    }
  }
`;
