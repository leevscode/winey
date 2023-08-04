/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import styled from "@emotion/styled";
import { motion } from "framer-motion";

// 인트로 화면
export const IntroWrap = styled(motion.div)`
  height: 100vh;
  font-size: 80px;
  button {
    font-size: 50px;
    background: white;
  }
`;
// 성인인증 화면
export const AdultChkWrap = styled(motion.div)`
  background: blueviolet;
  height: 100vh;
  font-size: 80px;
`;
