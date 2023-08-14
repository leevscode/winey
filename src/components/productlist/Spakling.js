import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { ConfigProvider, Select } from "antd";
import NoImage from "../../assets/no_image.jpg";
import { ProductListItem } from "../../style/ProductStyle";
import ProductListSkeleton from "../skeleton/ProductListSkeleton";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import { Gradation } from "../../style/GlobalStyle";
import { ProductListItemWrap } from "../../style/ProductListStyle";
import { addCart, cartLengthData } from "../../api/patchcart";
import { useInView } from "react-intersection-observer";
import {
  getSpaklingWineCheap,
  getSpaklingWineExpensive,
  getSpaklingWineNew,
} from "../../api/patchproduct";

const Spakling = ({ setIsModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);
  // 이미지 없을 때 error처리
  const onImgError = e => {
    e.target.src = NoImage;
  };
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
  //react-intersection-observer state
  const [ref, inView] = useInView();
  // 로딩 state
  const [isLoading, setIsLoading] = useState(true);
  // 상품 총 갯수 카운트 state
  const [totalCount, setTotalCount] = useState("");
  // 화면 데이터 보관할 state
  const [listScroll, setListScroll] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(true);
  // value 보관할 state
  const [optionValue, setOptionValue] = useState(1);
  const page = useRef(1);
  // value값에 따라 데이터 바뀜
  const getListData = useCallback(async value => {
    setIsLoading(true);
    if (value === 1) {
      await getSpaklingWineNew(setListScroll, setHasNextPage, page);
      setIsLoading(false);
    } else if (value === 2) {
      await getSpaklingWineExpensive(setListScroll, setHasNextPage, page);
      setIsLoading(false);
    } else if (value === 3) {
      await getSpaklingWineCheap(setListScroll, setHasNextPage, page);
      setIsLoading(false);
    }
  }, []);
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
  // 비회원 장바구니 버튼 클릭 이벤트
  const handleNotUser = useCallback(
    e => {
      e.preventDefault();
      navigate("/login");
    },
    [setIsModalOpen],
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
            {listScroll?.map((item, index) => (
              <ProductListItem key={v4()}>
                <Link to={`/productdetail/${item.productId}`}>
                  <div className="img">
                    <img
                      src={`/img/${item.pic}`}
                      alt={item.nmKor}
                      onError={onImgError}
                    />
                    {/* 장바구니 버튼 */}
                    <button
                      onClick={
                        userData.userId
                          ? e => showModal(item.productId, e)
                          : e => handleNotUser(e)
                      }
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon_cart_2.svg`}
                        alt="장바구니에 담기"
                      />
                    </button>
                  </div>
                  <div className="txt">
                    <div className="badge">
                      {item.promotion === 1 && (
                        <span className="recommend">추천상품</span>
                      )}
                      {item.beginner === 1 && (
                        <span className="beginner">입문자추천</span>
                      )}
                    </div>
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
                </Link>
              </ProductListItem>
            ))}
            <div ref={ref}></div>
          </>
        )}
      </ContentsListItemWrap>
    </ProductListItemWrap>
  );
};

export default React.memo(Spakling);
