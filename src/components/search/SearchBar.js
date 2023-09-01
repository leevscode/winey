/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import React, { useEffect, useState } from "react";
import Search from "antd/es/input/Search";
import { ConfigProvider } from "antd";
import { FilterButtonWrap, SearchBarWrap } from "../../style/SearchStyle";
import SearchFilter, {
  searchFilterRecoil,
  wineSearchOptions,
} from "./SearchFilter";
import { useNavigate } from "react-router";
import { getSearchItem } from "../../api/searchpatch";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { queryUrlRecoil } from "../../pages/search/SearchProduct";
import { itemScrollRecoil, searchSortRecoil } from "./SearchList";
import { NoticeModal } from "../../style/GlobalComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

// recoil
export const searchTextRecoil = atom({
  key: "searchTextRecoil",
  default: [],
});
export const searchResultRecoil = atom({
  key: "searchResultRecoil",
  default: [],
});
const getQueryRecoil = selector({
  key: "getQueryRecoil",
  // 값을 읽겠다
  get: ({ get }) => {
    const url = get(queryUrlRecoil);
    return { url };
  },
});
export const searchButtonActive = selector({
  key: "searchButtonActive",
  // 값을 읽겠다
  get: ({ get }) => {
    const filter = get(searchFilterRecoil);
    const text = get(searchTextRecoil);
    return { filter, text };
  },
});

const SearchBar = () => {
  // recoil get을 저장하자
  const urlData = useRecoilValue(getQueryRecoil);
  const isButton = useRecoilValue(searchButtonActive);
  // recoil
  const [exploreSort, setExploreSort] = useRecoilState(searchSortRecoil);
  const [exploreText, setExploreText] = useRecoilState(searchTextRecoil);
  const [exploreResult, setExploreResult] = useRecoilState(searchResultRecoil);

  const navigate = useNavigate();

  // filter component 열고닫는 state
  const [isFilterActive, setIsFilterActive] = useState(false);

  // 선택값 담는 state
  const [viewSelect, setViewSelect] = useState([]);

  // filters 버튼 핸들러
  const handleOpenfilter = e => {
    e.preventDefault();
    setIsFilterActive(!isFilterActive);
  };
  const closefilter = e => {
    setIsFilterActive(false);
    // navigate();
  };
  const handleTextSearch = e => {
    console.log(e.target.value);
    setExploreText(e.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onSearch = e => {
    if (isButton.filter.length === 0 && isButton.text.length === 0) {
      console.log("선택값없음");
      setIsModalOpen(true);
      return;
    } else {
      getSearchItem({ urlData, setExploreResult });
      setIsFilterActive(false);
      setExploreSort({
        value: 0,
        label: "최신등록순",
      });
      return;
    }
  };

  const getCategory = categoryId => {
    switch (categoryId) {
      case 1:
        return "레드";
      case 2:
        return "화이트";
      case 3:
        return "스파클링";
      case 4:
        return "기타";
      default:
        return "";
    }
  };

  const getFood = bigCategoryId => {
    switch (bigCategoryId) {
      case 1:
        return "육류";
      case 2:
        return "해산물";
      case 3:
        return "기타";
      default:
        return "";
    }
  };
  const getPrice = priceId => {
    switch (priceId) {
      case 1:
        return "2만원미만";
      case 2:
        return "2~5만원";
      case 3:
        return "5만원~10만원";
      case 4:
        return "10만원이상";
      default:
        return "";
    }
  };
  const getCountry = countryId => {
    switch (countryId) {
      case 1:
        return "미국";
      case 2:
        return "기타";
      case 3:
        return "프랑스";
      case 4:
        return "이탈리아";
      case 5:
        return "기타";
      case 6:
        return "칠레";
      default:
        return "";
    }
  };
  const wineCate = getCategory(isButton.filter.cate);
  const wineFood = getFood(isButton.filter.bigCate);
  const winePrice = getPrice(isButton.filter.price);
  const wineCountry = getCountry(isButton.filter.country);

  useEffect(() => {
    console.log("필터변경 화면 리랜더링");
  }, [isButton.filter]);

  console.log("isButton.filter", isButton.filter);

  return (
    <SearchBarWrap>
      <button className="filterbutton" onClick={handleOpenfilter}>
        <FontAwesomeIcon icon={faFilter} />
        상세검색
      </button>
      <FilterButtonWrap
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* 선택값 띄우기 */}
        <ul className="clickFilterItem">
          {wineCate && <li>{wineCate}</li>}
          {wineFood && <li>{wineFood}</li>}
          {winePrice && <li>{winePrice}</li>}
          {wineCountry && <li>{wineCountry}</li>}
        </ul>
        {isFilterActive ? (
          <SearchFilter setIsFilterActive={setIsFilterActive} />
        ) : null}
      </FilterButtonWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
          },
        }}
      >
        <Search
          placeholder="검색할 단어를 입력해 주세요."
          allowClear
          value={exploreText}
          onChange={handleTextSearch}
          onSearch={onSearch}
          size="large"
        />
      </ConfigProvider>
      <NoticeModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>
          <i>
            <FontAwesomeIcon icon={faCircleExclamation} />
          </i>
          검색어를 입력해 주세요.
        </p>{" "}
      </NoticeModal>

      <div className="SearchUnderbar"></div>
    </SearchBarWrap>
  );
};

export default SearchBar;
