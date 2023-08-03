/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTemperatureHalf,
} from "@fortawesome/free-solid-svg-icons";
import { RecommendWrap } from "../../style/ProductDetailStyle";

const WineRecommend = () => {
  // 페어링 더미 데이터
  const pairingSlide = [
    {
      ipairing: 0,
      title: "0",
      image: "https://via.placeholder.com/50",
    },
    {
      ipairing: 1,
      title: "1",
      image: "https://via.placeholder.com/50/123",
    },
    {
      ipairing: 2,
      title: "2",
      image: "https://via.placeholder.com/50/456",
    },
  ];
  // 아로마 더미 데이터
  const aromaSlide = [
    {
      iaroma: 0,
      title: "0",
      image: "https://via.placeholder.com/50",
    },
    {
      iaroma: 1,
      title: "1",
      image: "https://via.placeholder.com/50/123",
    },
    {
      iaroma: 2,
      title: "2",
      image: "https://via.placeholder.com/50/456",
    },
    {
      iaroma: 3,
      title: "3",
      image: "https://via.placeholder.com/50",
    },
    {
      iaroma: 4,
      title: "4",
      image: "https://via.placeholder.com/50/123",
    },
    {
      iaroma: 5,
      title: "5",
      image: "https://via.placeholder.com/50/456",
    },
    {
      iaroma: 6,
      title: "6",
      image: "https://via.placeholder.com/50",
    },
    {
      iaroma: 7,
      title: "7",
      image: "https://via.placeholder.com/50/123",
    },
    {
      iaroma: 8,
      title: "8",
      image: "https://via.placeholder.com/50/456",
    },
    {
      iaroma: 9,
      title: "9",
      image: "https://via.placeholder.com/50",
    },
    {
      iaroma: 10,
      title: "10",
      image: "https://via.placeholder.com/50/123",
    },
    {
      iaroma: 11,
      title: "11",
      image: "https://via.placeholder.com/50/456",
    },
  ];
  return (
    <RecommendWrap>
      <ul>
        <li className="component-title">
          <i>
            <FontAwesomeIcon icon={faUtensils} />
          </i>
          페어링
        </li>
        <li className="recommend-slide">
          <Swiper slidesPerView={"auto"} spaceBetween={15} freeMode={true}>
            {pairingSlide.map(item => (
              <SwiperSlide key={item.ipairing}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </li>
      </ul>
      <ul>
        <li className="component-title">
          <i className="aroma"></i>
          아로마
        </li>
        <li className="recommend-slide">
          <Swiper slidesPerView={"auto"} spaceBetween={15} freeMode={true}>
            {aromaSlide.map(item => (
              <SwiperSlide key={item.iaroma}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </li>
      </ul>
      <ul>
        <li className="component-title">
          <i>
            <FontAwesomeIcon icon={faTemperatureHalf} />
          </i>
          음용온도
        </li>
        <li>
          <div className="component-bar"></div>
          <ol className="component-bar-text">
            <li>
              <span>5~10°C 이하</span>
            </li>
            <li>
              <span>10~15°C</span>
            </li>
            <li>
              <span>15~18°C 이상</span>
            </li>
          </ol>
        </li>
      </ul>
    </RecommendWrap>
  );
};

export default WineRecommend;
