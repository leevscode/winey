import React, { useState } from "react";
import { LayoutWrap } from "../style/LayoutStyle";
import { IntroWrap } from "../style/IntroStyle";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const Intro = () => {
  const navigate = useNavigate();
  // 인트로 화면 active 설정 state
  const [isActive, setIsActive] = useState(false);
  const handleOpenNav = e => {
    e.preventDefault();
    navigate("/adultchk");
    setIsActive(!isActive);
    // console.log("인트로화면", isActive);
  };
  return (
    <AnimatePresence>
      <LayoutWrap>
        {/* 인트로 화면 */}
        <IntroWrap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo_intro.svg`}
            alt="winey"
          />
          <button onClick={handleOpenNav}>테스트</button>
        </IntroWrap>
      </LayoutWrap>
    </AnimatePresence>
  );
};

export default Intro;
