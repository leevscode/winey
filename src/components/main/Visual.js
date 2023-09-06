/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { VisualText, VisualWrap } from "../../style/MainStyle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Visual = () => {
  // slide pagination 숫자 01, 02 처리
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
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        speed={800}
        autoplay={{ delay: 3500 }}
      >
        <SwiperSlide
          style={{ backgroundImage: "url(/images/visual_img_1.jpg)" }}
        >
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
        <SwiperSlide
          style={{ backgroundImage: "url(/images/visual_img_2.jpg)" }}
        >
          <VisualText>
            <div>
              <span>
                가을의 매력을
                <br />
                와인 한 잔과 함께 느껴보세요.
              </span>
              <p>9월의 할인 상품</p>
              <Link to="/">
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
