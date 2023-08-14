/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, opacity } from "./GlobalStyle";

export const LayoutWrap = styled.div`
  position: relative;
  background: ${Maincolor.white};
  max-width: 560px;
  min-height: 100vh;
  margin: 0 auto;
  border-left: 0.05rem solid ${opacity.white};
  border-right: 0.05rem solid ${opacity.white};
  overflow: hidden;
`;
