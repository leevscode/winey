/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Gradation, Maincolor, opacity } from "../../../style/GlobalStyle";
import { AdminColor } from "../AdminLayoutStyle";

// ok 버튼
export const AdmProductBtnOk = styled.button`
  font-size: 1.4rem;
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  background: ${Gradation.wineE};
  color: ${Maincolor.white};
  border: 0.05rem solid ${opacity.grayLight};
`;
// cancel 버튼
export const AdmProductBtnCancel = styled.button`
  font-size: 1.4rem;
  width: 100px;
  padding: 10px 0;
  border-radius: 5px;
  background: ${Maincolor.white};
  color: ${Maincolor.black};
  border: 0.05rem solid ${opacity.grayLight};
`;

// 상품 리스트
export const AdmProductWrap = styled.div`
  .table-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
    font-size: 1.25rem;
    .total-count {
      color: ${Maincolor.grayDeep};
    }
    a {
      font-size: 1.4rem;
      width: 100px;
      padding: 10px 0;
      border-radius: 5px;
      text-align: center;
      background: ${Gradation.wineE};
      color: ${Maincolor.white};
      border: 0.05rem solid ${opacity.grayLight};
    }
  }
`;
// 리스트 페이징
export const ProductControlPaginateWrap = styled.div`
  /* margin-top: 20px; */
  text-align: center;
  .ant-select {
  }
`;
// 상품 등록하기
export const ProductAddAdmWrap = styled.div`
  // 공통
  .box {
    min-width: 900px;
    border-bottom: 0.05rem solid ${opacity.white};
    & > ul {
      & > li {
        display: flex;
        align-items: center;
        gap: 0 10px;
        & > div {
          padding: 10px 0;
        }
        .title {
          width: 130px;
          min-height: 32px;
          line-height: 32px;
          background: ${AdminColor.blueA};
          text-align: center;
          font-weight: 700;
          color: ${Maincolor.black};
        }
        .ant-radio-group,
        .ant-checkbox-group {
          & > ul {
            display: flex;
          }
        }
        .ant-upload-wrapper {
          display: flex;
          align-items: center;
          gap: 0 10px;
          .ant-upload-list-item {
            margin-top: 0;
          }
        }
      }
    }
    /* 안트디자인 스타일 초기화 */
    .ant-form-item {
      margin-bottom: 0;
      color: ${Maincolor.black};
      label {
        color: ${Maincolor.black};
      }
    }
  }
  // 상품 등록 버튼
  .product-submit-wrap {
    position: sticky;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    background: ${Maincolor.white};
    padding-bottom: 10px;
    .ant-form-item-control-input-content {
      & > ul {
        display: flex;
        justify-content: flex-end;
        gap: 0 5px;
      }
    }
  }
  // 상품명
  .product-name-wrap {
    & > ul {
      & > li {
        .content {
          display: flex;
          gap: 0 10px;
          width: calc(100% - 130px - 20px);
          .ant-form-item {
            width: calc(100% / 2);
            input {
              /* background: pink; */
            }
            label {
              /* display: inline-flex; */
              width: 55px;
            }
          }
        }
      }
    }
  }
  // 가격
  .product-price-wrap {
    & > ul {
      display: grid;
      grid-template-columns: 1.4fr 0.8fr 0.8fr;
      & > li {
        display: flex;
        align-items: center;
        gap: 0 10px;
        .content {
          /* display: flex; */
          /* gap: 0 10px; */
          width: calc(100% - 130px - 20px);
          .ant-form-item {
            /* width: calc(100% / 2); */
            label {
              display: none;
            }
            .ant-form-item-control-input-content {
              display: flex;
              align-items: center;
              .ant-input {
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
  // 할인기간설정
  .product-sale-wrap {
    & > ul {
      & > li {
        .content {
          width: calc(100% - 130px - 20px);
          .ant-form-item {
            /* width: calc(100% / 2); */
            label {
              display: none;
            }
            .ant-form-item-control-input-content {
              display: flex;
              align-items: center;
              .ant-input {
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
    /* 할인기간설정 달력 팝업 */
    .custom-popup {
      background: pink;
    }
  }
  // 재고수량설정
  .product-quantity-wrap {
    & > ul {
      & > li {
        .content {
          width: 150px;
          .ant-form-item {
            .ant-form-item-control-input-content {
              display: flex;
              align-items: center;
              .ant-input {
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
`;
