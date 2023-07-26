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
  background: ${Maincolor.grayMedium};
  width: 200px;
  height: 70px;
  margin: auto;
  margin-top: 120px;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  form > div {
    margin-bottom: 14px;
  }
  & div > button {
    margin-top: 30px;
  }
`;
