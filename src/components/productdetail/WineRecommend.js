/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
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

const WineRecommend = ({ productDetail }) => {
  // 아로마
  const aroma = productDetail.selAroma;
  // console.log("아로마", aroma);
  // 페어링
  const pairing = productDetail.selPairing;
  // console.log("페어링", pairing);
  // 음용 온도
  const temp = productDetail.wineDetailVo?.temp;
  // console.log("음용 온도", temp);
  // 페어링 더미 데이터
  const pairingSlide = [
    {
      ipairing: 0,
      titleEng: "steak",
      title: "스테이크",
      image: "icon_pairing_steak.svg",
    },
    {
      ipairing: 1,
      titleEng: "pork",
      title: "돼지고기",
      image: "icon_pairing_pork.svg",
    },
    {
      ipairing: 2,
      titleEng: "chicken",
      title: "닭고기",
      image: "icon_pairing_chicken.svg",
    },
    {
      ipairing: 3,
      titleEng: "fish",
      title: "해산물",
      image: "icon_pairing_fish.svg",
    },
    {
      ipairing: 4,
      titleEng: "oyster",
      title: "어패류",
      image: "icon_pairing_oyster.svg",
    },
    {
      ipairing: 5,
      titleEng: "salad",
      title: "샐러드",
      image: "icon_pairing_salad.svg",
    },
    {
      ipairing: 6,
      titleEng: "fried",
      title: "튀김",
      image: "icon_pairing_fried.svg",
    },
    {
      ipairing: 7,
      titleEng: "cheeze",
      title: "치즈",
      image: "icon_pairing_cheese.svg",
    },
    {
      ipairing: 8,
      titleEng: "fruit",
      title: "과일",
      image: "icon_aroma_fruit.svg",
    },
    {
      ipairing: 9,
      titleEng: "kfood",
      title: "한식",
      image: "icon_pairing_kfood.svg",
    },
    {
      ipairing: 10,
      titleEng: "pizza",
      title: "피자",
      image: "icon_pairing_pizza.svg",
    },
    {
      ipairing: 11,
      titleEng: "dessert",
      title: "디저트",
      image: "icon_pairing_dessert.svg",
    },
  ];
  // 화면에 출력할 아로마 데이터
  const aromaSlide = [
    {
      iaroma: 0,
      titleEng: "flower",
      title: "꽃",
      image: "icon_aroma_flower.svg",
    },
    {
      iaroma: 1,
      titleEng: "plant",
      title: "식물",
      image: "icon_aroma_plant.svg",
    },
    {
      iaroma: 2,
      titleEng: "Fruit",
      title: "과일",
      image: "icon_aroma_fruit.svg",
    },
    {
      iaroma: 3,
      titleEng: "Spicy",
      title: "향신료",
      image: "icon_aroma_spicy.svg",
    },
    {
      iaroma: 4,
      titleEng: "Earth",
      title: "흙냄새",
      image: "icon_aroma_earth.svg",
    },
    {
      iaroma: 5,
      titleEng: "Oak",
      title: "오크",
      image: "icon_aroma_oak.svg",
    },
    {
      iaroma: 6,
      titleEng: "Nuts",
      title: "견과류",
      image: "icon_aroma_nuts.svg",
    },
  ];
  // 일치하는 아로마 보관하는 state
  const [aromaArr, setAromaArr] = useState([]);
  // 일치하는 페어링 보관하는 state
  const [pairingArr, setPairingArr] = useState([]);
  // aroma의 값이 참일 경우 실행
  useEffect(() => {
    // 아로마 일치하는 데이터 찾기
    if (aroma) {
      const findAroma = aromaSlide.filter(item =>
        aroma.includes(item.titleEng),
      );
      setAromaArr(findAroma);
    }
    // 페어링 일치하는 데이터 찾기
    if (pairing) {
      const findPairing = pairingSlide.filter(item =>
        pairing.includes(item.titleEng),
      );
      setPairingArr(findPairing);
    }
  }, [productDetail]);
  // console.log("일치하는 아로마 배열", aromaArr);
  // console.log("일치하는 페어링 배열", pairingArr);
  return (
    <RecommendWrap temp={temp}>
      <ul>
        <li className="component-title">
          <i>
            <FontAwesomeIcon icon={faUtensils} />
          </i>
          페어링
        </li>
        <li className="recommend-slide">
          <Swiper slidesPerView={"auto"} spaceBetween={15} freeMode={true}>
            {pairing &&
              pairingArr.map((item, index) => (
                <SwiperSlide key={v4()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.title}
                  />
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
            {aroma &&
              aromaArr.map((item, index) => (
                <SwiperSlide key={v4()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.title}
                  />
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
              <span>약 10°C</span>
            </li>
            <li>
              <span>약 15°C</span>
            </li>
            <li>
              <span>약 18°C</span>
            </li>
          </ol>
        </li>
      </ul>
    </RecommendWrap>
  );
};

export default WineRecommend;
