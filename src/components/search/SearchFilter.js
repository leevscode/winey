/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Button, ConfigProvider, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { SearchFilterWrap } from "../../style/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faDrumstickBite,
  faFish,
  faFishFins,
  faFlag,
  faGuitar,
  faLeaf,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { v4 } from "uuid";
import { Gradation, Maincolor } from "../../style/GlobalStyle";

export const searchFilterRecoil = atom({
  key: `searchFilterRecoil/${v4()}`,
  default: [],
});
export const wineSearchOptions = {
  cate: [
    {
      id: 1,
      value: "레드",
      icon: (
        <i style={{ color: Gradation.wineB }}>
          <FontAwesomeIcon icon={faWineGlass} />
        </i>
      ),
    },
    {
      id: 2,
      value: "화이트",
      icon: (
        <i style={{ color: Gradation.whiteA }}>
          <FontAwesomeIcon icon={faWineGlass} />
        </i>
      ),
    },
    {
      id: 3,
      value: "스파클링",
      icon: (
        <i style={{ color: Gradation.sparkA }}>
          <FontAwesomeIcon icon={faWineGlass} />
        </i>
      ),
    },
    {
      id: 4,
      value: "기타",
      icon: (
        <i style={{ color: Gradation.etcA }}>
          <FontAwesomeIcon icon={faWineGlass} />
        </i>
      ),
    },
  ],
  price: [
    {
      id: 1,
      value: "2만원미만",
      icon: (
        <i style={{ color: Gradation.wineE }}>
          <FontAwesomeIcon icon={faMoneyBill1} />
        </i>
      ),
    },
    {
      id: 2,
      value: "2~5만원",
      icon: (
        <i style={{ color: Gradation.wineD }}>
          <FontAwesomeIcon icon={faMoneyBill1} />
        </i>
      ),
    },
    {
      id: 3,
      value: "5~10만원",
      icon: (
        <i style={{ color: Gradation.wineC }}>
          <FontAwesomeIcon icon={faMoneyBill1} />
        </i>
      ),
    },
    {
      id: 4,
      value: "10만원이상",
      icon: (
        <i style={{ color: Gradation.wineB }}>
          <FontAwesomeIcon icon={faMoneyBill1} />
        </i>
      ),
    },
  ],
  bigCate: [
    {
      id: 1,
      value: "육류",
      icon: (
        <i>
          <FontAwesomeIcon icon={faDrumstickBite} />
        </i>
      ),
    },
    {
      id: 2,
      value: "해산물",
      icon: (
        <i>
          <FontAwesomeIcon icon={faFish} />
        </i>
      ),
    },
    {
      id: 3,
      value: "기타",
      icon: (
        <i>
          <FontAwesomeIcon icon={faLeaf} />
        </i>
      ),
    },
  ],
  country: [
    {
      id: 1,
      value: "미국",
      icon: (
        <i style={{ color: Maincolor.redDeep }}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      ),
    },
    {
      id: 3,
      value: "프랑스",
      icon: (
        <i style={{ color: Gradation.wineE }}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      ),
    },
    {
      id: 4,
      value: "이탈리아",
      icon: (
        <i style={{ color: Gradation.wineB }}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      ),
    },
    {
      id: 6,
      value: "칠레",
      icon: (
        <i style={{ color: Gradation.wineC }}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      ),
    },
    {
      id: 2,
      value: "기타",
      icon: (
        <i style={{ color: Gradation.wineD }}>
          <FontAwesomeIcon icon={faFlag} />
        </i>
      ),
    },
  ],
};

