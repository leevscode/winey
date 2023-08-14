/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
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
import { addCart, cartLengthData } from "../../api/patchcart";

const RecommWineSlide = ({ isLoading, randomWines, setIsModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
  // 회원 장바구니 버튼 클릭 이벤트
  const showModal = useCallback(
    (_iproduct, e) => {
      e.preventDefault();
      addCart(_iproduct);
      cartLengthData(dispatch);
      setIsModalOpen(true);
    },
    [setIsModalOpen],
  );
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3];
  // console.log(isLoginChk);
  // 입문용 와인 더미데이터
  // const productSlide = [
  //   {
  //     productId: 6,
  //     categoryId: 1,
  //     featureId: 151,
  //     countryId: 1,
  //     aromaId: 151,
  //     nmKor: "바르티나",
  //     nmEng: "Bartina",
  //     price: 13700,
  //     quantity: 7,
  //     pic: "wine/6/xXCu1X1QRi2eVEsS3ij-tg_pb_x960.png",
  //     promotion: 0,
  //     beginner: 0,
  //     alcohol: 9,
  //     sale: 10,
  //     salePrice: 237686,
  //   },
  // ];
  return (
    <RecommWineContents className="clearfix">
      {userData.userId ? (
        // 로그인
        <>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={14}
            className={randomWines.length > 0 ? null : "active"}
          >
            {randomWines?.map((item, index) => (
              <SwiperSlide key={v4()}>
                <ProductListItem>
                  <NavLink to={`/productdetail/${item.productId}`}>
                    <div className="img">
                      <img
                        src={`/img/${item.pic}`}
                        alt={item.nmKor}
                        onError={onImgError}
                      />
                      {/* 장바구니 버튼 */}
                      <button onClick={e => showModal(item.productId, e)}>
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
                          <span>
                            {item.salePrice === null
                              ? item.price.toLocaleString()
                              : item.salePrice.toLocaleString()}
                          </span>
                          원
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

export default React.memo(RecommWineSlide);
