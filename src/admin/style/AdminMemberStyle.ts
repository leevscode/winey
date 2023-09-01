import styled from "@emotion/styled";
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
export const MemberDetailUpperWrap = styled.div`
  & ul {
    margin-bottom: 2rem;
    li {
      b {
        font-weight: 700;
      }
      font-size: 1.6rem;
      line-height: 2rem;
    }
  }
`;

export const MemberDetailWrap = styled.div`
  /* margin-top: 3rem; */
  & .noItem {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 7rem;
    text-align: center;
    color: ${Maincolor.grayBold};
  }
`;

// 정렬 컴포넌트
export const SortSelectWrap = styled.div`
margin: 1rem 0;
`