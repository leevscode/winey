import styled from "@emotion/styled";
import { Maincolor } from "../../style/GlobalStyle";

// 관리자 헤더
export const LayoutHeaderWrap = styled.div`
  width: 100%;
  & div {
    & h2 {
      color: ${Maincolor.beige};
    }
  }
`;
// 관리자 사이드메뉴
export const LayoutSideMenuWrap = styled.div`
  .ant-menu-sub.ant-menu-inline {
    background: ${Maincolor.beige} !important;
  }
`;
// 관리자 인트로(첫화면)
export const LayoutIntroWrap = styled.div`
  margin-top: 5rem;
  min-width: 90rem;
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    & li {
      text-align: center;
      margin: 0 1rem;
      padding: 2rem;
      border: 1rem solid ${Maincolor.grayMedium};
      border-radius: 2rem;
      font-size: 10rem;
      color: ${Maincolor.black};
      & > div {
        margin-top: 4rem;
        padding: 0.5rem 1rem;
        font-size: 2rem;
        font-weight: 700;
        background: rgba(60, 35, 35, 0.7);
        border-radius: 1rem;
        color: ${Maincolor.beige};
      }
    }
  }
`;
// 관리자 내용
export const LayoutContentWrap = styled.div`
  min-height: 81rem;
  background: ${Maincolor.beige};
`;

// 관리자 푸터
export const LayoutFooterWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
