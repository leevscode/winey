import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { ProductListItem } from "../../style/ProductStyle";
import { RecommWineContents } from "../../style/MainStyle";

const RecommWineSlide = () => {
  const productSlide = [
    {
      producttitle: "와인 가이드",
      price: "34545",
      sale: "32900",
      link: "/",
      image: "https://via.placeholder.com/135x175",
    },
    {
      producttitle: "1",
      price: "10000",
      sale: "10000",
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
    },
    {
      producttitle: "2",
      price: "20000",
      sale: "20000",
      link: "/",
      image: "https://via.placeholder.com/135x175/456",
    },
    {
      producttitle: "3",
      price: "30000",
      sale: "30000",
      link: "/",
      image: "https://via.placeholder.com/135x175/789",
    },
  ];
  return (
    <RecommWineContents className="clearfix">
      <Swiper slidesPerView={"auto"} spaceBetween={20}>
        {productSlide.map((item, index) => (
          <SwiperSlide style={{ width: "calc(100% / 3)" }} key={index}>
            <ProductListItem>
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
                    <span>{item.sale}</span>원
                  </li>
                  <li>
                    <span>{item.price}원</span>
                  </li>
                </ul>
              </div>
            </ProductListItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommWineContents>
  );
};

export default RecommWineSlide;
