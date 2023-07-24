import styled from "@emotion/styled";
import { Maincolor, opacity } from "./GlobalStyle";

export const LayoutWrap = styled.div`
  background: ${Maincolor.white};
  max-width: 560px;
  margin: 0 auto;
  min-height: 100vh;
  border-left: 0.05rem solid ${opacity.white};
  border-right: 0.05rem solid ${opacity.white};
`;
