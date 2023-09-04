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
      span {
        font-size: 1.25em;
        font-weight: 700;
        color: ${Gradation.wineE};
      }
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
    & > div {
      margin: 0;
      .ant-select {
        width: 180px;
      }
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
  & > form > div {
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
`;

// 상품 등록하기 폼 내부 버튼
export const ProductFormBtn = styled.button`
  background: pink;
  display: block;
  font-size: 1.4rem;
  height: 30px;
  padding: 0 10px;
  background: ${Maincolor.white};
  border: 0.05rem solid rgb(217, 217, 217, 0.95);
  color: ${Maincolor.black};
  border-radius: 5px;
  margin-left: 5px;
  transition: 0.2s ease-in-out background;
  &:hover {
    background: ${AdminColor.contentsColorHoverC};
  }
`;

// 상품 등록하기 - 상품 등록 버튼
// 상품 등록 버튼
export const ProductSubmitWrap = styled.div`
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
`;

// 상품 등록하기 - 상품명
export const ProductNameWrap = styled.div`
  & > ul {
    & > li {
      align-items: inherit !important;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
        .notice {
          font-size: 1.3rem;
          line-height: 1;
          color: red;
          margin-top: 5px;
        }
      }
    }
  }
`;
// 상품 등록하기 - 가격
export const ProductPriceWrap = styled.div`
  & > ul {
    & > li {
      align-items: inherit !important;
      gap: 0 10px;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .content {
        width: 250px;
        .ant-form-item {
          label {
            display: none;
          }
          .ant-form-item-control-input-content {
            display: flex;
            align-items: center;
            .ant-input-number {
              width: 150px;
              margin-right: 5px;
            }
          }
        }
        .notice {
          font-size: 1.3rem;
          line-height: 1;
          color: red;
          margin-top: 5px;
        }
      }
      // 할인율 영역
      .sale-price-content {
        .ant-form-item-control-input-content {
        }
        .input-wrap {
          .ant-input-number {
            max-width: 55px;
          }
        }
      }
    }
  }
`;
// 상품 등록하기 - 할인기간설정
export const ProductSaleDateWrap = styled.div`
  & > ul {
    & > li {
      align-items: normal !important;
      gap: 0 !important;
      .title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .content {
        width: calc(100% - 130px);
        padding: 0;
        ol {
          & > li {
            display: flex;
            padding: 10px 0;
            padding-left: 10px;
            gap: 0 20px;
            border-bottom: 0.05rem solid ${opacity.white};
            &:nth-of-type(1) {
              .ant-form-item-control {
                label {
                  width: auto;
                }
              }
            }
            &:nth-of-type(2) {
              .ant-form-item {
                &:first-of-type {
                  .ant-input-number {
                    width: 50px;
                  }
                }
                &:last-of-type {
                  .ant-input-number {
                    width: 150px;
                  }
                }
              }
            }
            &:last-of-type {
              border-bottom: 0;
            }
            .ant-form-item {
              label {
                width: 100px;
              }
              .ant-input-number {
                margin-right: 5px;
              }
            }
          }
        }
        .ant-form-item {
          /* width: calc(100% / 2); */
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
  }
`;
// 상품 등록하기 - 원산지
export const ProductCountryWrap = styled.div``;
// 상품 등록하기 - 와인 종류
export const ProductWineWrap = styled.div``;
// 상품 등록하기 - 도수
export const ProductAddAlcoholWrap = styled.div`
  & > ul {
    & > li {
      .content {
        .ant-form-item {
          .ant-form-item-control-input-content {
            display: flex;
            align-items: center;
            .ant-input-number {
              width: 60px;
              margin: 0 5px;
            }
          }
        }
      }
    }
  }
`;
// 상품 등록하기 - 당도
export const ProductSweetyWrap = styled.div``;
// 상품 등록하기 - 산도
export const ProductAcidityWrap = styled.div``;
// 상품 등록하기 - 바디
export const ProductBodyWrap = styled.div``;
// 상품 등록하기 - 향(아로마)
export const ProductAromaWrap = styled.div``;
// 상품 등록하기 - 페어링음식
export const ProductFairingWrap = styled.div``;
// 상품 등록하기 - 추천유무
export const ProductPromotionWrap = styled.div``;
// 상품 등록하기 - 재고수량
export const ProductQuantityWrap = styled.div`
  & > ul {
    & > li {
      .content {
        .ant-form-item {
          .ant-form-item-control-input-content {
            display: flex;
            align-items: center;
            .ant-input-number {
              width: 80px;
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
`;
// 상품 등록하기 - 상품이미지업로드
export const ProductImageWrap = styled.div`
  & > ul {
    & > li {
      .content {
        position: relative;
        width: calc(100% - 130px - 10px);
        .ant-upload-list {
          position: absolute;
          left: 105px;
          overflow: hidden;
          .ant-upload-list-item-container {
            transition: all 0.3s;
          }
        }
      }
    }
  }
`;
