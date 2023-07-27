/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

export const LoginWrap = styled.div`
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const LogoDiv = styled.div`
  width: 15rem;
  margin: 0 auto;
  padding: 5rem 0;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
  & form > div {
    margin-bottom: 1rem;
    .ant-input-affix-wrapper-lg {
      font-size: 1.4rem;
      padding: 1.3rem;
      & svg {
        margin: 0 0.6rem;
      }
    }
  }
  & div > button {
    margin-top: 2rem;
  }
`;
