import { styled } from "styled-components";
import { Maincolor } from "../../style/GlobalStyle";

export const MemberWrap = styled.div`
  margin: 0 auto;
  & div {
    & td {
      text-align: center;
    }
  }
  .detailBt {
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    background: ${Maincolor.grayDeep};
    color: ${Maincolor.beige};
    border-radius: 0.6rem;
    transition: 0.2s ease-in-out;
    &:hover {
      background: ${Maincolor.redDeep};
    }
  }
  .memberOutBt {
    width: 4rem;
    padding: 0.5rem;
    font-size: 1.4rem;
    background: ${Maincolor.redDeep};
    color: ${Maincolor.beige};
    border-radius: 0.6rem;
    transition: 0.2s ease-in-out;
    &:hover {
      background: ${Maincolor.grayBold};
    }
  }
`;
