import React from "react";
import { v4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { QuickProductListWrap } from "../style/ProductListStyle";
import { useLocation } from "react-router-dom";

const QuickProductList = ({ categoryMenu, cateid, setCateid }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  // pathname에서 /productmain/ 는 제외처리
  const listPathName = pathname.slice(13);
  console.log(listPathName);
  return (
    <QuickProductListWrap>
      <Swiper slidesPerView={"auto"}>
        {categoryMenu.map((item, index) => (
          <SwiperSlide key={index + 1}>
            {listPathName === "price" ? (
              <button
                onClick={() => setCateid(item.ititle)}
                className={item.ititle === cateid ? "active" : null}
              >
                {item.title}
              </button>
            ) : (
              <button
                onClick={() => setCateid(item.ititle)}
                className={index + 1 === cateid ? "active" : null}
              >
                {item.title}
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </QuickProductListWrap>
  );
};

export default QuickProductList;
