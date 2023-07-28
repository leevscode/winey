/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

// 비주얼 슬라이드
export const VisualWrap = styled.div`
  position: relative;
  height: 60vh;
  border-radius: 0 0 0 100px;
  margin-top: -8rem;
  overflow: hidden;
  isolation: isolate;
  .swiper {
    height: 100%;
    .swiper-slide {
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
    .swiper-pagination {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 48px;
      right: 5%;
      z-index: 1;
      width: 100%;
      height: auto;
      text-align: right;
      max-width: 100px;
      font-size: 0;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 1px;
        background: ${Maincolor.white};
      }
      span {
        position: relative;
        width: auto;
        font-size: 1.4rem;
        color: ${Maincolor.white};
      }
    }
  }
`;
export const VisualText = styled.div`
  position: absolute;
  top: 23%;
  width: 100%;
  height: 0;
  padding: 0 5%;
  & > div {
    color: ${Maincolor.white};
    font-size: 1.8rem;
    p {
      font-size: 2.5em;
      font-weight: 900;
      margin-top: 3px;
    }
    a {
      display: block;
      color: ${Maincolor.white};
      border: 0.05rem solid ${Maincolor.white};
      max-width: 130px;
      text-align: center;
      padding: 10px 0;
      font-size: 1.4rem;
      margin-top: 30px;
      transition: 0.3s ease-in-out;
      &:hover {
        background: ${opacity.whiteB};
      }
      i {
        margin-left: 10px;
        font-size: 1.3rem;
      }
    }
  }
`;
// 네비게이션 메뉴 리스트
export const NavListWrap = styled.div`
  padding: ${WidthPd.padding};
  padding-top: 50px;
  padding-bottom: 50px;
  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    & > li {
      text-align: center;
      margin: 0 20px;
      a {
        display: block;
        img {
          display: block;
        }
        span {
          display: block;
          font-size: 1.6rem;
          margin-top: 10px;
        }
      }
    }
  }
`;
// 메인페이지 타이틀 기본 스타일링
export const MainTitle = styled.div`
  padding: ${WidthPd.padding};
  margin-bottom: 20px;
  h2 {
    font-family: "GyeonggiBatang";
    font-size: 2.5rem;
    font-weight: 700;
    & > span {
      display: block;
      font-size: 0.7em;
      color: ${Maincolor.redMedium};
      margin-bottom: 5px;
    }
    p {
      position: relative;
      &::after {
        content: "";
        height: 0.1rem;
        background: ${Maincolor.black};
      }
      span {
        display: block;
        i {
          display: inline-block;
          vertical-align: -1px;
          margin-right: 5px;
        }
      }
    }
  }
`;
// 맞춤 와인 추천
export const RecommWineWrap = styled.section`
  overflow: hidden;
  padding-top: 5px;
  & > div:first-of-type {
    margin-bottom: 40px;
    p {
      display: flex;
      align-items: center;
      &::after {
        width: calc(100% - 18rem);
      }
      span {
        width: 18rem;
      }
    }
  }
`;
export const RecommWineContents = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    z-index: 2;
    display: block;
    width: 20%;
    height: calc(100% + 20px);
    background: ${Maincolor.white};
  }
  .swiper {
    overflow: inherit;
    width: 80%;
    float: right;
  }
  .swiper-slide-next {
    & > div {
      margin-top: -20px;
      transition: margin 0.3s ease-in-out;
    }
  }
`;
// 음식별 추천 와인
// 국가별 추천 와인
// 가격별 추천 와인
