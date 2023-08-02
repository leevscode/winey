import React, { useState } from "react";
import { PickupPlaceClickWrap } from "../../style/ProductSellStyle";
// import { ConfigProvider, Form, Radio } from "antd";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const PickupPlaceClick = () => {
  const 임시데이터 = {
    city: ["대구"],
    store: [
      { pk: 11, title: "성서점", address: "대구 달서구 이곡동로 24" },
      { pk: 12, title: "월배점", address: "대구 달서구 진천로 92" },
      { pk: 13, title: "만촌점", address: "대구 수성구 동원로 13" },
      { pk: 14, title: "칠성점", address: "대구 북구 침산로 93 스펙트럼시티" },
      { pk: 15, title: "반야월점", address: "대구 동구 안심로 389-2" },
    ],
    date: ["07월 29일 토요일", "07월 30일 일요일", "07월 31일 월요일"],
    time: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  };

  // state
  const [pickUpSpot, setPickUpSpot] = useState([]);
  const [pickUpDate, setPickUpDate] = useState([]);
  const [pickUpTime, setPickUpTime] = useState([]);

  // 선택값 담기
  const [selectCollect, setSelectCollet] = useState([]);

  // 픽업장소 이벤트 핸들러
  const handleChangePickSpot = (option, e) => {
    e.preventDefault();
    console.log("pickUpSpot", pickUpSpot);
    setPickUpSpot(option);

    setSelectCollet({ pickUpTime, pickUpDate, pickUpSpot });
    console.log("selectCollect", selectCollect);
  };
  // 픽업날짜 이벤트 핸들러
  const handleChangePickDate = (option, e) => {
    e.preventDefault();
    console.log("pickUpDate", pickUpDate);
    setPickUpDate(option);

    setSelectCollet({ pickUpTime, pickUpDate, pickUpSpot });
    console.log("selectCollect", selectCollect);
  };

  // 픽업시간 이벤트 핸들러
  const handleChangePickTime = (option, e) => {
    e.preventDefault();
    console.log("pickUpTime", pickUpTime);
    setPickUpTime(option);

    setSelectCollet({ pickUpTime, pickUpDate, pickUpSpot });

    console.log("selectCollect", selectCollect);
  };

  return (
    <PickupPlaceClickWrap>
      {/* 픽업지점 */}
      <div>
        <span>픽업지점 선택</span>
        <p>원하시는 픽업지점을 선택해 주세요</p>
        <div className="store">
          <Swiper spaceBetween={18} slidesPerView={"auto"} loop={true}>
            {임시데이터.store.map(option => (
              <SwiperSlide key={option.pk}>
                <div onClick={e => handleChangePickSpot(option, e)}>
                  <button type="button" value={pickUpSpot}>
                    <b>{임시데이터.city}</b>
                    <br />
                    <strong>{option.title}</strong>
                    <p>{option.address}</p>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* 픽업날짜 */}
      <div>
        <span>픽업예정일</span>
        <p>원하시는 픽업예정일 선택해 주세요</p>

        <div className="date">
          {임시데이터.date.map((option, index) => (
            <div key={index} onClick={e => handleChangePickDate(option, e)}>
              <button type="button" value={pickUpDate}>
                {/* 날짜 */}
                <strong>{option.substring(0, 7)}</strong>
                {/* 요일 */}
                <p>{option.substring(8, 11)}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* 픽업예정시간 */}
      <div>
        <span>픽업시간</span>
        <p>픽업시간을 선택해 주세요</p>

        <div className="time">
          <Swiper spaceBetween={40} slidesPerView={"auto"} loop={false}>
            {임시데이터.time.map((option, index) => (
              <SwiperSlide key={index}>
                <div onClick={e => handleChangePickTime(option, e)}>
                  <button type="button" value={pickUpTime}>
                    <strong>{option}</strong>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </PickupPlaceClickWrap>
  );
};

export default PickupPlaceClick;
