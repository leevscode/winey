/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { Link } from "react-router-dom";

// 메인 컨텐츠 감싸는 div
export const MainWrap = styled.div`
  section {
    padding-bottom: 60px;
  }
  .main-product-wrap {
    position: relative;
    z-index: 1;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: url(/images/bgc_main.png) no-repeat;
      background-position-y: 50px;
    }
  }
`;
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
  padding-top: 40px;
  padding-bottom: 40px;
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
          width: 70px;
          height: auto;
        }
        span {
          display: block;
          font-size: 1.4rem;
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
  text-align: center;
  h2 {
    font-family: "GyeonggiBatang";
    font-size: 2.3rem;
    font-weight: 700;
    & > span {
      display: block;
      font-size: 0.7em;
      color: ${Maincolor.redMedium};
      margin-bottom: 5px;
    }
    p {
      position: relative;
      display: flex;
      align-items: center;
      &::before,
      &::after {
        content: "";
        width: calc(100% - 23rem);
        height: 0.1rem;
        background: ${Maincolor.black};
      }
      span {
        display: block;
        min-width: 23rem;
        i {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: ${Maincolor.redBold};
          transform: rotate(45deg);
          margin-top: 0.8rem;
          &:first-of-type {
            float: left;
            margin-left: 0.6rem;
          }
          &:last-of-type {
            float: right;
            margin-right: 0.6rem;
          }
        }
      }
    }
  }
`;
// 메인페이지 탭메뉴 버튼 기본 스타일링
export const MainTabBtn = styled.div`
  margin-bottom: 20px;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & > li {
      margin: 3px 5px;
      button {
        background: ${Maincolor.beige};
        font-size: 1.4rem;
        color: ${Maincolor.black};
        border: 0.05rem solid ${opacity.whiteC};
        min-width: 8rem;
        padding: 9px 3px;
        border-radius: 5px;
        transition: 0.2s ease-in-out;
        i {
          margin-right: 3px;
        }
        &.active {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
        }
        &:hover {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
        }
      }
    }
  }
`;
// 메인페이지 추천 와인 전체 section 감싸는 영역 스타일링
export const MainProductSecton = styled.section`
  padding: ${WidthPd.padding};
`;
// 메인페이지 탭메뉴 전체보기 버튼 스타일링
export const MainTabLink = styled(Link)`
  display: block;
  background: ${Maincolor.beige};
  color: ${Maincolor.black};
  border: 0.05rem solid ${Maincolor.beige};
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  width: 100%;
  height: 6rem;
  line-height: 6rem;
  border-radius: 0.5rem;
  i {
    font-size: 0.75em;
    margin-left: 8px;
  }
`;

// 맞춤 와인 타이틀
export const RecommWineTitle = styled.div`
  padding: ${WidthPd.padding};
  margin-bottom: 20px;
  h2 {
    font-family: "GyeonggiBatang";
    font-size: 2.3rem;
    font-weight: 700;
    & > span {
      display: block;
      font-size: 0.7em;
      color: ${Maincolor.redMedium};
      margin-bottom: 5px;
    }
    p {
      position: relative;
      display: flex;
      align-items: center;
      &::after {
        content: "";
        width: calc(100% - 18rem);
        height: 0.1rem;
        background: ${Maincolor.black};
      }
      span {
        display: block;
        width: 18rem;
        i {
          display: inline-block;
          vertical-align: -0.8rem;
          margin-right: 5px;
          img {
            width: 12px;
          }
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
  }
`;
export const RecommWineContents = styled.div`
  position: relative;
  .swiper {
    overflow: inherit;
    width: 91%;
    float: right;
    overflow-x: clip;
    &.active {
      width: 100%;
    }
    .swiper-slide {
      width: calc(100% / 3);
      .img {
        box-shadow: 0px 9px 8px -6px ${opacity.white};
      }
    }
    .swiper-slide-next {
      & > div {
        margin-top: -20px;
        transition: margin 0.3s ease-in-out;
      }
    }
  }
`;
export const RecommWineLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${opacity.whiteB};
  border: 0.05rem solid ${opacity.white};
  border-radius: 10px;
  min-height: 28rem;
  margin: ${WidthPd.padding};
  ul {
    & > li {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${Maincolor.grayBold};
      text-align: center;
      &:nth-of-type(2) {
        margin: 13px 0 20px;
        line-height: 1.3;
      }
      i {
        font-size: 2em;
      }
      a {
        display: block;
        min-width: 12rem;
        background: ${Maincolor.grayBold};
        border-radius: 5px;
        color: ${Maincolor.white};
        padding: 10px;
        margin: 0 auto;
        transition: 0.2s ease-in-out;
        &:hover {
          background: ${Maincolor.grayDeep};
        }
      }
    }
  }
`;
// 맞춤와인 데이터 존재하지 않을 경우 출력
export const NotRandomWine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${opacity.whiteB};
  border: 0.05rem solid ${opacity.white};
  border-radius: 10px;
  min-height: 28rem;
  margin: ${WidthPd.padding};
  ul {
    & > li {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${Maincolor.grayBold};
      text-align: center;
      &:nth-of-type(2) {
        margin: 13px 0 20px;
        line-height: 1.3;
      }
      i {
        font-size: 2em;
      }
      a {
        display: block;
        min-width: 12rem;
        background: ${Maincolor.grayBold};
        border-radius: 5px;
        color: ${Maincolor.white};
        padding: 10px;
        margin: 0 auto;
        transition: 0.2s ease-in-out;
        &:hover {
          background: ${Maincolor.grayDeep};
        }
      }
    }
  }
`;
