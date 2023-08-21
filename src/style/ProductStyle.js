/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, badge, ellipsis, opacity } from "./GlobalStyle";

// 상품 리스트 아이템 스타일링
export const ProductListItem = styled.div`
  .img {
    position: relative;
    background: ${Maincolor.white};
    border: 0.05rem solid ${opacity.white};
    padding-top: 135%;
    overflow: hidden;
    isolation: isolate;
    & > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 15px;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      display: block;
      width: 40px;
      height: 33px;
      background: ${opacity.wine};
      border-radius: 20px 0 0;
      transition: background 0.2s ease-in-out;
      &:hover {
        background: ${Maincolor.redDeep};
      }
    }
  }
  .txt {
    margin-top: 15px;
    .badge {
      display: flex;
      flex-wrap: wrap;
      min-height: 2.3rem;
      margin-left: -2px;
      margin-bottom: 5px;
      span {
        display: inline-block;
        font-size: 1.1rem;
        color: ${Maincolor.white};
        font-weight: 400;
        padding: 4px 5px 3.5px;
        margin: 2px;
        border-radius: 3px;
        &.recommend {
          background: ${badge.pink};
        }
        &.beginner {
          background: ${badge.green};
        }
      }
    }
    .title {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 10px;
      min-height: 3.22rem;
      ${ellipsis.two}
    }
    .price {
      li {
        font-size: 1.4rem;
        span {
          display: inline-block;
        }
        &.top {
          color: ${Maincolor.redBold};
          margin-bottom: 2px;
          span {
            font-size: 1.3em;
            font-weight: 700;
          }
        }
        &.bottom {
          span {
            text-decoration: line-through;
            color: ${Maincolor.grayBold};
          }
        }
      }
    }
  }
`;
// 상품 리스트 아이템 존재하지 않음
export const NotProductListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  height: 30vh;
  margin-bottom: 20px !important;
  & > div {
    font-size: 1.8rem;
    color: ${Maincolor.grayBold};
    text-align: center;
    i {
      display: block;
      margin-bottom: 10px;
      font-size: 2em;
    }
    p {
    }
  }
`;
