/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { ProductListItem } from "../../style/ProductStyle";
import {
  NotRandomWine,
  RecommWineContents,
  RecommWineLogout,
} from "../../style/MainStyle";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import NoImage from "../../assets/no_image.jpg";

const RecommWineSlide = ({ isLoading, randomWines }) => {
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3];
  // 로그인 여부 체크 state
  // const [isLoginChk, setIsLoginChk] = useState(null);
  const [isLoginChk, setIsLoginChk] = useState(true);
  // console.log(isLoginChk);
  // 입문용 와인 더미데이터
  // const productSlide = [
  //   {
  //     productId: 152,
  //     categoryId: 1,
  //     featureId: 460,
  //     countryId: 4,
  //     aromaId: 460,
  //     nmKor: "리틀 퍼크 말벡",
  //     nmEng: "Little Fuck Malbec",
  //     price: 38776,
  //     quantity: 6,
  //     pic: "/home/download/wine/ukMGn1FlRkCZGgsVYtne1w_pb_x960.png",
  //     promotion: 0,
  //     beginner: 1,
  //     alcohol: 15,
  //   },
  //   {
  //     productId: 73,
  //     categoryId: 1,
  //     featureId: 25,
  //     countryId: 1,
  //     aromaId: 25,
  //     nmKor: "말레올루스 드 발데라미로",
  //     nmEng: "Malleolus de Valderramiro",
  //     price: 25111,
  //     quantity: 15,
  //     pic: "/home/download/wine/OVnpuoGgSYOZBo_k4bJRtw_pb_x960.png",
  //     promotion: 1,
  //     beginner: 1,
  //     alcohol: 10,
  //   },
  //   {
  //     productId: 172,
  //     categoryId: 1,
  //     featureId: 4,
  //     countryId: 4,
  //     aromaId: 4,
  //     nmKor: "볼게리 수페리오레",
  //     nmEng: "Bolgheri Superiore",
  //     price: 40010,
  //     quantity: 11,
  //     pic: "/home/download/wine/Unx9_x0PRI2NyaC5mqQtHQ_pb_x960.png",
  //     promotion: 1,
  //     beginner: 1,
  //     alcohol: 15,
  //   },
  //   {
  //     productId: 328,
  //     categoryId: 1,
  //     featureId: 116,
  //     countryId: 2,
  //     aromaId: 116,
  //     nmKor: "카베르네 소비뇽",
  //     nmEng: "Cabernet Sauvignon",
  //     price: 73471,
  //     quantity: 21,
  //     pic: "/home/download/wine/QIEjFXbhT-yhKfSegKteig_pb_x960.png",
  //     promotion: 1,
  //     beginner: 1,
  //     alcohol: 15,
  //   },
  //   {
  //     productId: 188,
  //     categoryId: 1,
  //     featureId: 173,
  //     countryId: 5,
  //     aromaId: 173,
  //     nmKor: "프라이빗 컬렉션 까베르네 소비뇽",
  //     nmEng: "Private Collection Cabernet Sauvignon",
  //     price: 41589,
  //     quantity: 7,
  //     pic: "/home/download/wine/xZ50vEWLR6alsc3WpJolpQ_pb_x960.png",
  //     promotion: 1,
  //     beginner: 1,
  //     alcohol: 17,
  //   },
  //   {
  //     productId: 227,
  //     categoryId: 1,
  //     featureId: 352,
  //     countryId: 4,
  //     aromaId: 352,
  //     nmKor: "루지",
  //     nmEng: "Rouge",
  //     price: 49906,
  //     quantity: 30,
  //     pic: "/home/download/wine/KR-TRoCWR4uavhPMOa-MuA_pb_x960.png",
  //     promotion: 1,
  //     beginner: 1,
  //     alcohol: 11,
  //   },
  // ];
  return (
    <RecommWineContents className="clearfix">
      {isLoginChk ? (
        // 로그인
        <>
          <Swiper slidesPerView={"auto"} spaceBetween={14}>
            {isLoading
              ? productListSkeleton.map(index => (
                  <SwiperSlide key={index}>
                    <ProductListSkeleton />
                  </SwiperSlide>
                ))
              : randomWines.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductListItem>
                      <NavLink to={`/productdetail/${item.productId}`}>
                        <div className="img">
                          <img
                            src={`/img/${item.pic}`}
                            alt={item.nmKor}
                            onError={onImgError}
                          />
                          {/* 장바구니 버튼 */}
                          <button>
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                              alt="장바구니에 담기"
                            />
                          </button>
                        </div>
                        <div className="txt">
                          <div className="title">{item.nmKor}</div>
                          <ul className="price">
                            <li>
                              <span>{item.price.toLocaleString()}</span>원
                            </li>
                            <li>
                              <span>{item.price.toLocaleString()}원</span>
                            </li>
                          </ul>
                        </div>
                      </NavLink>
                    </ProductListItem>
                  </SwiperSlide>
                ))}
          </Swiper>
          {randomWines.length === 0 && (
            <NotRandomWine>
              <ul>
                <li>
                  <i>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                  </i>
                </li>
                <li>
                  선호하는 와인을 찾을 수 없습니다.
                  <br />
                  키워드를 다시 선택해주세요.
                </li>
                <li>
                  <Link to="/keywordselectedit">선호 키워드 변경하기</Link>
                </li>
              </ul>
            </NotRandomWine>
          )}
        </>
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