const SearchFilter = ({ setIsFilterActive, isFilterActive }) => {
  const [explorefilter, setExplorefilter] = useRecoilState(searchFilterRecoil);

  const [selectFilter, setSelectFilter] = useState("");
  const [wineTypeCheck, setWineTypeCheck] = useState("");
  const [wineFoodCheck, setWineFoodCheck] = useState("");
  const [winePriceCheck, setWinePriceCheck] = useState("");
  const [wineCountryCheck, setWineCountryCheck] = useState("");

  const handleTypeChange = e => {
    setWineTypeCheck(e.target.value);
    setSelectFilter(prev => ({ ...prev, cate: e.target.value }));
    // setExplorefilter(prev => ({ ...prev, cate: e.target.value }));
  };
  const handleFoodChange = e => {
    setWineFoodCheck(e.target.value);
    setSelectFilter(prev => ({ ...prev, bigCate: e.target.value }));
    // setExplorefilter(prev => ({ ...prev, bigCate: e.target.value }));
  };

  const handlePriceChange = e => {
    setWinePriceCheck(e.target.value);
    setSelectFilter(prev => ({ ...prev, price: e.target.value }));
    // setExplorefilter(prev => ({ ...prev, price: e.target.value }));
  };
  const handleCountryChange = e => {
    setWineCountryCheck(e.target.value);
    setSelectFilter(prev => ({ ...prev, country: e.target.value }));
    // setExplorefilter(prev => ({ ...prev, country: e.target.value }));
  };

  const handleConfirm = () => {
    setExplorefilter(selectFilter);
    setIsFilterActive(false);
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
  const wineCate = getCategory(wineTypeCheck);
  const wineFood = getFood(wineFoodCheck);
  const winePrice = getPrice(winePriceCheck);
  const wineCountry = getCountry(wineCountryCheck);

  useEffect(() => {
    console.log("필터변경 화면 리랜더링");
  }, [selectFilter]);
  console.log("selectFilter", selectFilter);

  // 선택값 초기화
  const handleReset = () => {
    setWineTypeCheck("");
    setWineFoodCheck("");
    setWinePriceCheck("");
    setWineCountryCheck("");
    setExplorefilter("");
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Maincolor.redBold,
          fontFamily:
            '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        },
      }}
    >
      <SearchFilterWrap>
        {/* 선택값 띄우기 */}
        <ul className="clickFilterItem">
          {wineCate && <li>{wineCate}</li>}
          {wineFood && <li>{wineFood}</li>}
          {winePrice && <li>{winePrice}</li>}
          {wineCountry && <li>{wineCountry}</li>}
          {selectFilter !== "" ? (
            <li className="clickFilterBtn">
              <Button onClick={handleConfirm}>선택값 저장하기</Button>
              <Button onClick={handleReset}>선택값 초기화</Button>
            </li>
          ) : null}
        </ul>

        {isFilterActive ? (
          <ul className="selFilter">
            <li>
              {/* 와인종류 */}
              <h3>
                <i>
                  <FontAwesomeIcon icon={faWineGlass} />
                </i>
                와인종류
              </h3>
              <Radio.Group value={wineTypeCheck} onChange={handleTypeChange}>
                {wineSearchOptions.cate.map(option => (
                  <Radio key={option.id} value={option.id}>
                    <b>{option.icon}</b>
                    {option.value}
                  </Radio>
                ))}
              </Radio.Group>
            </li>
            <li>
              {/* 가격대 */}
              <h3>
                <i>
                  <FontAwesomeIcon icon={faMoneyBill1} />
                </i>
                가격대
              </h3>
              <Radio.Group value={winePriceCheck} onChange={handlePriceChange}>
                {wineSearchOptions.price.map(option => (
                  <Radio key={option.id} value={option.id}>
                    <b>{option.icon}</b>
                    {option.value}
                  </Radio>
                ))}
              </Radio.Group>
            </li>
            <li>
              {/* 페어링음식 */}
              <h3>
                <i>
                  <FontAwesomeIcon icon={faBacon} />
                </i>
                페어링음식
              </h3>
              <Radio.Group value={wineFoodCheck} onChange={handleFoodChange}>
                {wineSearchOptions.bigCate.map(option => (
                  <Radio key={option.id} value={option.id}>
                    <b>{option.icon}</b> {option.value}
                  </Radio>
                ))}
              </Radio.Group>
            </li>
            <li>
              {/* 나라종류 */}
              <h3>
                <i>
                  <FontAwesomeIcon icon={faFlag} />
                </i>
                원산지
              </h3>
              <Radio.Group
                value={wineCountryCheck}
                onChange={handleCountryChange}
              >
                {wineSearchOptions.country.map(option => (
                  <Radio key={option.id} value={option.id}>
                    <b>{option.icon}</b>
                    {option.value}
                  </Radio>
                ))}
              </Radio.Group>
            </li>
          </ul>
        ) : null}
      </SearchFilterWrap>
    </ConfigProvider>
  );
};

export default SearchFilter;
