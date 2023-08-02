import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductListItemWrap,
  ProductListWrap,
} from "../../style/ProductListStyle";
import { ProductListItem } from "../../style/ProductStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import { ConfigProvider, Select } from "antd";
import { Gradation } from "../../style/GlobalStyle";
import ProductListTitle from "../../components/product/ProductListTitle";

const ProductList = () => {
  // 상품 총 갯수 카운트
  const [totalCount, setTotalCount] = useState("");
  // 상품 더미 데이터
  const foodItem = [
    {
      iproduct: 1,
      producttitle: "1",
      price: 34545,
      sale: 32900,
      link: "/",
      image: "https://via.placeholder.com/135x175",
      isbadge: [0, 1],
    },
    {
      iproduct: 2,
      producttitle: "2",
      price: 10000,
      sale: 10000,
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [],
    },
    {
      iproduct: 3,
      producttitle: "3",
      price: 20000,
      sale: 20000,
      link: "/",
      image: "https://via.placeholder.com/135x175/456",
      isbadge: [0, 1],
    },
    {
      iproduct: 4,
      producttitle: "4",
      price: 40000,
      sale: 40000,
      link: "/",
      image: "https://via.placeholder.com/135x175/789",
      isbadge: [0],
    },
    {
      iproduct: 5,
      producttitle: "5",
      price: 50000,
      sale: 50000,
      link: "/",
      image: "https://via.placeholder.com/135x175",
      isbadge: [1],
    },
    {
      iproduct: 6,
      producttitle: "6",
      price: 60000,
      sale: 60000,
      link: "/",
      image: "https://via.placeholder.com/135x175/123",
      isbadge: [0, 1],
    },
  ];
  useEffect(() => {
    setTotalCount(foodItem.length);
    // console.log("상품 총 갯수", totalCount);
  }, []);
  // 상품 정렬 옵션
  const options = [
    {
      value: "최신등록순",
      label: "최신등록순",
    },
    {
      value: "높은가격순",
      label: "높은가격순",
    },
    {
      value: "낮은가격순",
      label: "낮은가격순",
    },
  ];
  // console.log("상품 정렬 옵션 첫번째", options[0]);
  // 상품 정렬 선택
  const handleChange = value => {
    // console.log(`selected ${value}`);
  };
  return (
    <ProductListWrap>
      {/* 상품리스트 타이틀 */}
      <ProductListTitle />
      {/* 상품리스트 목록 */}
      <ProductListItemWrap>
        <ul>
          <li>
            {/* 상품 총 갯수 */}총 <span>{totalCount}</span>개
          </li>
          <li>
            {/* 상품 정렬 */}
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: Gradation.wineD,
                  borderRadius: 4,
                  fontSize: 12,
                  controlHeight: 24,
                  colorBorder: "transparent",
                  colorPrimaryHover: "transparent",
                  fontFamily:
                    '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
                },
              }}
            >
              <Select
                defaultValue={options[0]}
                onChange={handleChange}
                options={options}
              />
            </ConfigProvider>
          </li>
        </ul>
        <ContentsListItemWrap>
          {foodItem.map(item => (
            <ProductListItem key={item.iproduct}>
              <Link to={item.link}>
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
                  <div className="badge">
                    {item.isbadge.length !== 0 && (
                      <>
                        {item.isbadge.includes(0) && (
                          <span className="recommend">추천상품</span>
                        )}
                        {item.isbadge.includes(1) && (
                          <span className="beginner">입문자추천</span>
                        )}
                      </>
                    )}
                  </div>
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
          ))}
        </ContentsListItemWrap>
      </ProductListItemWrap>
    </ProductListWrap>
  );
};

export default ProductList;
