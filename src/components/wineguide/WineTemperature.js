import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { WineTemperatureWrap } from "../../style/WineGuideStyle";

const WineTemperature = () => {
  return (
    <WineTemperatureWrap>
      <div>
        <div>
          <span className="redwine">레드 와인</span>
        </div>
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            여름일 경우 마시기 20분 전 미리 꺼내놓아요. (15-20도)
          </li>
        </ul>
      </div>
      <div>
        <div>
          <span className="whitewine">화이트 와인</span>
          <span className="rosewine">로제 와인</span>
        </div>
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            1시간 정도(10-14도) 냉장고에 넣어두었다 마시는 것이 좋아요.
          </li>
        </ul>
      </div>
      <div>
        <div>
          <span className="spaklingwine">스파클링 와인</span>
        </div>
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            차갑게 먹는 것이 가장 좋아요. (6-10 도)
          </li>
        </ul>
      </div>
    </WineTemperatureWrap>
  );
};

export default WineTemperature;
