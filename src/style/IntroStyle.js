/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Maincolor, opacity } from "./GlobalStyle";

// 인트로 화면
export const IntroWrap = styled(motion.div)`
  position: relative;
  height: 100vh;
  & > div {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
    }
  }
  p {
    position: absolute;
    bottom: 10vh;
    width: 100%;
    font-size: 1.4rem;
    color: ${opacity.grayDeep};
    text-align: center;
    span {
      font-weight: 700;
      font-size: 1.3em;
      margin-left: 2px;
    }
  }
`;
// 성인인증 화면
export const AdultChkWrap = styled(motion.div)`
  position: relative;
  background: url(/images/adult_chk_img.jpg) center no-repeat;
  height: 100vh;
  div {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    width: 80%;
    border-radius: 10px;
    backdrop-filter: blur(3px);
    padding: 50px 30px;
    ul {
      width: 100%;
      font-size: 1.8rem;
      text-align: center;
      li {
        &:nth-of-type(1) {
          font-weight: 700;
          i {
            display: block;
            font-size: 1.8em;
            margin-bottom: 5px;
          }
        }
        &:nth-of-type(2) {
          display: flex;
          align-items: center;
          margin: 20px 0 10px;
          button:nth-of-type(1) {
            margin-right: 5px;
          }
        }
        &:nth-of-type(3) {
          font-size: 0.8em;
        }
      }
    }
  }
  & > img {
    position: absolute;
    left: 50%;
    bottom: 4vh;
    transform: translateX(-50%);
    display: block;
    width: 100px;
  }
`;
