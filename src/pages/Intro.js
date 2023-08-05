import React, { useEffect, useState } from "react";
import { LayoutWrap } from "../style/LayoutStyle";
import { IntroWrap } from "../style/IntroStyle";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

const Intro = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const introTimeOut = setTimeout(() => {
      navigate("/adultchk");
    }, 3500);
    return () => clearTimeout(introTimeOut);
  }, []);

  return (
    <AnimatePresence>
      <LayoutWrap>
        {/* 인트로 화면 */}
        <IntroWrap
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
          }}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo_intro.svg`}
              alt="winey"
            />
          </div>
          <p>
            Product by.<span>PODOJect</span>
          </p>
        </IntroWrap>
      </LayoutWrap>
    </AnimatePresence>
  );
};

export default Intro;
