import React, { useState } from "react";
import { PickupPlaceClickWrap } from "../../style/ProductSellStyle";
// import { ConfigProvider, Form, Radio } from "antd";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const PickupPlaceClick = () => {
  const [pickUpSpot, setPickUpSpot] = useState([]);

  const 임시데이터 = {
    city: ["대구"],
    store: ["성서점", "월배점", "만촌점", "칠성점", "반야월점"],
    time: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  };

  const handleChangePickSpot = value => {
    setPickUpSpot(value);
    console.log("pickUpSpot", pickUpSpot);
  };
  return (
    <PickupPlaceClickWrap>
      {/* 픽업지점 */}
      <div>
        <span>픽업지점 선택</span>
        <p>원하시는 픽업지점을 선택해 주세요</p>

        <div className="store">
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            navigation={true}
            modules={[Navigation]}
          >
            {임시데이터.store.map((option, index) => (
              <div key={index} value={option}>
                <SwiperSlide>
                  <button onClick={() => handleChangePickSpot(option)}>
                    {option}
                  </button>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </PickupPlaceClickWrap>
  );
};

export default PickupPlaceClick;
