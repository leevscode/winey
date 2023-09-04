import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Maincolor, WidthPd, opacity } from "../../style/GlobalStyle";
import { ItableLayoutColor } from "../interface/LayoutInterface";

// 관리자페이지 색상 설정
export const AdminColor = {
  // 테이블 제목 컬러 설정
  headColorA: "rgba(181, 129, 127, 0.95)",
  headColorB: "rgba(158,152,152,0.95)",
  headColorC: "rgb(149, 182, 184 , 0.95)",
  headColorD: "rgb(250, 235, 213 , 0.95)",
  bodyColorA: "#f7f1f3",
  // 테이블 내용 컬러 설정
  contentsColorA: "rgba(248, 241, 241, 0.5)",
  contentsColorB: "rgba(245, 244, 244, 0.5)",
  contentsColorC: "rgb(228, 239, 240 , 0.5)",
  contentsColorD: "rgb(253, 245, 233 , 0.5)",
  // 테이블 내용 hover 컬러 설정
  contentsColorHoverA: "rgba(248, 241, 241, 1)",
  contentsColorHoverB: "rgba(245, 244, 244, 1)",
  contentsColorHoverC: "rgb(228, 239, 240 , 1)",
  contentsColorHoverD: "rgb(253, 245, 233 , 1)",
  // 버튼 컬러 설정
  pinkA: "#d5adac",
  pinkB: "#c9a1a0",
  grayA: "#c4bfbf",
  grayB: "#b8b3b3",
  blueA: "#afd0d2",
  blueB: "#a2c3c5",
  yellowA: "#f2ddc2",
  yellowB: "#e8cdaf",
};
// 테이블 버튼 스타일 설정
// (button 태그에만 사용 가능합니다!! Link 컴포넌트 사용 X!!)
// 빨간색 버튼
export const DetailBt = styled.button`
  min-width: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background: ${Maincolor.grayDeep};
  color: ${Maincolor.beige};
  border-radius: 0.6rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.redDeep};
  }
`;
// 진회색 버튼
export const MemberOutBt = styled.button`
  min-width: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background: ${Maincolor.redDeep};
  color: ${Maincolor.beige};
  border-radius: 0.6rem;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Maincolor.grayBold};
  }
`;

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
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 50% !important;
  margin: 0 auto;
  & > ul {
    height: 100%;
    & li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: calc(100% / 4 - 1.5%);
      height: 100%;
      text-align: center;
      margin-right: 2%;
      padding: 2rem;
      border: 1rem solid ${Maincolor.grayMedium};
      border-radius: 2rem;
      font-size: 2rem;
      color: ${Maincolor.black};
      &:last-of-type {
        margin-right: 0;
      }
      & > div {
        width: 100%;
        i {
          display: inline-block;
          font-size: 4.5em;
          margin-bottom: 20px;
        }
        a {
          display: block;
          font-weight: 700;
          border-radius: 1rem;
          color: ${Maincolor.black};
          padding: 15px 0;
          transition: 0.15s ease-in-out background;
        }
      }
      &:nth-of-type(1) a {
        background: ${AdminColor.pinkA};
        &:hover {
          background: ${AdminColor.pinkB};
        }
      }
      &:nth-of-type(2) a {
        background: ${AdminColor.yellowA};
        &:hover {
          background: ${AdminColor.yellowB};
        }
      }
      &:nth-of-type(3) a {
        background: ${AdminColor.grayA};
        &:hover {
          background: ${AdminColor.grayB};
        }
      }
      &:nth-of-type(4) a {
        background: ${AdminColor.blueA};
        &:hover {
          background: ${AdminColor.blueB};
        }
      }
    }
  }
