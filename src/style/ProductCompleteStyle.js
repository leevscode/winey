import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const ProductCompleteMain = styled.div``;

export const ProductCompleteText = styled.div`
  padding: ${WidthPd.padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  img {
    margin-bottom: 2rem;
  }
  p {
    font-weight: bold;
    color: ${Maincolor.black};
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 10px;
  }
  span {
    color: ${Maincolor.black};
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const ProductCompleteinfo = styled.div`
  padding: ${WidthPd.padding};
  & > div {
    border-top: 1px solid ${opacity.white};
    border-bottom: 1px solid ${opacity.white};
    display: flex;
    padding: 1.5rem 0;

    & .imgWrap {
      width: 15rem;
      height: 15rem;
      position: relative;
      /* padding-top: 135%; */
      border: 0.05rem solid ${opacity.grayLight};
      overflow: hidden;
      isolation: isolate;
      img {
        padding: 1rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    ul {
      margin: 1rem 0 0 1rem;
      padding: 1rem;
    }
    /* kor name */
    li:nth-of-type(1) {
      color: ${Maincolor.black};
      font-size: 1.6rem;
      font-weight: 700;
      margin-top: 1rem;
    }
    /* Eng name */
    li:nth-of-type(2) {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2rem;
      margin-bottom: 3rem;
    }
    /* 상품가격 */
    li:nth-of-type(3) {
      color: ${Maincolor.redBold};
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1rem;

      /* 구매개수 */
      & > span {
        margin-left: 0.5rem;
        color: ${Maincolor.black};
        font-size: 1.4rem;
        letter-spacing: 0.5rem;
      }
    }
    /* 픽업지점 */
    /* li:nth-of-type(4) {
      font-size: 1.3rem;
      /* margin-bottom: 5px; */
    /* } */
    /* 픽업날짜, 시간 */
    /* li:nth-of-type(5) {
      font-size: 1.3rem;
    } */
  }
`;

export const ProductCompleteBox = styled.div`
  margin: 2rem 0 5rem 0;
  & > div {
    background: ${Maincolor.beige};
    margin: 2rem 0;
    & ul {
      padding: 3rem 2rem;
      & > li {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        color: ${Maincolor.black};
        font-weight: 500;
        line-height: 2rem;
        margin-top: 0.7rem;
      }
      & > li:last-child {
        font-size: 1.9rem;
        margin-top: 2rem;
        font-weight: 700;
      }
    }
  }
  & > .confirmButton {
    padding: ${WidthPd.padding};
    background: ${Maincolor.white};
    & > button {
      margin: 1.5rem 0;
    }
    & > button:nth-of-type(1) > a {
      color: ${Maincolor.white};
    }
  }
`;
