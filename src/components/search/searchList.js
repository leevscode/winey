/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { ConfigProvider, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { ContentsListItemWrap } from "../../style/GlobalComponents";
import SearchListItem from "./SearchListItem";
import ProductCartModal from "../product/ProductCartModal";
import { ProductListItemWrap } from "../../style/ProductListStyle";
import { Gradation, Maincolor } from "../../style/GlobalStyle";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { searchResultRecoil } from "./SearchBar";
import { queryUrlRecoil } from "../../pages/search/SearchProduct";
import { getSearchItem } from "../../api/searchpatch";
import { FadeLoader } from "react-spinners";
import { useInView } from "react-intersection-observer";

export const searchSortRecoil = atom({
  key: "searchSortRecoil1",
  default: {
    value: 0,
    label: "최신등록순",
  },
});
// export const itemScrollRecoil = atom({
//   key: "itemScrollRecoil",
//   default: [],
// });
// recoil get
export const searchGetResult = selector({
  key: "searchGetResult1",
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    const result = get(searchResultRecoil);
    return { result, url };
  },
});

const SearchList = () => {
  // recoil
  const urlData = useRecoilValue(searchGetResult);
  const finalItem = useRecoilValue(searchGetResult);
  console.log("finalItem", finalItem);
  const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
  const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

  const sortingOptions = [
    {
      value: 0,
      label: "최신등록순",
    },
    {
      value: 1,
      label: "오랜등록순",
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

  // 화면 데이터 state
  const [hasNextPage, setHasNextPage] = useState(true);
  // 토탈 데이터 count
  const [totalCount, setTotalCount] = useState(0);
  // 검색어 없음 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSortChange = e => {
    setExploreSort(e);
  };

  //react-intersection-observer state
  const [ref, inView] = useInView();
  const page = useRef(1);
  console.log("page", page);

  useEffect(() => {
    if (inView && hasNextPage) {
      try {
        getSearchItem({
          urlData,
          page,
          exploreSort,
          setExploreResult,
          setHasNextPage,
          setTotalCount,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [exploreSort, hasNextPage, exploreSort, inView, page]);
  console.log("exploreResult", exploreResult);
  console.log("exploreSort", exploreSort);

  return (
    <div>
      <ProductListItemWrap>
        {/* 상품목록 */}
        <ul>
          <li>
            검색 상품 총 <span>{totalCount.count}</span>개
          </li>
          <li>
            {/* 상품정렬 */}
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
                // defaultValue={sortingOptions[0]}
                value={exploreSort}
                onChange={e => handleSortChange(e)}
                options={sortingOptions}
              />
            </ConfigProvider>
          </li>
        </ul>
        <ContentsListItemWrap>
          {/* 상품 리스트 */}
          <SearchListItem
            setIsModalOpen={setIsModalOpen}
            hasNextPage={hasNextPage}
            finalItem={finalItem}
          />
        </ContentsListItemWrap>
        {/* 로딩 컴포넌트 */}
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
      </ProductListItemWrap>
      {/* 장바구니 완료 모달창 */}
      <ProductCartModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default SearchList;
