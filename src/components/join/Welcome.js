import React from "react";
import { LetsChoice, WelcomeWrap } from "../../style/KeywordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  return (
    <WelcomeWrap>
      <FontAwesomeIcon icon={faCircleCheck} />
      <p>회원가입이 완료되었습니다!</p>

      <LetsChoice>
        <FontAwesomeIcon icon={faDiamond} />
        <FontAwesomeIcon icon={faDiamond} />
        <FontAwesomeIcon icon={faDiamond} />
      </LetsChoice>
    </WelcomeWrap>
  );
};

export default Welcome;
