/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, badge, opacity } from "./GlobalStyle";

// 상품 상세페이지 전체
export const ProductDetailWrap = styled.div`
  & > section {
    padding: ${WidthPd.padding};
  }
`;
// 상품 이미지, 와인 종류, 원산지, 이름, 가격정보
export const InfoWrap = styled.section`
  .img {
    position: relative;
    background: ${Maincolor.white};
    border: 0.05rem solid ${opacity.grayLight};
    padding-top: 80%;
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
  .txt {
    margin: 20px 0 15px;
    .title-wrap {
      ul {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        margin-bottom: 10px;
        li {
          position: relative;
          padding-right: 10px;
          margin-right: 8px;
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            width: 1px;
            height: 8px;
            background: ${Maincolor.grayBold};
          }
          &:last-of-type {
            padding-right: 0;
            margin-right: 0;
          }
          &:last-of-type::after {
            display: none;
          }
        }
      }
      h2 {
        font-size: 2.4rem;
        font-weight: 700;
        span {
          display: block;
          font-size: 0.65em;
          font-weight: 500;
          color: ${Maincolor.grayBold};
        }
      }
    }
    .price-wrap {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-top: 15px;
      .price {
        ul {
          display: flex;
          align-items: flex-end;
          font-size: 1.8rem;
          li:first-of-type {
            font-weight: 700;
            margin-right: 8px;
            color: ${Maincolor.redBold};
            span {
              font-size: 1.5em;
              font-weight: 900;
            }
          }
          li:last-of-type {
            text-decoration: line-through;
            color: ${Maincolor.grayBold};
          }
        }
      }
      .percent {
        font-size: 3.4rem;
        font-weight: 900;
        color: ${badge.pink};
      }
    }
  }
`;
// 당도, 산도, 바디
export const DetailInfoWrap = styled.section``;
// 입문 난이도
export const LevelWrap = styled.section``;
// 페어링, 아로마, 음용온도

// 와인 평점

// 상품 정보
