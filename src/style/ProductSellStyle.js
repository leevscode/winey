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
      width: 18rem;
      height: 9rem;
      padding: 1.5rem;
      margin: 0.7rem 0;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
    }
    // 스와이퍼 navigation btn
    /* .swiper-button-prev {
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
    } */

    // 매장선택 btn
    & .store {
      background: ${Maincolor.beige};
      padding: 1rem;
      border-radius: 0.5rem;

      // 매장선택 btn
      & button {
        position: absolute;
        top: 0;
        left: 0;
        padding: 1rem;
        color: ${Maincolor.black};
        text-align: left;
        width: 100%;
        //city
        & b {
          background: ${Maincolor.redMedium};
          color: ${Maincolor.white};
          font-size: 0.9rem;
          line-height: 2rem;
          font-weight: 400;
          padding: 0.2rem 0.5rem;
          border-radius: 0.3rem;
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
          line-height: 1.5rem;
          margin-top: 1rem;
        }
        &:hover {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
          border-radius: 0.5rem;
          & > b {
            background: ${Maincolor.white};
            color: ${Maincolor.redBold};
            font-weight: 600;
          }
          & > p {
            color: ${Maincolor.white};
          }
        }
      }
    }
  }
  /* 날짜선택 */
  & .date {
    background: ${Maincolor.beige};
    padding: 1.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* & button {
      color: ${Maincolor.black};
      background: ${Maincolor.white};
      width: 16.8rem;
      height: 8rem;
      margin: 0.8rem 0.5rem;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
      & strong {
        font-size: 1.5rem;
        font-weight: 800;
        text-align: left;
      }
    } */
    button {
      background: ${Maincolor.white};
      font-size: 1.4rem;
      color: ${Maincolor.black};
      /* border: 0.1rem solid ${opacity.white}; */
      /* min-width: 8.5rem; */
      padding: 2rem 5rem;
      border-radius: 0.5rem;
      transition: 0.2s ease-in-out;
      & > strong {
        font-size: 1.5rem;
        font-weight: 800;
        line-height: 2rem;
        letter-spacing: 0.02rem;
      }
      & > p {
        font-size: 1.7rem;
        font-weight: 800;
        line-height: 2rem;
        letter-spacing: 0.07rem;
        color: ${Maincolor.redBold};
      }
      &:hover {
        background: ${Maincolor.redBold};
        color: ${Maincolor.white};
        & > p {
          color: ${Maincolor.white};
        }
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
      height: 4rem;
      width: 6rem;
      /* margin: 0 2rem; */
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;

      // 시간선택 btn
      /* & button {
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
    } */
      button {
        position: absolute;
        top: 0;
        left: 0;
        background: ${Maincolor.white};
        font-size: 1.5rem;
        font-weight: 800;
        color: ${Maincolor.black};
        min-width: 8rem;
        height: 4rem;
        /* padding: 9px 3px; */
        border-radius: 0.5rem;
        transition: 0.2s ease-in-out;

        &:hover {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
        }
      }
    }
  }
`;

//구매예정리스트 style

export const PurchaseListWrap = styled.div`
  padding: 3rem 1.5rem;
  color: ${Maincolor.black};
  & > p {
    font-size: 1.7rem;
    font-weight: 700;
  }
  & .WrapFlex {
    border-bottom: 1px solid ${opacity.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 0;
    &:last-child {
      border-bottom: 0;
    }
    & .item-photo {
      border: 1px solid ${opacity.white};
    }
    & .item-desc {
      width: 35rem;
      margin-top: 2rem;
      // 상품명(한글)
      & > strong {
        font-size: 1.7rem;
        font-weight: 800;
        line-height: 1.8rem;
      }
      //상품명(영문)
      & > span {
        display: block;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2rem;
        margin-bottom: 2.5rem;
      }
      // 판매가격
      & > p {
        font-size: 1.7rem;
        font-weight: 900;
        line-height: 2.5rem;
        color: ${Maincolor.redBold};
        margin-bottom: 0.5rem;
      }
      & > div {
        //아이템 개수
        display: flex;
        align-items: center;
        & > p {
          display: inline-block;
          width: 4rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: ${Maincolor.black};
          text-align: center;
          padding: 0.5rem;
        }
        // + - 아이콘
        & > svg {
          font-size: 1.5rem;
          border: 2px solid ${opacity.white};
          padding: 0.5rem;
        }
      }
    }
  }
`;
// 총 금액
export const TotalPrice = styled.div`
  background: ${Maincolor.beige};
  padding: ${WidthPd.padding};
  color: ${Maincolor.black};
  & > div {
    padding: 5rem 0 2rem 0;
    display: flex;
    justify-content: space-between;
    & > span {
      font-size: 1.7rem;
      font-weight: 500;
      line-height: 2rem;
    }
    & > strong {
      color: ${Maincolor.redBold};
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 2rem;
    }
  }
`;

// 주문 버튼
export const PurchaseBtn = styled.div`
  padding: ${WidthPd.padding};
  margin: 3rem 0;
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
    margin: 1rem 0 5rem 0;
    svg {
      margin-right: 1rem;
    }
  }
`;
