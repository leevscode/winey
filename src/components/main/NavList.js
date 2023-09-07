import React from "react";
import { NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { NavListWrap } from "../../style/MainStyle";

const NavList = () => {
  return (
    <NavListWrap>
      <Swiper slidesPerView={"auto"}>
        <SwiperSlide>
          <NavLink to="/productlist/red">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_redwine.svg`}
              alt="레드와인"
            />
            <span>레드</span>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/productlist/white">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_whitewine.svg`}
              alt="화이트와인"
            />
            <span>화이트</span>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/productlist/spakling">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_spakling.svg`}
              alt="스파클링와인"
            />
            <span>스파클링</span>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/productlist/etc">
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_etcwine.svg`}
              alt="기타와인"
            />
            <span>기타</span>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to="/productlist/sale">
            <i>N</i>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon_salewine.svg`}
              alt="이달의 할인"
            />
            <span>🍷&nbsp;이달의 할인&nbsp;🍷</span>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </NavListWrap>
  );
};

export default NavList;
