/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "../../style/GlobalStyle";
import { AdminColor } from "./AdminLayoutStyle";
import exp from "constants";

export const StoreAddWrap = styled.div`
  /* padding: ${WidthPd.padding}; */
  margin: 0 auto;
  .addButton {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    gap: 0 5px;
    background: ${Maincolor.white};
    border-bottom: 0.05rem solid ${opacity.white};
    padding-bottom: 10px;
    & > button {
      /* margin: 0 1rem; */
    }
  }
  .storeAddForm {
    /* margin-top: 5rem; */    
    & > ul {
      display: flex;
      justify-content: center;
      gap: 0 10px;
      border-bottom: 0.05rem solid ${opacity.white};
      /* align-items: center; */
      & > li{
        padding: 10px 0;
      }
      .title {
        width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${AdminColor.headColorD};
        font-weight: 700;
      }
      .content {
        width: calc(100% - 130px - 10px);
      }  
      /* & li:first-of-type {
        /* width: 20%; */
        /* height: 8rem; */
        /* line-height: 8rem; */
        text-align: center;
      }
      & li:last-of-type {
        border: 1px soild ${AdminColor.headColorD};
        /* padding: 2.5rem 2rem; */
        /* width: 75%; */
        /* height: 8rem; */
        & > p {
          color: #ff4d4f;
        }
        & > div {
          margin: 0;
        }
      } */
      .errorString {
        font-size: 1.4rem;
        color: red;
      }
      .storeAddressSt {
        div {
          display: flex;
          /* justify-content: center; */
          & > input:first-of-type {
            width: 70%;
            margin-right: 1rem;
          }
          .storeAddressSub {
            width: 30%;
            margin-right: 1rem;
          }
          .css-1h3mxnl {
            width: 12rem;
            font-size: 1.4rem;
          }
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

export const EditStoreWrap = styled.div`
  & li {
    height: 5rem;
    padding-right: 1rem;
    line-height: 2rem;
  }
  .cityEditSty {
    & span {
      margin-right: 1rem;
    }
  }
  & .noItem {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 7rem;
    text-align: center;
    color: ${Maincolor.grayBold};
  }
`;
