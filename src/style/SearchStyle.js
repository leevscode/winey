/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { styled } from "styled-components";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";
import { motion } from "framer-motion";

export const SearchBarWrap = styled.div`
  padding: ${WidthPd.padding};
  display: flex;
  justify-content: center;
  /* padding-bottom: 1rem; */
  /* border-bottom: 0.05rem solid rgba(60, 35, 35, 0.1); */
  & > span {
    width: 400px;
  }
  .filterbutton {
    border: 0.2rem solid ${opacity.wine};
    border-radius: 0.5rem;
    padding: 0 2rem;
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 1rem;
  }
`;

export const SearchFilterWrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  padding-top: 3rem;
  background: ${Maincolor.beige};
  & > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & li {
      margin-bottom: 3rem;
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
    & li:nth-child(3) {
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
  position: fixed;
  top: 14rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 560px;
  width: 100%;
  /* background: ${Maincolor.beige}; */
`;
