import styled from "@emotion/styled";
import { WidthPd, opacity } from "../../style/GlobalStyle";

export const StoreAddWrap = styled.div`
  padding: ${WidthPd.padding};
  & > div {
    text-align: right;
    margin-right: 5%;
    & > button {
      margin: 0 1rem;
    }
  }
  margin: 0 auto;
  & ul {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: 3rem;
    li {
      
    }
    & > li:first-of-type {
      width: 20%;
    }
    & > li:last-of-type {
      width: 70%;
    }
    .storeAddressSt {
      div {
        display: flex;
        justify-content: center;
        & > input {
          width: 100%;
          margin-right: 1rem;
        }
        .css-1h3mxnl {
          width: 12rem;
          font-size: 1.4rem;
        }
      }
    }
  }
`;
export const StoreAddressModal = styled.div`
  /* width: 100%; */
  width: 48rem;
  font-size: 1rem;
`;
