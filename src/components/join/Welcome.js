/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React from "react";
import { LetsChoice, WelcomeWrap } from "../../style/KeywordStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  //임시 유저 네임
  const UserName = "User"

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
          마지막으로, {UserName}님의 <br />
          와인 선호 키워드를 설정해주세요.
        </h4>
        <h5>
          선호 키워드를 입력하시면 <br />
          취향에 맞는 와인을 추천해드리겠습니다.
        </h5>
      </LetsChoice>
    </WelcomeWrap>
  );
};

export default Welcome;
