/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { Maincolor, WidthPd, opacity } from "./GlobalStyle";

// 헤더
export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 560px;
  width: 100%;
  height: 6rem;
  /* background: ${Maincolor.white}; */
  background: ${props => (props.mainBgc ? "transparent" : Maincolor.white)};
  border-bottom: 0.05rem solid
    ${props => (props.mainBgc ? opacity.whiteB : opacity.white)};
  &.active {
    transition: 0.2s ease-in-out;
    background: ${Maincolor.white};
    border-color: ${opacity.white};
    button {
      & > img {
        &:first-of-type {
          display: block;
        }
        &:last-of-type {
          display: none;
        }
      }
    }
    a {
      img {
        &:first-of-type {
          display: block;
        }
        &:last-of-type {
          display: none;
        }
      }
    }
  }
  button {
    & > img {
      width: 19px;
      &:first-of-type {
        display: ${props => (props.mainBgc ? "none" : "block")};
      }
      &:last-of-type {
        display: ${props => (props.mainBgc ? "block" : "none")};
      }
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${WidthPd.padding};
    height: 100%;
    & > li {
      a {
        display: block;
        img {
          max-width: 90px;
          width: 100%;
          &:first-of-type {
            display: ${props => (props.mainBgc ? "none" : "block")};
          }
          &:last-of-type {
            display: ${props => (props.mainBgc ? "block" : "none")};
          }
        }
      }
      ol {
        display: flex;
        align-items: center;
        li {
          .cart {
            position: relative;
            span {
              display: inline-block;
              position: absolute;
              bottom: -5px;
              right: -5px;
              width: 1.5rem;
              height: 1.5rem;
              line-height: 1.5rem;
              background: ${Maincolor.redBold};
              color: ${Maincolor.white};
              border-radius: 100%;
            }
          }
        }
        li:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

// 네비게이션 메뉴
export const NavWrap = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  max-width: 560px;
  width: 100%;
  height: 100%;
  background: ${Maincolor.beige};
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Maincolor.white};
    padding: ${WidthPd.padding};
    height: 6rem;
    border-bottom: 0.05rem solid ${opacity.whiteB};
    & > li {
      a {
        display: block;
        img {
          max-width: 90px;
          width: 100%;
        }
      }
      button {
        font-size: 2.2rem;
        color: ${Maincolor.black};
      }
    }
  }
  .middle {
    background: ${Maincolor.beige};
    ul {
      padding-top: 30px;
      & > li {
        a {
          display: block;
          font-family: "GyeonggiBatang";
          font-size: 1.8rem;
          font-weight: 700;
          text-align: center;
          padding: 20px 0;
          transition: 0.2s ease-in-out;
          &:hover {
            color: ${Maincolor.redBold};
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: ${Maincolor.white};
    height: 6rem;
    border-top: 0.05rem solid ${opacity.whiteB};
    & > li {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 10px;
        background: ${opacity.gray};
        transform: translateY(-50%);
      }
      &:last-of-type::after {
        display: none;
      }
      a {
        font-size: 1.4rem;
        margin: 0 20px;
      }
    }
  }
`;
// 푸터
export const FooterWrap = styled.footer`
  background: linear-gradient(
    0deg,
    rgba(252, 248, 241, 1) 66%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 70px 0 100px;
  ul {
    padding: ${WidthPd.padding};
    text-align: center;
    & > li {
      color: ${opacity.grayDeep};
      img {
        width: 80px;
      }
      ol {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0 20px;
        & > li {
          width: 0.4rem;
          height: 0.4rem;
          margin: 0 3px;
          background: ${opacity.grayDeep};
          transform: rotate(45deg);
          &:nth-of-type(1) {
          }
          &:nth-of-type(2) {
            width: 0.6rem;
            height: 0.6rem;
          }
          &:nth-of-type(3) {
          }
        }
      }
      a {
        display: inline-block;
        position: relative;
        font-size: 1.4rem;
        &::after {
          content: "";
          display: none;
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 0.1rem;
          background: ${opacity.grayDeep};
        }
        &:hover::after {
          display: block;
        }
      }
      p {
        margin-top: 10px;
        font-size: 1.2rem;
        font-weight: 500;
        span {
          font-weight: 700;
          font-size: 1.3em;
          margin-left: 2px;
        }
      }
    }
  }
`;

// 퀵메뉴
export const QuickWrap = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  max-width: 558px;
  width: 100%;
  height: 6rem;
  background: ${Maincolor.white};
  box-shadow: 0px 3px 20px -7px ${opacity.gray};
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${WidthPd.padding};
    width: 85%;
    height: 100%;
    margin: 0 auto;
    & > li {
      a {
        display: block;
        font-size: 2.2rem;
        color: ${Maincolor.black};
        transition: 0.2s ease-in-out;
        img {
          display: block;
          width: 17px;
          &:last-of-type {
            display: none;
          }
        }
        &:hover {
          color: ${Maincolor.redBold};
          img:first-of-type {
            display: none;
          }
          img:last-of-type {
            display: block;
          }
        }
      }
    }
  }
`;

// 화면 상단으로 이동
export const ScrollTopBtn = styled.div`
  position: fixed;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  width: 100%;
  max-width: 560px;
  height: 0;
  button {
    background: ${Maincolor.white};
    font-size: 1.8rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 100%;
    box-shadow: 0px 0px 15px -7px ${opacity.gray};
    float: right;
    margin-right: 15px;
    border: 0.05rem solid ${opacity.white};
    i {
      color: ${Maincolor.black};
    }
  }
`;

// 컨텐츠
export const ContentsWrap = styled.div`
  padding-top: 80px;
  min-height: calc(100vh - 350px);
`;
