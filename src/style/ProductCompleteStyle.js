import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const ProductCompleteMain = styled.div`
  padding: ${WidthPd.padding};
`;

export const ProductCompleteText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3rem;
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
  border-top: 1px solid ${opacity.white};
  border-bottom: 1px solid ${opacity.white};
  & > div {
    display: flex;
    padding: 1.5rem 0;

    & .imgWrap {
      width: 13.5rem;
      height: 13.5rem;
      position: relative;
      /* padding-top: 135%; */
      border: 0.05rem solid ${opacity.grayLight};
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
      font-weight: bold;
    }
    /* Eng name */
    li:nth-of-type(2) {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    /* 상품가격 */
    li:nth-of-type(3) {
      color: ${Maincolor.redBold};
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: 1rem;

      /* 구매개수 */
      & > span {
        margin-left: 0.5rem;
        color: ${Maincolor.black};
        font-size: 1.2rem;
      }
    }
    /* 픽업지점 */
    li:nth-of-type(4) {
      font-size: 1.3rem;
      /* margin-bottom: 5px; */
    }
    /* 픽업날짜, 시간 */
    li:nth-of-type(5) {
      font-size: 1.3rem;
    }
  }
`;

export const ProductCompleteBox = styled.div`
  & ul {
    margin-left: 1rem;
    font-size: 1.5rem;
    & > li {
      font-weight: 700;
    }
  }
  & p {
    font-size: 2rem;
    font-weight: 800;
    text-align: right;
    margin-bottom: 2rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 5rem 0;
`;
