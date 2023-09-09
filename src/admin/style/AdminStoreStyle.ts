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
    min-width: 900px;
    background: ${Maincolor.white};
    border-bottom: 0.05rem solid ${opacity.white};
    padding-bottom: 10px;
  }
  .storeAddForm {
    min-width: 900px;
    & > ul {
      display: flex;
      justify-content: center;
      & > li {
        padding: 10px 0;
      }
      .title {
        width: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${AdminColor.headColorD};
        color: ${Maincolor.black};
        font-weight: 700;
        border-bottom: 0.05rem solid ${opacity.white};
      }
      .content {
        width: calc(100% - 130px);
        border-bottom: 0.05rem solid ${opacity.white};
        padding-left: 10px;
        color: ${Maincolor.black};
        .ant-form-item {
          .ant-radio-group {
            display: flex;
            flex-wrap: wrap;
            .ant-radio-wrapper {
              color: ${Maincolor.black};
            }
          }
        }
      }
      &.store-name {
        .content {
          .ant-form-item {
            max-width: 300px;
          }
        }
      }
      &.store-address {
        .content {
          .ant-form-item {
            max-width: 600px;
          }
        }
      }
      &.store-tel {
        .content {
          .ant-form-item {
            max-width: 600px;
          }
        }
      }
    }
    & li:last-of-type {
      border: 1px soild ${AdminColor.headColorD};
      & > p {
        color: #ff4d4f;
      }
      & > div {
        margin: 0;
      }
    }
    .errorString {
      font-size: 1.4rem;
      color: red;
    }
    .storeAddressSt {
      div {
        display: flex;
        & > input:first-of-type {
          width: calc(100% - 150px - 100px);
          margin-right: 5px;
        }
        .storeAddressSub {
          width: 150px;
          margin-right: 5px;
        }
        .css-1h3mxnl {
          width: 100px;
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
