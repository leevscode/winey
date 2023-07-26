/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, opacity } from "./GlobalStyle";

export const LayoutWrap = styled.div`
  position: relative;
  /* overflow: hidden; */
  background: ${Maincolor.white};
  max-width: 560px;
  margin: 0 auto;
  border-left: 0.05rem solid ${opacity.white};
  border-right: 0.05rem solid ${opacity.white};
  height: 100vh;
  overflow-y: scroll;
`;
