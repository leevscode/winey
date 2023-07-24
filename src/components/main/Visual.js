import React from "react";
import { Link } from "react-router-dom";
import { VisualWrap } from "../../style/MainStyle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Visual = () => {
  return (
    <VisualWrap>
      <Swiper>
        <SwiperSlide>
          <div className="txtbox">
            <div>
              <span>와인이 처음인 당신을 위한</span>
              <p>와인 가이드</p>
            </div>
            <Link to="/windeguide">
              자세히 보기
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </VisualWrap>
  );
};

export default Visual;
