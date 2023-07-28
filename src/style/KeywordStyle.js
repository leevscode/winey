import styled from "@emotion/styled";
import { ButtonOk, Maincolor, opacity } from "./GlobalStyle";

// 회원가입완료 component
export const WelcomeWrap = styled.div`
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & svg {
    text-align: center;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.4rem;
    margin-bottom: 1rem;
  }
  & h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
`;
export const LetsChoice = styled.div`
  & div {
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
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  & h5 {
    font-size: 1.2rem;
    text-align: center;
  }
`;

// 선호키워드 선택 component
export const KeywordWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: ${Maincolor.beige};
  padding: 3rem 2rem;
  & > ul {
    & li {
      margin-bottom: 2.5rem;
      & h3 {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.4rem;
        margin: 1rem 0;
      }
      div {
        /* display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem; */
        text-align: center;
        /* 체크박스 그룹 인라인 속성 추가 */
        .ant-checkbox-group {
          display: inline;
        }
        label {
          background: ${Maincolor.white};
          color: ${Maincolor.black};
          /* border: 0.05rem solid ${Maincolor.white}; */
          width: 8rem;
          height: 4rem;
          border-radius: 0.7rem;
          /* margin: 0.4rem;
          display: flex;
          justify-content: center;
          align-items: center; */

          /* antdesign 고유의 margin값 없애기 위해서 margin에 !important 사용 */
          position: relative;
          display: inline-block;
          margin: 3px !important;
          text-align: center;
          border: 0.05rem solid ${opacity.white};
          span {
            text-align: center;
            font-size: 1.2rem;
            font-weight: 700;
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

export const KeywordConfirmBtn = styled.div`
  margin: 2rem 0 1rem 0;
  & button {
    width: 51rem;
    margin: 0.5rem 0;
  }
`;
export const EditKeywordConfirmBtn = styled.div`
  margin: 3rem 0 4rem 0;
  & button {
    width: 51rem;
    margin: 0.5rem 0;
  }
`;
