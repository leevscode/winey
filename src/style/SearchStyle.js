/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { motion } from "framer-motion";

export const SearchPageWrap = styled.div`
  padding: ${WidthPd.padding};
  padding-top: 1.5rem;
  padding-bottom: 6rem;
  .noSearchItem {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70rem;
    opacity: 0.7;
    & i {
      margin: 3rem 0;
      font-size: 10rem;
      text-align: center;
      color: ${Maincolor.redMedium};
    }
    & p {
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2rem;
      text-align: center;
      color: ${Maincolor.grayDeep};
    }
  }
`;

export const SearchBarWrap = styled.div`
  /* padding: ${WidthPd.padding}; */
  display: flex;
  justify-content: center;
  /* margin-bottom: 3rem; */
  height: 4rem;
  & > span {
    /* width: 400px; */
  }
  .filterbutton {
    width: 10rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${Gradation.wineA};
    border: 0.05rem solid ${opacity.grayLight};
    border-right: 0;
    border-radius: 0.5rem 0 0 0.5rem;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    /* margin: 0 1rem; */
    i {
      font-size: 0.8em;
      margin-right: 0.5rem;
    }
    &:hover {
      background: ${Gradation.wineD};
      color: ${Maincolor.white};
    }
  }
  /* 검색바 */
  .ant-input-search {
    width: calc(100% - 10rem);
    .ant-input-wrapper {
      height: 100%;
      .ant-input-affix-wrapper {
        height: 100%;
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        box-shadow: none;
        .ant-input {
          &::placeholder {
            color: ${opacity.grayDeep};
          }
        }
      }
      .ant-input-group-addon {
        .ant-btn {
          width: 6rem;
          height: 100%;
          border-radius: 0 0.5rem 0.5rem 0;
          border-start-start-radius: 0;
          border-end-start-radius: 0;
          box-shadow: none;
          & > div:first-of-type {
            display: none;
          }
        }
      }
    }
  }
`;

export const SearchFilterWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* background: ${Maincolor.beige}; */
  background: pink;
  .clickFilterItem {
    background: ${Maincolor.white};
    width: 100%;
    height: 4rem;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > li {
      margin: 0 1rem;
      background: ${opacity.grayLight};
      border: 0.5px solid ${Maincolor.grayMedium};
      border-radius: 0.5rem;
      padding: 0.5rem;
    }
    .clickFilterBtn {
      background: none;
      border: 0;
      button {
        height: 2.4rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        margin: 0 1rem;
        transition: 0.2s ease-in-out;
        font-weight: 700;
        &:hover {
          background: ${Maincolor.grayMedium};
        }
      }
    }
  }
  .selFilter {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-direction: column; */
    padding: ${WidthPd.padding};
    padding-top: 1rem;
    padding-bottom: 2rem;
    & li {
      margin-bottom: 1rem;
      h3 {
        font-size: 1.6rem;
        font-weight: 700;
        i {
          margin-right: 0.5rem;
        }
      }
      div {
        text-align: center;
        /* 체크박스 그룹 인라인 속성 추가 */
        .ant-radio-group {
          display: inline;
        }
        /* 옵션 선택 시 style*/
        & > .ant-radio-wrapper-checked {
          background: ${Maincolor.redBold};
          border: 0.05rem solid ${Maincolor.redBold};
          & span {
            color: ${Maincolor.white};
          }
        }
        /* 평상시 버튼 */
        label {
          background: ${Maincolor.white};
          color: ${Maincolor.black};
          width: 9rem;
          height: 3rem;
          border-radius: 0.7rem;

          /* antdesign 고유의 margin값 없애기 위해서 margin에 !important 사용 */
          position: relative;
          display: inline-block;
          margin: 3px !important;
          text-align: center;
          border: 0.05rem solid ${opacity.white};

          span {
            text-align: center;
            font-size: 1.3rem;
            font-weight: 600;
            color: ${Maincolor.redBold};

            /* label 안의 span(글자) 중앙정렬 위해  position 사용 */
            display: block;
            position: absolute;
            top: 47%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            line-height: 1;
            letter-spacing: -0.1rem;
            .ant-radio-inner {
              display: none;
            }
            & > b {
              margin: 0 0.5rem;
            }
            /* 체크박스 체크, 마우스 오버 시 나오는 애니메이션 효과 삭제 */
            &.ant-radio-checked::after {
              display: none;
            }
          }
        }
      }
    }
    & li:nth-of-type(3) {
      & div > label {
        width: 10rem;
        span {
          font-size: 1.2rem;
          letter-spacing: -0.1rem;
        }
      }
    }
  }
`;

export const FilterButtonWrap = styled(motion.div)`
  position: absolute;
  top: 12rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 560px;
  width: 100%;
  /* background: ${Maincolor.beige}; */
  /* .clickFilterItem {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & li {
      margin: 0 1rem;
      background: ${opacity.grayLight};
      border: 0.5px solid ${Maincolor.grayMedium};
      border-radius: 0.5rem;
      padding: 0.5rem;
    }
  } */
`;
