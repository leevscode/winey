/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { ConfigProvider, Select } from "antd";
import { ProductListItemWrap } from "../../style/ProductListStyle";
import { Gradation } from "../../style/GlobalStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import { useInView } from "react-intersection-observer";
import {
  getSpaklingWineCheap,
  getSpaklingWineExpensive,
  getSpaklingWineNew,
} from "../../api/patchproduct";
import Item from "./Item";
import ProductCartModal from "../product/ProductCartModal";

const Spakling = () => {
  // 로딩 더미데이터
  const productListSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 상품 더미 데이터
  /*
  const foodItem = [
    {
      productId: 22,
      categoryId: 2,
      featureId: 110,
      countryId: 2,
      aromaId: 110,
      nmKor: "슈샤르조프버거 리슬링 스패틀레스",
      nmEng: "Scharzhofberger Riesling Spätlese",
      price: 15600,
      quantity: 30,
      pic: "wine/22/NwRt7c2oQF6-mdBgs9gSLQ_pb_x960.png",
      promotion: 0,
      beginner: 0,
      alcohol: 8,
      sale: 10,
      salePrice: 30644,
    },
  ];
  */
  // 장바구니 완료 모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //react-intersection-observer state
  const [ref, inView] = useInView();
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 상품 총 갯수 카운트 state
  const [totalCount, setTotalCount] = useState(0);
  // 화면 데이터 보관할 state
  const [listScroll, setListScroll] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  // value 보관할 state
  const [optionValue, setOptionValue] = useState(1);
  const page = useRef(1);
  // value값에 따라 데이터 바뀜
  const getListData = useCallback(async value => {
    if (value === 1) {
      await getSpaklingWineNew(setListScroll, setHasNextPage, page);
    } else if (value === 2) {
      await getSpaklingWineExpensive(setListScroll, setHasNextPage, page);
    } else if (value === 3) {
      await getSpaklingWineCheap(setListScroll, setHasNextPage, page);
    }
  }, []);
  // 상품 정렬 옵션
  const options = [
    {
      value: 1,
      label: "최신등록순",
    },
    {
      value: 2,
      label: "높은가격순",
    },
    {
      value: 3,
      label: "낮은가격순",
    },
  ];
  const handleChange = useCallback(
    value => {
      page.current = 1;
      getListData(value);
      setOptionValue(value);
      setListScroll([]);
      // setListData(value);
      // console.log("value 출력합니다", value);
      switch (value) {
        case 1:
          // console.log("최신등록순 눌렀어요");
          break;
        case 2:
          // console.log("높은가격순 눌렀어요");
          break;
        case 3:
          // console.log("낮은가격순 눌렀어요");
          break;
      }
    },
    [setListScroll],
  );
  // 상품 총 갯수 불러옴
  useEffect(() => {
    setTotalCount(listScroll.length);
    // console.log("page", page.current);
    // console.log("value 출력", optionValue);
    // console.log("화면 그려내", listScroll);
    // console.log("상품 총 갯수", totalCount);
  }, [listScroll]);
  // 무한 스크롤 처리
  useEffect(() => {
    if (inView && hasNextPage) {
      // console.log("value 출력", optionValue);
      getListData(optionValue);
    }
  }, [getListData, hasNextPage, inView, setOptionValue]);
  // 화면 로딩 처리
  useEffect(() => {
    // 0.3초 뒤에 로딩 화면 사라짐
    const introTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    // 최초 실행 시 value 1 실행
    // console.log("버튼 클릭했을때 딱 한번 실행");
    getListData(1);
    return () => clearTimeout(introTimeout);
  }, []);

  return (
    <>
      <ProductListItemWrap>
        {/* 상품리스트 목록 */}
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
          {isLoading ? (
            // 로딩 화면 출력
            productListSkeleton.map(index => <ProductListSkeleton key={v4()} />)
          ) : (
            // 상품 리스트
            <>
              <Item listScroll={listScroll} setIsModalOpen={setIsModalOpen} />
              <div ref={ref}></div>
            </>
          )}
        </ContentsListItemWrap>
      </ProductListItemWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Spakling;
