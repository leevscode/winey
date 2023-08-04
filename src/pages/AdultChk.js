import React from "react";
import { LayoutWrap } from "../style/LayoutStyle";
import { AdultChkWrap } from "../style/IntroStyle";

const AdultChk = () => {
  return (
    <LayoutWrap>
      {/* 성인인증 화면 */}
      <AdultChkWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        성인인증
      </AdultChkWrap>
    </LayoutWrap>
  );
};

export default AdultChk;
