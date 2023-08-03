/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const JoinWrap = styled.div`
  margin-top: 3rem;
  margin-bottom: 7rem;
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
  & form span {
    position: relative;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${Maincolor.black};
    & b {
      position: absolute;
      top: -0.2rem;
      margin-left: 0.2rem;
      font-size: 1.4rem;
      color: red;
    }
  }
  & p {
    color: ${Maincolor.black};
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.5rem;
  }
  div > .ant-input-lg {
    font-size: 1.4rem;
    padding: 1rem;
  }
  .ant-input-password {
    font-size: 1.4rem;
    padding: 1rem;
  }
`;

// 중복확인 , 본인인증 btn
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
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  & div {
    & input {
      width: 40rem;
    }
  }
  & button {
    margin: 0 auto;
    width: 15rem;
    margin-left: 1rem;
  }
`;

// 지역선택
export const RegionSelectWrap = styled.div`
  & div {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.3rem;
    & > label {
      position: relative;
      width: 6.5rem;
      padding: 1.3rem;
      margin: 0.4rem;
      border: 0.1rem solid ${Maincolor.grayMedium};
      border-radius: 0.8rem;
      & span {
        position: absolute;
        top: 1rem;
        left: 1.9rem;
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
    // 버튼 클릭 시 스타일 바꾸기
    & .ant-radio-button-wrapper-checked {
      background: ${Maincolor.redBold};
      transition: 0.2s ease-in-out;
      & > span {
        color: ${Maincolor.white};
      }
    }
    // ant button 좌측 선 없애기
    & .ant-radio-button-wrapper::before {
      width: 0;
    }
  }
`;

// 이용약관
export const TermsWarp = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  margin-bottom: 3rem;
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
    display: block;
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
      margin-left: 20rem;

      & svg {
        position: absolute;
        top: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
      }
    }
  }
`;

export const JoinEditBtn = styled.div`
  & button {
    margin: 0.8rem 0;
  }
`;
