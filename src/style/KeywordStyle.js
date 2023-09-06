/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import styled from "@emotion/styled";
import { ButtonOk, Maincolor, WidthPd, opacity } from "./GlobalStyle";
import Swiper from "swiper";

// 회원가입완료 component
export const WelcomeWrap = styled.div`
  padding: ${WidthPd.padding};
  /* margin-top: 30rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 40%;
  transform: translateY(-50%);
  i {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 15px;
  }
  /* & svg {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  } */
  & h3 {
    text-align: center;
    /* font-size: 1.8rem; */
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  & button {
    width: 50rem;
    margin-top: 5rem;
    & > a {
      font-weight: 600;
      color: ${Maincolor.white};
    }
  }
`;
export const LetsChoice = styled.div`
  & div {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* display: block; */
    margin-bottom: 1rem;
    & svg {
      margin: 0 4px 0 4px;
      text-align: center;
      font-size: 0.6rem;
      opacity: 0.5;
      color: ${Maincolor.redBold};
    }
    & strong > svg {
      font-size: 1rem;
      text-align: center;
    }
  }
  & h4 {
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    & > strong {
      font-weight: 700;
    }
  }

  & h5 {
    margin-top: 2rem;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.7rem;
  }
`;

// 선호 키워드 변경 임시wrap
export const EditKeywordTemp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  background: #fff;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  /* width: 56rem;
  height: 112rem; */
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    position: absolute;
    top: 50rem;
    left: 9rem;
    opacity: 1;
    color: ${Maincolor.black};
    font-size: 2rem;
    font-weight: 700;
    z-index: 9999;
  }
`;
// 선호키워드 선택 component
export const KeywordWrap = styled.div`
  position: relative;
  width: 100%;
  height: ${props =>
    props.keywordBgc ? "calc(100vh - 60px)" : "calc(100vh - 60px - 60px)"};
  background: ${Maincolor.beige};
  & > ul {
    & li {
      margin-bottom: 3rem;
      & h3 {
        text-align: center;
        font-size: 1.7rem;
        font-weight: 700;
        /* line-height: 1.4rem; */
        /* margin: 1rem 0; */
        margin-bottom: 1rem;
      }
      div {
        text-align: center;
        /* 체크박스 그룹 인라인 속성 추가 */
        .ant-checkbox-group {
          display: inline;
        }
        label {
          background: ${Maincolor.white};
          color: ${Maincolor.black};
          width: 9rem;
          height: 4rem;
          border-radius: 0.7rem;

          /* antdesign 고유의 margin값 없애기 위해서 margin에 !important 사용 */
          position: relative;
          display: inline-block;
          margin: 3px !important;
          text-align: center;
          border: 0.05rem solid ${opacity.white};
          span {
            text-align: center;
            font-size: 1.4rem;
            font-weight: 600;
            /* line-height: 1.4rem; */
            color: ${Maincolor.redBold};

            /* label 안의 span(글자) 중앙정렬 위해  position 사용 */
            display: block;
            position: absolute;
            top: 47%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            line-height: 1;

            /* 체크박스 체크, 마우스 오버 시 나오는 애니메이션 효과 삭제 */
            &.ant-checkbox-checked::after {
              display: none;
            }
          }
          /* 옵션 선택 시 style*/
          &.ant-checkbox-wrapper-checked {
            background: ${Maincolor.redBold};
            border: 0.05rem solid ${Maincolor.redBold};
            & span {
              color: ${Maincolor.white};
            }
          }
          /* 체크박스 모양 hidden */
          & .ant-checkbox-inner {
            display: none;
          }
        }
      }
    }
  }
`;

// 키워드 선택 완료 버튼 감싸는 영역
export const KeywordConfirmBtn = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  /* margin: 3rem 0 4rem 0; */
  padding: ${WidthPd.padding};
  & button {
    width: 100%;
    margin: 0.5rem auto;
  }
`;
// 키워드 수정 완료 버튼 감싸는 영역
export const EditKeywordConfirmBtn = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 1;
  width: 100%;
  /* margin: 3rem 0 4rem 0; */
  padding: ${WidthPd.padding};
  & button {
    width: 100%;
    margin: 0.5rem auto;
  }
`;

// 선호 키워드 화면 디자인 구조 변경
export const KeywordSwiperWrap = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 115px);
  padding: 2rem 2%;
  /* 슬라이드 */
  .swiper {
    height: 100%;
    overflow-y: auto;
    .title {
      font-size: 1.8rem;
      text-align: center;
      font-weight: 700;
      margin: 3.5rem 0 2.5rem;
      p {
        font-size: 0.8em;
        font-weight: 400;
        margin-top: 5px;
      }
    }
    .ant-checkbox-group {
      display: inline;
    }
    /* 키워드 버튼 */
    .ant-checkbox-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-weight: 700;
      text-align: center;
      background: ${Maincolor.white};
      color: ${Maincolor.black};
      width: calc(100% / 3 - 10px);
      height: 5rem;
      border-radius: 3rem;
      margin: 5px !important;
      border: 0.05rem solid ${opacity.white};
      .ant-checkbox {
        & > div:first-of-type {
          display: none;
        }
        .ant-checkbox-inner {
          display: none;
        }
      }
      & > span:last-of-type {
        padding-inline-start: 0;
        padding-inline-end: 0;
        font-size: 1.6rem;
        i {
          margin-right: 5px;
        }
      }
    }
    /* 키워드 버튼 - 체크함 */
    .ant-checkbox-wrapper-checked {
      background: ${opacity.wine};
      color: ${Maincolor.white};
      & > span:last-of-type {
        i {
          color: ${Maincolor.white}!important;
        }
      }
    }
  }
  /* 슬라이드 버튼 */
  .btn-wrap {
    position: absolute;
    top: 8%;
    left: 50%;
    z-index: 5;
    transform: translateX(-50%);
    width: 96%;
    button {
      display: block;
      position: absolute;
      z-index: 5;
      font-size: 2rem;
      color: ${Maincolor.redBold};
      &.keyword-button-prev {
        left: 0;
      }
      &.keyword-button-next {
        right: 0;
      }
      &.swiper-button-disabled {
        opacity: 0.4;
      }
    }
  }
  /* 슬라이드 페이지네이션 */
  .swiper-pagination {
    position: absolute;
    top: 0 !important;
    bottom: auto !important;
    .swiper-pagination-bullet {
      width: 7px;
      height: 7px;
      background: ${Maincolor.redBold};
      margin: 0 5px;
      border-radius: 0;
      transform: rotate(45deg);
      &.swiper-pagination-bullet-active {
      }
    }
  }
`;
