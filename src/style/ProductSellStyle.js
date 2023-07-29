import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const PurchaseWrap = styled.div``;

export const PickupPlaceClickWrap = styled.div`
  & > div {
    margin-bottom: 2rem;
    & > span {
      padding: ${WidthPd.padding};
      position: relative;
      font-size: 1.7rem;
      font-weight: 700;
      line-height: 2rem;
      color: ${Maincolor.black};
    }
    & > p {
      padding: ${WidthPd.padding};
      color: ${Maincolor.black};
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 2rem;
      margin-left: 0.2rem;
      padding-bottom: 1rem;
    }
    // 스와이퍼 style
    .swiper-slide {
      position: relative;
      background: ${Maincolor.white};
      /* width: 8rem; */
      height: 9rem;
      padding: 1.3rem;
      margin: 0.7rem;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
    }
    // 스와이퍼 navigation btn
    .swiper-button-prev {
      &::after {
        position: absolute;
        left: -0.8rem;
        font-size: 1.5rem;
        font-weight: 900;
        color: ${Maincolor.redDeep};
      }
    }
    .swiper-button-next {
      &::after {
        position: absolute;
        right: -0.8rem;
        font-size: 1.5rem;
        font-weight: 900;
        color: ${Maincolor.redDeep};
      }
    }

    // 매장선택 btn
    & .store {
      background: ${Maincolor.beige};
      padding: 1rem;

      // 매장선택 btn
      & button {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
        color: ${Maincolor.black};
        text-align: left;
        //city
        & b {
          width: 100%;
          background: ${opacity.wine};
          color: ${Maincolor.white};
          font-size: 1rem;
          line-height: 2rem;
          font-weight: 400;
          padding: 0.3rem 0.6rem;
          border-radius: 0.5rem;
        }
        //store
        & strong {
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 2rem;
        }
        //address

        & p {
          font-size: 1.1rem;
          line-height: 2.5rem;

        }
      }
    }
  }
  /* 날짜선택 */
  & .date {
    background: ${Maincolor.beige};
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & button {
      color: ${Maincolor.black};
      background: ${Maincolor.white};
      width: 15rem;
      height: 8rem;
      margin: 0.8rem 1rem;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
      & strong {
        font-size: 1.5rem;
        font-weight: 800;
        text-align: left;
      }
    }
  }
  // 시간선택
  & .time {
    background: ${Maincolor.beige};
    padding: 1rem;

    // 스와이퍼 style
    .swiper-slide {
      position: relative;
      background: ${Maincolor.white};
      width: 6rem;
      height: 4rem;
      margin: 0 1rem;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
    }

    // 시간선택 btn
    & button {
      color: ${Maincolor.black};
      position: absolute;
      top: 1.3rem;
      left: 0;
      padding: 0 2rem;
      & strong {
        font-size: 1.5rem;
        font-weight: 800;
        text-align: left;
      }
      & p {
        font-size: 1.1rem;
        text-align: left;
      }
    }
  }
`;

export const PurchaseBtn = styled.div`
  & span {
    position: relative;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${Maincolor.black};
  }
  & p {
    color: ${Maincolor.black};
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.5rem;
  }

  button {
    margin: 2rem 0;
    svg {
      margin-right: 1rem;
    }
  }
`;
