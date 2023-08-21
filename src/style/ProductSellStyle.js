import styled from "@emotion/styled";
import { Gradation, Maincolor, WidthPd, opacity } from "./GlobalStyle";

export const PurchaseWrap = styled.div`
  padding-bottom: 80px;
`;

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
      font-size: 1.2rem;
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
      /* width: calc(100% / 3 - 15px); */
      height: 9rem;
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
    }
    // 매장선택 btn
    & .store {
      background: ${Maincolor.beige};
      padding: 1.5rem;
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
          font-size: 1.2rem;
          line-height: 2rem;
          font-weight: 500;
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
          font-size: 1.2rem;
          line-height: 1.5rem;
          margin-top: 1rem;
          letter-spacing: -0.03rem;
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
      & .activeStore {
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
  /* 날짜선택 */
  & .date {
    background: ${Maincolor.beige};
    padding: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* gap: 0 1rem; */
    gap: 0 15px;
    & > div {
      width: calc(100% / 3);
    }
    & button {
      display: block;
      width: 100%;
      padding: 2rem 1rem;
      background: ${Maincolor.white};
      font-size: 1.4rem;
      color: ${Maincolor.black};
      /* padding: 2rem 4.7rem; */
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
    & .activeDate {
      background: ${Maincolor.redBold};
      color: ${Maincolor.white};
      border-radius: 0.5rem;
      & > p {
        color: ${Maincolor.white};
      }
    }
  }
  // 시간선택
  & .time {
    background: ${Maincolor.beige};
    padding: 1.5rem;

    // 스와이퍼 style
    .swiper-slide {
      position: relative;
      background: ${Maincolor.white};
      height: 4.2rem;
      /* width: 6rem; */
      width: calc(100% / 5);
      /* margin-right: 10px; */
      /* margin: 0 2rem; */
      border: 0.1rem solid ${Maincolor.white};
      border-radius: 0.5rem;
      & > div {
        /* width: 100%; */
        /* width: calc(100% / 5); */
      }
      button {
        /* position: absolute; */
        /* top: 0; */
        /* left: 0; */
        display: block;
        /* width: 6rem; */
        width: 100%;
        background: ${Maincolor.white};
        font-size: 1.5rem;
        font-weight: 800;
        color: ${Maincolor.black};
        /* min-width: 8rem; */
        height: 4rem;
        /* padding: 9px 3px; */
        border-radius: 0.5rem;
        transition: 0.2s ease-in-out;

        &:hover {
          background: ${Maincolor.redBold};
          color: ${Maincolor.white};
        }
      }
      & .activeTime {
        background: ${Maincolor.redBold};
        color: ${Maincolor.white};
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
    justify-content: flex-start;
    align-items: center;
    padding: 2rem 0;

    &:last-child {
      border-bottom: 0;
    }
    // 제품 썸네일 사진
    & .item-photo {
      width: 13.5rem;
      height: 17.5rem;
      position: relative;
      /* padding-top: 135%; */
      border: 0.05rem solid ${opacity.grayLight};
      overflow: hidden;
      isolation: isolate;
      & > img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        padding: 0.5rem;
        object-fit: contain;
      }
    }
    // 제품 설명
    & .item-desc {
      width: 35rem;
      margin: 2rem 0 0.5rem 2rem;

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
          width: 4.5rem;
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
          cursor: pointer;
        }
      }
      & > .maxitem-notice {
        height: 1.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1rem;
        color: red;
        margin: 0.3rem 0 0 0;
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
  margin-top: 3rem;
  & span {
    position: relative;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${Maincolor.black};
  }
  & p {
    color: ${Maincolor.black};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2rem;
    margin-left: 0.2rem;
    padding-bottom: 0.5rem;
  }

  button {
    margin: 1rem 0 2rem 0;
    &:last-child {
      margin-bottom: 6.5rem;
    }
    svg {
      margin-right: 1rem;
    }
  }
`;

export const ProductSellErrors = styled.div`
  height: 2rem;
  text-align: center;
  margin-top: 3rem;

  & > p {
    color: ${Maincolor.redBold};
    font-size: 1.6rem;
    font-weight: 700;
    & > svg {
      margin-right: 0.5rem;
    }
  }
`;
