import React from "react";
import { MainTitle, RecommWineWrap } from "../../style/MainStyle";
import RecommWineSlide from "./RecommWineSlide";

const RecommWine = () => {
  return (
    <RecommWineWrap>
      {/* 맞춤 와인 타이틀 */}
      <MainTitle>
        <h2>
          <span>당신을 위한</span>
          <p>
            <span>
              <i>
                <img src="https://via.placeholder.com/7x17" alt="와인아이콘" />
              </i>
              맞춤 와인 추천
            </span>
          </p>
        </h2>
      </MainTitle>
      {/* 맞춤 와인 내용 */}
      <RecommWineSlide />
    </RecommWineWrap>
  );
};

export default RecommWine;
