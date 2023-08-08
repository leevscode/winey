/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd } from "./GlobalStyle";

export const WineGuideWrap = styled.div`
  margin-top: -2rem;
  .ant-collapse {
    font-family:
      "Pretendard Variable",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif;
    border: 0;
    border-radius: 0;
    .ant-collapse-item {
      border-radius: 0;
      border: 0;
      .ant-collapse-header,
      .ant-collapse-content {
        border-radius: 0;
        border: 0;
      }
      .ant-collapse-header {
        align-items: center;
        background: ${Maincolor.beige};
        padding-inline-start: 0;
        padding: ${WidthPd.padding};
        height: 50px;
        .ant-collapse-expand-icon {
          margin-left: 0;
        }
        .ant-collapse-header-text {
          font-size: 1.6rem;
          font-weight: 700;
          color: ${Maincolor.black};
          &::before {
            content: "";
            display: inline-block;
            background: url(/images/icon_wineguide.svg) center no-repeat;
            width: 2rem;
            height: 2rem;
            margin-right: 7px;
            vertical-align: -4px;
          }
        }
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          padding: 0;
        }
      }
    }
  }
`;
// 와인 보관법
export const WineStorageWrap = styled.div`
  & > div {
    padding: ${WidthPd.padding};
    padding-top: 20px;
    padding-bottom: 20px;
    span {
      display: inline-block;
      background: ${Maincolor.redDeep};
      color: ${Maincolor.white};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      padding: 5px 0 4px;
      border-radius: 5px;
      min-width: 5.5rem;
      text-align: center;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 1.4rem;
        color: ${Maincolor.black};
        margin-bottom: 15px;
        &:last-of-type {
          margin-bottom: 0;
        }
        i {
          margin-right: 5px;
        }
      }
    }
  }
`;
// 와인 음용 온도
export const WineTemperatureWrap = styled.div`
  & > div {
    padding: ${WidthPd.padding};
    padding-top: 20px;
    &:last-of-type {
      padding-bottom: 20px;
    }
    & > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    span {
      display: inline-block;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 10px;
      margin-right: 10px;
      &:last-of-type {
        margin-right: 0;
      }
      &::before {
        content: "";
        display: inline-block;
        width: 0.6em;
        height: 0.6em;
        border-radius: 100%;
        vertical-align: 1px;
        margin-right: 5px;
      }
      &.redwine {
        color: ${Maincolor.redDeep};
        &::before {
          background: ${Maincolor.redDeep};
        }
      }
      &.whitewine {
        color: ${Gradation.whiteC};
        &::before {
          background: ${Gradation.whiteC};
        }
      }
      &.rosewine {
        color: ${Gradation.etcA};
        &::before {
          background: ${Gradation.etcA};
        }
      }
      &.spaklingwine {
        color: ${Gradation.sparkA};
        &::before {
          background: ${Gradation.sparkA};
        }
      }
    }
    ul {
      li {
        font-size: 1.4rem;
        color: ${Maincolor.black};
        margin-bottom: 15px;
        &:last-of-type {
          margin-bottom: 0;
        }
        i {
          margin-right: 5px;
        }
      }
    }
  }
`;
// 글라스 선택법
export const WineGlassWrap = styled.div`
  ul {
    display: flex;
    padding: ${WidthPd.padding};
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    & > li {
      &:nth-of-type(1) {
        img {
          display: block;
          width: 100px;
          margin-right: 20px;
        }
      }
      &:nth-of-type(2) {
        width: calc(100% - 100px);
        span {
          display: inline-block;
          font-size: 1.5rem;
          font-weight: 700;
          &::after {
            content: "";
            display: block;
            width: 15px;
            height: 1.5px;
            margin: 1px 0 5px;
          }
          &.redwine {
            color: ${Maincolor.redDeep};
            &::after {
              background: ${Maincolor.redDeep};
            }
          }
          &.whitewine {
            color: ${Gradation.whiteC};
            &::after {
              background: ${Gradation.whiteC};
            }
          }
          &.spaklingwine {
            color: ${Gradation.sparkA};
            &::after {
              background: ${Gradation.sparkA};
            }
          }
        }
        p {
          color: ${Maincolor.black};
        }
      }
    }
  }
  & > div {
    padding: ${WidthPd.padding};
    padding-top: 20px;
    padding-bottom: 20px;
    span {
      display: inline-block;
      background: ${Maincolor.redDeep};
      color: ${Maincolor.white};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
      padding: 5px 0 4px;
      border-radius: 5px;
      min-width: 5.5rem;
      text-align: center;
      margin-bottom: 10px;
    }
    ul {
      li {
        font-size: 1.4rem;
        color: ${Maincolor.black};
        margin-bottom: 15px;
        &:last-of-type {
          margin-bottom: 0;
        }
        i {
          margin-right: 5px;
        }
      }
    }
  }
`;
