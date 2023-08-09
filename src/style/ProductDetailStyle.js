/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd, badge, opacity } from "./GlobalStyle";
import { css } from "@emotion/react";

// 상품 상세페이지 전체
export const ProductDetailWrap = styled.div`
  padding-bottom: 100px;
  & > section {
    padding: ${WidthPd.padding};
  }
  .component-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 10px;
    i {
      display: inline-block;
      margin-right: 5px;
      width: 18px;
      height: 18px;
      font-size: 1.8rem;
      vertical-align: -1px;
    }
  }
  .component-bar {
    position: relative;
    height: 15px;
    background: ${Maincolor.grayMedium};
    border-radius: 20px;
    overflow: hidden;
    isolation: isolate;
    border: 0.25rem solid ${Maincolor.grayMedium};
    box-sizing: content-box;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: url(/images/bar_wine.png) no-repeat center;
      width: 3%;
      height: 100%;
      transition: width 0.5s ease-in-out;
    }
  }
  .component-bar-text {
    display: flex;
    justify-content: space-between;
    li {
      width: calc(100% / 3);
      font-size: 1.2rem;
      color: ${Maincolor.grayBold};
      &:nth-of-type(2) {
        text-align: center;
      }
      &:nth-of-type(3) {
        text-align: right;
      }
      span {
        display: block;
        margin: 4px 0 2px;
      }
      p {
        word-break: keep-all;
      }
    }
  }
`;
// 상품 이미지, 와인 종류, 원산지, 이름, 가격정보
export const InfoWrap = styled.section`
  .img {
    position: relative;
    background: ${Maincolor.white};
    border: 0.05rem solid ${opacity.grayLight};
    padding-top: 80%;
    overflow: hidden;
    isolation: isolate;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 20px;
    }
  }
  .txt {
    margin: 20px 0 15px;
    .title-wrap {
      ul {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 10px;
        li {
          position: relative;
          padding-right: 10px;
          margin-right: 8px;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 8px;
            background: ${Maincolor.grayBold};
          }
          &:last-of-type {
            padding-right: 0;
            margin-right: 0;
          }
          &:last-of-type::after {
            display: none;
          }
        }
      }
      h2 {
        font-size: 2.4rem;
        font-weight: 700;
        span {
          display: block;
          font-size: 0.65em;
          font-weight: 500;
          color: ${Maincolor.grayBold};
        }
      }
    }
    .price-wrap {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 15px;
      min-height: 3.4rem;
      .price {
        ul {
          display: flex;
          align-items: flex-end;
          font-size: 1.8rem;
          li.sale-price {
            font-weight: 700;
            margin-right: 8px;
            color: ${Maincolor.redBold};
            span {
              font-size: 1.5em;
              font-weight: 900;
            }
          }
          li.default-price {
            text-decoration: line-through;
            color: ${Maincolor.grayBold};
          }
        }
      }
      .percent {
        font-size: 3.4rem;
        font-weight: 900;
        color: ${badge.pink};
      }
    }
  }
`;
// 당도, 산도, 바디
export const DetailInfoWrap = styled.section`
  margin: 3rem 0;
  & > ul {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    .title {
      display: flex;
      align-items: center;
      width: 13rem;
      padding-right: 2rem;
      margin-bottom: 0;
      i {
        display: inline-block;
        width: 8px;
        height: 11px;
        background: url(/images/icon_red_waterdrop.svg) center no-repeat;
        background-size: contain;
        margin-right: 5px;
      }
    }
    .bar {
      position: relative;
      width: calc(100% - 13rem);
      ol {
        display: flex;
        position: relative;
        padding-bottom: 1.3rem;
        li {
          position: relative;
          width: calc(100% / 5 - 7px);
          height: 10px;
          background: ${Maincolor.grayMedium};
          border-radius: 15px;
          margin-right: 7px;
          overflow: hidden;
          isolation: isolate;
          &:last-of-type {
            margin-right: 0;
          }
          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
        }
      }
      .default_bar {
        &::before {
          content: "LOW";
          position: absolute;
          bottom: -4px;
          left: 0;
          font-size: 1.2rem;
          color: ${Maincolor.grayBold};
        }
        &::after {
          content: "HIGH";
          position: absolute;
          bottom: -4px;
          right: 0;
          font-size: 1.2rem;
          color: ${Maincolor.grayBold};
        }
      }
      .active_bar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
        li {
          &:nth-of-type(1)::after {
            background: ${Gradation.wineE};
          }
          &:nth-of-type(2)::after {
            background: ${Gradation.wineD};
          }
          &:nth-of-type(3)::after {
            background: ${Gradation.wineC};
          }
          &:nth-of-type(4)::after {
            background: ${Gradation.wineB};
          }
          &:nth-of-type(5)::after {
            background: ${Gradation.wineA};
          }
        }
      }
    }
  }
`;
// 입문 난이도 바 스타일링
export const LevelBar = props => {
  // 입문 난이도에서 전달받은 데이터 값에 따라 바 넓이 결정
  if (props.feature === 1) {
    return css`
      width: 3%;
    `;
  } else if (props.feature === 2) {
    return css`
      width: 50%;
    `;
  } else if (props.feature === 3) {
    return css`
      width: 100%;
    `;
  }
};
// 입문 난이도
export const LevelWrap = styled.section`
  margin: 3rem 0;
  .component-bar {
    &::after {
      ${LevelBar};
    }
  }
`;
// 페어링, 아로마, 음용온도
export const RecommendWrap = styled.section`
  margin: 3rem 0;
  .aroma {
    background: url(/images/icon_aroma.svg) no-repeat center;
    background-size: cover;
    vertical-align: -3px;
  }
  & > ul {
    margin-bottom: 30px;
  }
  .component-bar {
    &::after {
      width: 3%;
    }
  }
  .recommend-slide {
    .swiper-slide {
      width: calc(100% / 6);
      text-align: center;
      img {
        display: block;
        width: 100%;
      }
      span {
        display: block;
        font-size: 1.4rem;
        margin-top: 10px;
      }
    }
  }
`;
// 와인 평점
export const ReviewWrap = styled.section`
  margin: 3rem 0;
  ul {
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% / 3);
      height: 15rem;
      background: ${Maincolor.beige};
      border-radius: 10px;
      margin-right: 10px;
      &:last-of-type {
        margin-right: 0;
      }
      & > div {
        font-size: 2rem;
        text-align: center;
        i {
          font-size: 1.5em;
        }
        p {
          margin-top: 10px;
          font-weight: 900;
          span {
            display: block;
            font-size: 0.7em;
            font-weight: 500;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;
// 상품 정보
export const InfoTableWrap = styled.section`
  margin: 3rem 0;
  table {
    width: 100%;
    font-size: 1.4rem;
    tr {
      border-top: 0.05rem solid ${opacity.white};
      border-bottom: 0.05rem solid ${opacity.white};
      th,
      td {
        padding: 15px 0 15px 20px;
      }
      th {
        width: 30%;
        background: ${opacity.whiteC};
      }
      td {
      }
    }
  }
`;
// 구매하기 퀵메뉴 버튼
export const SellQuickWrap = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  max-width: 558px;
  width: 100%;
  height: 6rem;
  background: ${Maincolor.white};
  border-top: 0.05rem solid ${opacity.white};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${WidthPd.padding};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    & > li {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 5rem;
        border-radius: 0.5rem;
      }
      &:nth-of-type(1) {
        width: calc(100% - 80px);
        margin-right: 5px;
        a {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
          border: 0.05rem solid ${Maincolor.redBold};
          font-size: 1.6rem;
          font-weight: 500;
          transition: 0.2s ease-in-out;
          &:hover {
            background: ${Maincolor.redDeep};
          }
        }
      }
      &:nth-of-type(2) {
        width: 80px;
        a {
          background: ${Maincolor.white};
          border: 0.05rem solid ${opacity.white};
          img {
            width: 20px;
          }
        }
      }
    }
  }
`;
