/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { LevelWrap } from "../../style/ProductDetailStyle";
import { getFeature } from "../../api/patchproduct";

const WineLevel = ({ productDetail, iproduct }) => {
  // console.log("현재 페이지 param", iproduct);
  // 입문 난이도 state
  const [feature, setFeature] = useState();
  useEffect(() => {
    getFeature(setFeature, iproduct);
  }, [productDetail]);
  console.log("입문 난이도", feature);
  return (
    <LevelWrap feature={feature}>
      <ul>
        <li className="component-title">
          <i>
            <FontAwesomeIcon icon={faSeedling} />
          </i>
          입문 난이도
        </li>
        <li>
          <div className="component-bar"></div>
          <ol className="component-bar-text">
            <li>
              <span>Lv.1</span>
              <p>첫 와인으로 괜찮아요</p>
            </li>
            <li>
              <span>Lv.2</span>
              <p>색다른 와인으로 추천해요</p>
            </li>
            <li>
              <span>Lv.3</span>
              <p>특별한 경험으로 좋아요</p>
            </li>
          </ol>
        </li>
      </ul>
    </LevelWrap>
  );
};

export default WineLevel;
