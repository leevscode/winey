import React, { useEffect, useState } from "react";
import { PickupPlaceClickWrap } from "../../style/ProductSellStyle";
// import { ConfigProvider, Form, Radio } from "antd";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

const PickupPlaceClick = ({ userStore, selectCollect, setSelectCollect }) => {
  const pickTime = [
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ];

  // 픽업날짜(오늘 이후 3일 간)
  const first = new Date();
  const formatDate = date => {
    return date.toLocaleString("ko-KR", {
      weekday: "long",
      month: "2-digit",
      day: "2-digit",
    });
  };

  const dateArray = [];
  for (let i = 1; i <= 3; i++) {
    const tempDate = new Date(first);
    tempDate.setDate(first.getDate() + i);
    dateArray.push(formatDate(tempDate));
  }

  // select state
  const [sltStoreButton, setSltStoreButton] = useState(null);
  const [sltDateButton, setSltDateButton] = useState(null);
  const [sltTimeButton, setSltTimeButton] = useState(null);

  // 픽업장소,날짜,시간 state
  const [pickUpSpot, setPickUpSpot] = useState([]);
  const [pickUpDate, setPickUpDate] = useState([]);
  const [pickUpTime, setPickUpTime] = useState([]);

  // 픽업장소 이벤트 핸들러
  const handleChangePickSpot = (option, e) => {
    e.preventDefault();

    setPickUpSpot(option);
    setSelectCollect(prevState => ({
      ...prevState,
      pickUpSpot: option,
    }));

    setSltStoreButton(option.storeId);
  };

  // 픽업날짜 이벤트 핸들러
  const handleChangePickDate = (option, e, index) => {
    e.preventDefault();
    setPickUpDate(option);

    setSelectCollect(prevState => ({
      ...prevState,
      pickUpDate: option,
    }));

    setSltDateButton(index);
    console.log("sltDateButton", sltDateButton);
  };

  // 픽업시간 이벤트 핸들러
  const handleChangePickTime = (option, e, index) => {
    e.preventDefault();
    setPickUpTime(option);

    setSelectCollect(prevState => ({
      ...prevState,
      pickUpTime: option,
    }));

    setSltTimeButton(index);
  };

  useEffect(() => {
    console.log("selectCollect", selectCollect);
  }, [pickUpSpot, pickUpDate, pickUpTime]); // totalPayList 값이 변경될 때마다 실행

  return (
    <PickupPlaceClickWrap>
      {/* 픽업지점 */}
      <div>
        <span>픽업지점 선택</span>
        <p>원하시는 픽업지점을 선택해 주세요</p>
        <div className="store">
          <Swiper spaceBetween={18} slidesPerView={"auto"} loop={true}>
            {userStore.map(option => (
              <SwiperSlide key={option.storeId}>
                <div onClick={e => handleChangePickSpot(option, e)}>
                  <button
                    value={pickUpSpot}
                    className={
                      "btn" +
                      (option.storeId == sltStoreButton ? " activeStore" : "")
                    }
                  >
                    <b>{option.regionNm}</b>
                    <br />
                    <strong>{option.nm}</strong>
                    <p>{option.regionNm}</p>
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
          {dateArray.map((option, index) => (
            <div
              key={index}
              onClick={e => handleChangePickDate(option, e, index)}
            >
              <button
                value={pickUpDate}
                className={
                  "btn" + (index == sltDateButton ? " activeDate" : "")
                }
              >
                {/* 날짜 */}
                <strong>
                  {option.substring(0, 2)}월 {option.substring(3, 6)}일
                </strong>
                {/* 요일 */}
                <p>{option.substring(7, 11)}</p>
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
          <Swiper spaceBetween={35} slidesPerView={"auto"} loop={false}>
            {pickTime.map((option, index) => (
              <SwiperSlide key={index}>
                <div onClick={e => handleChangePickTime(option, e, index)}>
                  <button
                    value={pickUpTime}
                    className={
                      "btn" + (index == sltTimeButton ? " activeTime" : "")
                    }
                  >
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
