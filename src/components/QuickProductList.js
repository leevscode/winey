import React from "react";
import { v4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { QuickProductListWrap } from "../style/ProductListStyle";
import { NavLink } from "react-router-dom";

const QuickProductList = ({ categoryMenu }) => {
  return (
    <QuickProductListWrap>
      <Swiper slidesPerView={"auto"}>
        {categoryMenu.map((item, index) => (
          <SwiperSlide key={v4()}>
            <NavLink
              to={`/productmain/${item.icate}/${item.ititle}`}
              className={({ isActive }) => {
                return isActive ? "active" : "";
              }}
            >
              {item.title}
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </QuickProductListWrap>
  );
};

export default QuickProductList;
