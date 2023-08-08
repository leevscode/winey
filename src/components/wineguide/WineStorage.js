import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { WineStorageWrap } from "../../style/WineGuideStyle";
import { SectionLine } from "../../style/GlobalStyle";

const WineStorage = () => {
  return (
    <WineStorageWrap>
      <div>
        <span>개봉 전</span>
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            서늘하고 일정한 온도 (10-15도)를 유지해주세요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            어둡고 직사광선 없는 곳에 보관해주세요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            습도가 높은 곳 일수록 좋아요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            진동과 냄새가 없는 곳이 좋아요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            코르크 마개가 건조해지지 않도록 눕혀서 보관해요.
          </li>
        </ul>
      </div>
      <SectionLine />
      <div>
        <span>개봉 후</span>
        <ul>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            마개가 있는 작은 병에 옮겨 담아 보관해주세요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            와인 스토퍼나 실리콘 마개로 밀봉 하여 보관해주세요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            냉장 보관 시 야채 칸을 이용하며, 빛에 노출되지 않게 수건이나
            신문지로 감싸는 것이 좋아요.
          </li>
          <li>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
            이미 개봉한 와인은 최대 3-4일 내에 마시는 것이 좋아요.
          </li>
        </ul>
      </div>
    </WineStorageWrap>
  );
};

export default WineStorage;
