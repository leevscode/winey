import styled from "@emotion/styled";
import {
  Gradation,
  Maincolor,
  WidthPd,
  opacity,
} from "../../style/GlobalStyle";

// 관리자페이지 색상 설정
export const AdminColor = {
  headColorA: "#774954",
  bodyColorA: "#f7f1f3",
};

// 관리자 헤더
export const LayoutHeaderWrap = styled.div`
  width: 100%;
  height: 100%;
  & div {
    display: flex;
    align-items: center;
    height: 100%;
    a {
      display: inline-block;
      h2 {
        font-size: 2rem;
        line-height: 1;
        color: ${Maincolor.beige};
        img {
          width: 85px;
          height: auto;
        }
      }
    }
  }
`;
// 관리자 사이드메뉴
export const LayoutSideMenuWrap = styled.div`
  height: 100%;
  .ant-menu {
    height: 100%;
  }
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
  /* min-height: 81rem; */
  // 브라우저 높이에서 헤더, 푸터의 높이값을 뺌
  height: calc(100vh - 65px - 49px);
  background: ${Maincolor.beige};
  .ant-layout-content {
    padding: ${WidthPd.padding};
    height: 100%;
    .breadcrumb-wrap {
      min-height: 2.4rem;
      margin: 10px 0;
      .ant-breadcrumb {
        .ant-breadcrumb-link {
          font-size: 1.3rem;
        }
      }
    }

    .contents-box {
      position: absolute;
      right: 0;
      bottom: 0;
      width: calc(100% - 200px);
      height: calc(100% - 60px);
      padding: 1%;
      & > div {
        height: 100%;
      }
    }
  }
  .layout-box {
    position: relative;
    background: ${Maincolor.white};
    border: 0.05rem solid ${opacity.white};
    padding: 1%;
    padding-left: 0;
    border-radius: 20px;
    height: 92%;
    overflow: hidden;
    isolation: isolate;
    .pg-title {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 1%;
      margin: 15px 0;
      width: calc(100% - 200px);
      h2 {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 700;
        position: relative;
        &::before {
          content: "";
          display: inline-block;
          width: 0.65rem;
          height: 0.65rem;
          background: ${Maincolor.black};
          opacity: 0.35;
          vertical-align: 0.4rem;
          margin-right: 10px;
          transform: rotate(45deg);
        }
      }
    }
    .ant-layout {
      display: block;
      background: transparent;
      height: 100%;
      overflow: auto;
      /* 스크롤바 커스텀 */
      &::-webkit-scrollbar {
        display: block;
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: ${opacity.gray};
        border-radius: 10px;
      }
      .ant-layout-sider {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
      }
    }
  }
`;
// 페이지네이션
// export const PaginationWrap = styled.div`
//   margin: 0 auto;
// `;

// 관리자 푸터
export const LayoutFooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  border-top: 0.05rem solid ${opacity.white};
  background: ${Maincolor.beige};
  .ant-layout-footer {
    font-size: 1.3rem;
    background: transparent;
    color: ${opacity.grayDeep};
    text-align: center;
    padding: 0;
    b {
      font-size: 1.2em;
      font-weight: 700;
    }
  }
`;
// 테이블 감싸는 div
export const TableWrap = styled.div`
  overflow: auto;
  height: 100%;
  padding-bottom: 10px;
  /* 스크롤바 커스텀 */
  &::-webkit-scrollbar {
    display: block;
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${opacity.gray};
    border-radius: 10px;
  }
`;

// 관리자 리스트 테이블 스타일 설정
export const LayoutTable = styled.table`
  width: 100%;
  min-width: 1000px;
  background: ${Maincolor.white};
  border: 0.05rem solid ${opacity.white};
  th,
  td {
    padding: 15px 5px;
    border-right: 0.05rem solid ${opacity.white};
    vertical-align: middle;
    &:last-of-type {
      border-right: 0;
    }
  }
  thead {
    tr {
      background: ${AdminColor.headColorA};
      th {
        border-bottom: 0.2rem solid ${opacity.white};
        font-weight: 700;
        color: ${Maincolor.white};
        min-width: 100px;
      }
    }
  }
  tbody {
    tr {
      transition: 0.1s ease-in-out background;
      &:hover {
        background: ${AdminColor.bodyColorA};
      }
      td {
        border-bottom: 0.05rem solid ${opacity.white};
      }
    }
  }
`;
