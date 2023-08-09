/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { LetsChoice, WelcomeWrap } from "../../style/KeywordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";
import { ButtonOk } from "../../style/GlobalStyle";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <WelcomeWrap>
      <FontAwesomeIcon icon={faCircleCheck} />
      <h3>회원가입이 완료되었습니다!</h3>

      <LetsChoice>
        <div>
          <FontAwesomeIcon icon={faDiamond} />
          <strong>
            <FontAwesomeIcon icon={faDiamond} />
          </strong>
          <FontAwesomeIcon icon={faDiamond} />
        </div>
        <h4>
          <strong>로그인</strong> 후 <strong>와인 선호 키워드</strong>를
          설정해주세요.
        </h4>
        <h5>
          선호 키워드를 입력하시면 <br />
          취향에 맞는 와인을 추천해드리겠습니다.
        </h5>
      </LetsChoice>

      <ButtonOk>
        <Link to="/login">로그인 하러 가기</Link>
      </ButtonOk>
    </WelcomeWrap>
  );
};

export default Welcome;