`;
// 관리자 내용
export const LayoutContentWrap = styled.div`
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
        overflow: auto;
        height: 100%;
        padding-right: 1%;
        padding-bottom: 1%;
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
  & > div {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
// 관리자페이지 데이터 테이블 스타일 설정 (new) - 헤더색상
const TableLayoutTitleColor = (props: ItableLayoutColor) => {
  // 회원관리
  if (
    props.listPathName === "membercontrol" ||
    props.listPathName === "memberdetail"
  ) {
    return css`
      background: ${AdminColor.headColorA};
    `;
    // 주문관리
  } else if (
    props.listPathName === "ordercontrol" ||
    props.listPathName === "orderdetail"
  ) {
    return css`
      background: ${AdminColor.headColorB};
    `;
    // 상품관리
  } else if (
    props.listPathName === "productlist" ||
    props.listPathName === "productadd" ||
    props.listPathName === "productedit"
  ) {
    return css`
      background: ${AdminColor.headColorC};
    `;
    // 매장관리
  } else if (
    props.listPathName === "storecontrol" ||
    props.listPathName === "storeadd"
  ) {
    return css`
      background: ${AdminColor.headColorD};
      color: ${Maincolor.black};
    `;
  }
};
// 관리자페이지 데이터 테이블 스타일 설정 (new) - 내용색상
const TableLayoutContentsColor = (props: ItableLayoutColor) => {
  // 회원관리
  if (
    props.listPathName === "membercontrol" ||
    props.listPathName === "memberdetail"
  ) {
    return css`
      &:nth-of-type(odd) > li {
        background: ${AdminColor.contentsColorA};
      }
      &:hover {
        background: ${AdminColor.contentsColorHoverA};
      }
    `;
    // 주문관리
  } else if (
    props.listPathName === "ordercontrol" ||
    props.listPathName === "orderdetail"
  ) {
    return css`
      &:nth-of-type(odd) > li {
        background: ${AdminColor.contentsColorB};
      }
      &:hover {
        background: ${AdminColor.contentsColorHoverB};
      }
    `;
    // 상품관리
  } else if (
    props.listPathName === "productlist" ||
    props.listPathName === "productadd" ||
    props.listPathName === "productedit"
  ) {
    return css`
      &:nth-of-type(odd) > li {
        background: ${AdminColor.contentsColorC};
      }
      &:hover {
        background: ${AdminColor.contentsColorHoverC};
      }
    `;
  } else if (
    props.listPathName === "storecontrol" ||
    props.listPathName === "storeadd"
  ) {
    return css`
      &:nth-of-type(odd) > li {
        background: ${AdminColor.contentsColorD};
      }
      &:hover {
        background: ${AdminColor.contentsColorHoverD};
      }
    `;
  }
};
// 관리자페이지 테이블 레이아웃 세로형
export const TableVertical = styled.div`
  min-width: 1000px;
  background: ${Maincolor.white};
  & > ul {
    display: grid;
    & > li {
      border-right: 0.05rem solid ${opacity.white};
      text-align: center;
      &:last-of-type {
        border-right: 0;
      }
    }
  }
`;
// 관리자페이지 테이블 레이아웃 가로형
export const TableHorizontal = styled.div<ItableLayoutColor>`
  min-width: 1000px;
  border: 0.05rem solid ${opacity.white};
  background: ${Maincolor.white};
  border-right: 0;
  border-left: 0;
  & > table {
    width: 100%;
    text-align: center;
    tr {
      th,
      td {
        width: calc(100% / 4);
        vertical-align: middle;
        border-bottom: 0.05rem solid ${opacity.white};
        padding: 14.25px 5px;
      }
      &:last-of-type {
        border-bottom: 0;
        th,
        td {
          border-bottom: 0;
        }
      }
    }
  }
  /* 타이틀 */
  .table-title {
    font-weight: 700;
    ${TableLayoutTitleColor};
    color: ${Maincolor.white};
    border-bottom-color: ${opacity.whiteB};
  }
  /* 내용 */
`;

/* 관리자페이지 데이터 테이블 스타일 설정 (new) - 타이틀 */
export const TableLayoutTitle = styled.ul<ItableLayoutColor>`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  background: ${AdminColor.headColorA};
  font-weight: 700;
  color: ${Maincolor.white};
  min-width: 100px;
  // 테이블 색상
  ${TableLayoutTitleColor}
  & > li {
    padding: 15px 5px;
  }
`;
/* 관리자페이지 데이터 테이블 스타일 설정 (new) - 내용 */
export const TableLayoutContents = styled.ul<ItableLayoutColor>`
  ${TableLayoutContentsColor}
  &:nth-of-type(odd) > li {
  }
  & > li {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 10px 5px;
    border-bottom: 0.05rem solid ${opacity.white};
    /* 추천상품 / 입문자 추천 데이터 정렬 */
    .icon {
      display: block;
      width: 100%;
      line-height: 1.2;
      text-align: left;
    }
  }
  /* 글자 내용 왼쪽정렬 필요할 때 */
  .tal {
    justify-content: flex-start !important;
    text-align: left !important;
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
        text-align: center;
        p {
          text-align: left;
        }
        /* 추천상품 / 입문자 추천 데이터 정렬 */
        .icon {
          display: block;
          line-height: 1.2;
          text-align: left;
        }
      }
    }
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  & .ant-select-selector {
    display: none;
  }
  & .ant-pagination-options {
    display: none;
  }
`;
