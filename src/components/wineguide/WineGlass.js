import React from "react";
import { WineGlassWrap } from "../../style/WineGuideStyle";

const WineGlass = () => {
  return (
    <WineGlassWrap>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon_redwine.svg`}
            alt="레드 와인"
          />
        </li>
        <li>
          <span className="redwine">레드 와인</span>
          <p>
            가장 대중적인 와인 잔. 입구 경사각이 완만한 잔을 고르면 와인 향을
            더욱 풍성하게 하며, 텁텁함을 줄여줍니다.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon_whitewine.svg`}
            alt="화이트 와인"
          />
        </li>
        <li>
          <span className="whitewine">화이트 와인</span>
          <p>
            차갑게 마시는 특성이 있어 온도가 올라가지 않도록 보울이 좁은 잔을
            사용합니다.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon_spakling.svg`}
            alt="스파클링 와인"
          />
        </li>
        <li>
          <span className="spaklingwine">스파클링 와인</span>
          <p>
            기포와 향을 오래 지속 시킬 수 있도록 입구와 보울이 좁고 길쭉한
            형태의 잔을 선택합니다.
          </p>
        </li>
      </ul>
    </WineGlassWrap>
  );
};

export default WineGlass;
