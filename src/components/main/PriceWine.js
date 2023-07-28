import React from "react";
import { MainTitle } from "../../style/MainStyle";

const PriceWine = () => {
  return (
    <div>
      {/* 타이틀 */}
      <MainTitle>
        <h2>
          <span>합리적인 가격, 우수한 품질</span>
          <p>
            <span className="clearfix">
              <i></i>가격별 추천 와인<i></i>
            </span>
          </p>
        </h2>
      </MainTitle>
    </div>
  );
};

export default PriceWine;
