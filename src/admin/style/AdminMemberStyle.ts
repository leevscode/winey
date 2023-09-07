/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, opacity } from "../../style/GlobalStyle";

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
  margin-bottom: 2rem;
`;

export const MemberDetailWrap = styled.div`
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
  display: sticky;
  top: 0;
  .table-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
    font-size: 1.25rem;
    .total-count {
      color: ${Maincolor.grayDeep};
      span {
        font-size: 1.25em;
        font-weight: 700;
        color: ${Gradation.wineE};
      }
    }
    .searchSort {
      & > div {
        margin-left: 1rem;
      }
    }
    a {
      font-size: 1.4rem;
      width: 100px;
      padding: 10px 0;
      border-radius: 5px;
      text-align: center;
      background: ${Gradation.wineE};
      color: ${Maincolor.white};
      border: 0.05rem solid ${opacity.grayLight};
    }
    & > div {
      margin: 0;
      .ant-select {
        width: 180px;
      }
    }
  }
`;
// 멤버 검색 form
