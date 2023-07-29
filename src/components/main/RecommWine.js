/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { RecommWineTitle, RecommWineWrap } from "../../style/MainStyle";
import RecommWineSlide from "./RecommWineSlide";

const RecommWine = () => {
  return (
    <RecommWineWrap>
      {/* 맞춤 와인 타이틀 */}
      <RecommWineTitle>
        <h2>
          <span>당신을 위한</span>
          <p>
            <span>
              <i>
                <img src="https://via.placeholder.com/7x17" alt="와인아이콘" />
              </i>
              입문용 와인 추천
            </span>
          </p>
        </h2>
      </RecommWineTitle>
      {/* 맞춤 와인 내용 */}
      <RecommWineSlide />
    </RecommWineWrap>
  );
};

export default RecommWine;
