import styled from "@emotion/styled";
import { Maincolor } from "./GlobalStyle";

export const WelcomeWrap = styled.div`
  height: 40rem;
  background: ${Maincolor.grayMedium};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & svg {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
  & p {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
`;
export const LetsChoice = styled.div`
  display: block;
  & svg {
    text-align: center;
    font-size: 1rem;
    color: ${Maincolor.redBold};
  }
`;
