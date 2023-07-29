/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { ProductListItem } from "../../style/ProductStyle";
import { RecommWineContents, RecommWineLogout } from "../../style/MainStyle";

const RecommWineSlide = () => {
  // 더미데이터
  const [isLoginChk, setIsLoginChk] = useState(null);
  console.log(isLoginChk);
  const productSlide = [
    {
      iuser: 1,
      iproduct: 1,
      producttitle: "상품1",
      price: 34545,
      sale: 32900,
      link: "/",
      image: "https://via.placeholder.com/135x175",
    },
    {
      iuser: 1,
      iproduct: 2,
      producttitle: "상품2",
      price: 10000,
      sale: 10000,
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
    },
    {
      iuser: 1,
      iproduct: 3,
      producttitle: "상품3",
      price: 20000,
      sale: 20000,
      link: "/",
      image: "https://via.placeholder.com/135x175/456",
    },
    {
      iuser: 1,
      iproduct: 4,
      producttitle: "상품4",
      price: 30000,
      sale: 30000,
      link: "/",
      image: "https://via.placeholder.com/135x175/789",
    },
  ];
  return (
    <RecommWineContents className="clearfix">
      {isLoginChk ? (
        // 로그인
        <Swiper slidesPerView={"auto"} spaceBetween={14}>
          {productSlide.map(item => (
            <SwiperSlide key={item.iproduct}>
              <ProductListItem>
                <Link to="/">
                  <div className="img">
                    <img src={item.image} alt={item.producttitle} />
                    {/* 장바구니 버튼 */}
                    <button>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                        alt="장바구니에 담기"
                      />
                    </button>
                  </div>
                  <div className="txt">
                    <div className="title">{item.producttitle}</div>
                    <ul className="price">
                      <li>
                        <span>{item.sale.toLocaleString()}</span>원
                      </li>
                      <li>
                        <span>{item.price.toLocaleString()}원</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </ProductListItem>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // 로그아웃
        <RecommWineLogout>
          <ul>
            <li>
              <i>
                <FontAwesomeIcon icon={faLock} />
              </i>
            </li>
            <li>
              와이니와 함께 하시면
              <br />
              당신을 위한 와인을 추천드려요.
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </RecommWineLogout>
      )}
    </RecommWineContents>
  );
};

export default RecommWineSlide;
