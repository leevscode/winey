import React from "react";
import { v4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { QuickProductListWrap } from "../style/ProductListStyle";

const QuickProductList = ({ categoryMenu }) => {
  return (
    <QuickProductListWrap>
      <Swiper slidesPerView={"auto"}>
        {categoryMenu.map((item, index) => (
          <SwiperSlide key={v4()}>
            <button>{item.title}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </QuickProductListWrap>
  );
};

export default QuickProductList;
