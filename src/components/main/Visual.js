import React from "react";
import { Link } from "react-router-dom";
import { VisualText, VisualWrap } from "../../style/MainStyle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Visual = () => {
  const pagination = {
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        (index < 9 ? "0" : "") +
        (index + 1) +
        "</span>"
      );
    },
  };
  return (
    <VisualWrap>
      <Swiper pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <VisualText>
            <div>
              <span>와인이 처음인 당신을 위한</span>
              <p>와인 가이드</p>
              <Link to="/windeguide">
                자세히 보기
                <i>
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
              </Link>
            </div>
          </VisualText>
        </SwiperSlide>
        <SwiperSlide>
          <VisualText>
            <div>
              <span>와인이 처음인 당신을 위한</span>
              <p>와인 가이드</p>
              <Link to="/windeguide">
                자세히 보기
                <i>
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
              </Link>
            </div>
          </VisualText>
        </SwiperSlide>
      </Swiper>
    </VisualWrap>
  );
};

export default Visual;
