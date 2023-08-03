/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import NoImage from "../../assets/no_image.jpg";
import { InfoWrap } from "../../style/ProductDetailStyle";

const WineInfo = () => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };

  return (
    <InfoWrap>
      <div className="img">
        {/* 상품 이미지 */}
        <img
          src="https://via.placeholder.com/300x389"
          alt=""
          onError={onImgError}
        />
      </div>
      <div className="txt">
        <div className="title-wrap">
          <ul>
            {/* 와인 종류 */}
            <li>레드와인</li>
            {/* 원산지 */}
            <li>프랑스</li>
          </ul>
          {/* 상품명 */}
          <h2>
            상품이름
            <span>Ultime Recolte By Jeff Carrel</span>
          </h2>
        </div>
        <div className="price-wrap">
          <div className="price">
            <ul>
              <li>
                {/* 판매가 */}
                <span>32900</span>원
              </li>
              <li>
                {/* 원가 */}
                34545원
              </li>
            </ul>
          </div>
          {/* 할인율 */}
          <div className="percent">5%</div>
        </div>
      </div>
    </InfoWrap>
  );
};

export default WineInfo;
