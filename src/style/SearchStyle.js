/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { motion } from "framer-motion";

export const SearchPageWrap = styled.div`
  .noSearchItem {
    padding-top: 4rem;
    font-size: 1.6rem;
    text-align: center;
    & i {
      display: inline-block;
      margin-bottom: 1rem;
      font-size: 2em;
      color: ${opacity.grayDeep};
    }
    & p {
      font-weight: 700;
      color: ${opacity.grayDeep};
    }
  }
`;

export const SearchBarWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: ${WidthPd.padding};
  margin-top: 1rem;
  height: 4rem;
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
  .clickFilterItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    font-size: 1.2rem;
    padding: ${WidthPd.padding};
    & > li:first-of-type {
      width: calc(100% - 200px);
      .swiper {
        border-right: 1px solid ${opacity.white};
        .swiper-slide {
          display: inline-flex;
          align-items: center;
          width: auto;
          height: 2.5rem;
          padding: 0 1rem;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 2rem;
          background: ${opacity.white};
          border: 0.05rem solid ${opacity.white};
        }
      }
    }
    .clickFilterBtn {
      display: flex;
      gap: 0 3px;
      background: none;
      border: 0;
      button {
        height: 2.5rem;
        padding: 0 1rem;
        font-size: 1.2rem;
        font-weight: 700;
        border-radius: 2rem;
        border-color: ${opacity.gray};
        box-shadow: none;
        transition: 0.2s ease-in-out;
      }
    }
  }
  .selFilter {
    padding: ${WidthPd.padding};
    padding-top: 15px;
    padding-bottom: 15px;
    background: ${Maincolor.beige};
    border-top: 0.05rem solid ${opacity.whiteC};
    border-bottom: 0.05rem solid ${opacity.whiteC};
    & li {
      margin-bottom: 1rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        i {
          margin-right: 0.5rem;
        }
      }
      .ant-radio-group {
        width: 100%;
        .swiper {
          .swiper-slide {
            width: auto;
            /* 평상시 버튼 */
            .ant-radio-wrapper {
              background: ${Maincolor.white};
              color: ${Maincolor.black};
              width: 8rem;
              height: 3rem;
              border-radius: 2rem;
              /* antdesign 고유의 margin값 없애기 위해서 margin에 !important 사용 */
              position: relative;
              display: inline-block;
              margin: 3px !important;
              text-align: center;
              border: 0.05rem solid ${opacity.grayLight};
              &::after {
                display: none;
              }
              span {
                text-align: center;
                font-size: 1.3rem;
                font-weight: 600;
                color: ${Maincolor.black};
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
              .ant-radio > div:first-of-type {
                display: none;
              }
            }
            /* 옵션 선택 시 style*/
            .ant-radio-wrapper-checked {
              background: ${Maincolor.redBold};
              border-color: ${Maincolor.redBold};
              & span {
                color: ${Maincolor.white};
              }
            }
          }
        }
      }
    }
  }
`;

export const FilterButtonWrap = styled(motion.div)`
  /* width: 100%; */
`;

// 검색결과 감싸는 영역
export const SearchListWrap = styled.div`
  padding-top: 4rem;
`;
