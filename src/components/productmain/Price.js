/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
  깃허브 : https://github.com/kimaydev
*/
import React, { useCallback, useEffect, useRef, useState } from "react";
import Item from "./Item";
import {
  ProductListWrap,
  ProductMainItemWrap,
} from "../../style/ProductListStyle";
import { ConfigProvider, Select } from "antd";
import { Gradation, Maincolor } from "../../style/GlobalStyle";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import { useInView } from "react-intersection-observer";
import {
  getTotalMinusTwoCheap,
  getTotalMinusTwoExpensive,
  getTotalMinusTwoNew,
} from "../../api/patchproduct";
import ProductCartModal from "../product/ProductCartModal";
import QuickProductList from "../QuickProductList";
import { FadeLoader } from "react-spinners";

const Price = () => {
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
  // 상품 총 갯수 카운트 state
  const [totalCount, setTotalCount] = useState("");
  // 화면 데이터 보관할 state
  const [listScroll, setListScroll] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  // value 보관할 state
  const [optionValue, setOptionValue] = useState(1);
  const page = useRef(1);
  // cate 보관할 state
  const [cateid, setCateid] = useState(2);
  // value값에 따라 데이터 바뀜
  const getListData = useCallback(
    async value => {
      if (value === 1) {
        const result = await getTotalMinusTwoNew(
          setListScroll,
          setHasNextPage,
          page,
          cateid,
        );
        setListScroll(prevPosts => [...prevPosts, ...result]);
      } else if (value === 2) {
        const result = await getTotalMinusTwoExpensive(
          setListScroll,
          setHasNextPage,
          page,
          cateid,
        );
        setListScroll(prevPosts => [...prevPosts, ...result]);
      } else if (value === 3) {
        const result = await getTotalMinusTwoCheap(
          setListScroll,
          setHasNextPage,
          page,
          cateid,
        );
        setListScroll(prevPosts => [...prevPosts, ...result]);
      }
    },
    [cateid],
  );
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
      // getListData(value);
      setOptionValue(value);
      setListScroll([]);
      page.current = 1;
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
  // 카테고리 메뉴 리스트 옵션 설정
  const categoryMenu = [
    {
      ititle: 2,
      icateName: "price",
      title: "2만원 미만",
    },
    {
      ititle: 25,
      icateName: "price",
      title: "2~5만원",
    },
    {
      ititle: 510,
      icateName: "price",
      title: "5~10만원",
    },
    {
      ititle: 10,
      icateName: "price",
      title: "10만원 이상",
    },
  ];
  // 상품 총 갯수 불러옴
  useEffect(() => {
    setTotalCount(listScroll.length);
    // console.log("value 출력", optionValue);
    // console.log("화면 그려내", listScroll);
    // console.log("상품 총 갯수", totalCount);
  }, [listScroll]);
  // 무한 스크롤 처리
  useEffect(() => {
    // console.log(inView, hasNextPage);
    if (inView && hasNextPage) {
      // console.log("value 출력", optionValue);
      // handleChange(optionValue);
      getListData(optionValue);
    }
  }, [getListData, hasNextPage, inView, setOptionValue]);
  // 화면 카테고리 버튼 처리
  useEffect(() => {
    console.log("cateid값 확인", cateid);
    // 화면 데이터 초기화
    setListScroll([]);
    // 카테고리 버튼 클릭하면 hasNextPage 값을 true로 되돌림
    setHasNextPage(true);
    page.current = 1;
    // getListData(1);
    // console.log("현재 데이터는?", listScroll);
  }, [cateid]);
  return (
    <>
      <ProductListWrap>
        {/* 상품리스트 퀵메뉴 버튼 */}
        <QuickProductList
          categoryMenu={categoryMenu}
          cateid={cateid}
          setCateid={setCateid}
        />
        {/* 상품리스트 목록 */}
        <ProductMainItemWrap>
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
            {/* 상품 리스트 */}
            <Item
              listScroll={listScroll}
              setIsModalOpen={setIsModalOpen}
              hasNextPage={hasNextPage}
            />
          </ContentsListItemWrap>
          {/* 로딩 컴포넌트 */}
          {hasNextPage && (
            <div ref={ref} className="loading-box">
              <div>
                <FadeLoader
                  color={Maincolor.redBold}
                  height={9}
                  margin={0}
                  radius={10}
                  speedMultiplier={1}
                  width={5}
                />
              </div>
            </div>
          )}
        </ProductMainItemWrap>
      </ProductListWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Price;
