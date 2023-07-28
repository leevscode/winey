import styled from "@emotion/styled";
import { Maincolor, WidthPd } from "./GlobalStyle";

export const PurchaseWrap = styled.div`
  padding: ${WidthPd.padding};
`;

export const PickupPlaceClickWrap = styled.div`
  & div {
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
      padding-bottom: 1rem;
    }

    & .store {
      background: ${Maincolor.beige};
      padding: 1rem;

      .swiper-slide {
        position: relative;
        background: ${Maincolor.white};
        width: 13rem;
        height: 8rem;
        padding: 1.3rem;
        margin: 0.4rem;
        border: 0.1rem solid ${Maincolor.white};
        border-radius: 0.5rem;
      }
      .swiper-button-prev {
        &::after {
          font-size: 1.5rem;
        }
      }
      .swiper-button-next::after {
        font-size: 1.5rem;
      }

      & label {
        position: relative;
        background: ${Maincolor.white};
        width: 13rem;
        height: 8rem;
        padding: 1.3rem;
        margin: 0.4rem;
        border: 0.1rem solid ${Maincolor.white};
        border-radius: 0.5rem;
        & span {
          position: absolute;
          top: 0;
          left: 1.7rem;
          font-size: 1.2rem;
          font-weight: 400;
        }
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
