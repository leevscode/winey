/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
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
  //
  const visualSlide = [
    {
      subtitle: "와인이 처음인 당신을 위한",
      title: "와인 가이드",
      link: "/windeguide",
      image: "/images/visual_img_1.jpg",
    },
  ];
  return (
    <VisualWrap>
      <Swiper pagination={pagination} modules={[Pagination]}>
        {visualSlide.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <VisualText>
              <div>
                <span>{item.subtitle}</span>
                <p>{item.title}</p>
                <Link to={item.link}>
                  자세히 보기
                  <i>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                </Link>
              </div>
            </VisualText>
          </SwiperSlide>
        ))}
      </Swiper>
    </VisualWrap>
  );
};

export default Visual;
