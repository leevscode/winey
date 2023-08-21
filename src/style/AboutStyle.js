import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const AboutWrap = styled.div`
  padding: ${WidthPd.padding};
  margin-bottom: 7rem;

  & > h3 {
    font-size: 1.6rem;
    text-align: center;
    width: 10rem;
    background: ${opacity.grayDeep};
    color: ${Maincolor.white};
    margin: 0 auto;
    padding: 0.2rem;
  }
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.1rem solid ${Maincolor.grayMedium};
    margin: 1.5rem 0;
    & > img {
      width: 12rem;
      margin: 0.5rem 1rem;
    }
    & > ul {
      margin: 1.2rem;
      & > li {
        font-size: 1.3rem;
        line-height: 1.4rem;
        margin-top: 0.4rem;
        & > span {
          font-weight: 800;
        }
        // 링크
        & img {
          border: 0.1rem solid ${Maincolor.grayMedium};
          width: 8rem;
          margin: 0.5rem 1rem 0 0;
        }
      }
    }
  }
`;
