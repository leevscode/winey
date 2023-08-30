/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/
import { Button, Checkbox, ConfigProvider, Radio } from "antd";
import React, { useState } from "react";
import { KeywordWrap } from "../../style/KeywordStyle";
import { SearchFilterWrap } from "../../style/SearchStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBacon,
  faCake,
  faFishFins,
  faFlag,
  faGuitar,
  faWineGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import { atom, useSetRecoilState } from "recoil";

export const searchFilterRecoil = atom({
  key: "searchFilterRecoil",
  default: [],
});

const SearchFilter = () => {
  const setExplorefilter = useSetRecoilState(searchFilterRecoil);

  const wineOptions = {
    cate: [
      { id: 1, value: "레드", icon: <FontAwesomeIcon icon={faWineGlass} /> },
      { id: 2, value: "화이트", icon: <FontAwesomeIcon icon={faWineGlass} /> },
      {
        id: 3,
        value: "스파클링",
        icon: <FontAwesomeIcon icon={faWineGlass} />,
      },
      { id: 4, value: "기타", icon: <FontAwesomeIcon icon={faGuitar} /> },
    ],
    price: [
      {
        id: 0,
        value: "2만원미만",
        icon: <FontAwesomeIcon icon={faMoneyBill1} />,
      },
      {
        id: 1,
        value: "2~5만원",
        icon: <FontAwesomeIcon icon={faMoneyBill1} />,
      },
      {
        id: 2,
        value: "5~10만원",
        icon: <FontAwesomeIcon icon={faMoneyBill1} />,
      },
      {
        id: 3,
        value: "10만원이상",
        icon: <FontAwesomeIcon icon={faMoneyBill1} />,
      },
    ],
    bigCate: [
      { id: 1, value: "육류", icon: <FontAwesomeIcon icon={faBacon} /> },
      { id: 2, value: "해산물", icon: <FontAwesomeIcon icon={faFishFins} /> },
      { id: 3, value: "기타", icon: <FontAwesomeIcon icon={faGuitar} /> },
    ],
    country: [
      { id: 1, value: "미국", icon: <FontAwesomeIcon icon={faFlag} /> },
      { id: 3, value: "프랑스", icon: <FontAwesomeIcon icon={faFlag} /> },
      { id: 4, value: "이탈리아", icon: <FontAwesomeIcon icon={faFlag} /> },
      { id: 6, value: "칠레", icon: <FontAwesomeIcon icon={faFlag} /> },
      { id: 2, value: "기타", icon: <FontAwesomeIcon icon={faFlag} /> },
    ],
  };
  // const [selectFilter, setSelectFilter] = useState("");
  const [wineTypeCheck, setWineTypeCheck] = useState(0);
  const [wineFoodCheck, setWineFoodCheck] = useState(0);
  const [winePriceCheck, setWinePriceCheck] = useState("");
  const [wineCountryCheck, setWineCountryCheck] = useState(0);

  const handleTypeChange = e => {
    setWineTypeCheck(e.target.value);
    // setSelectFilter(prev => ({ ...prev, cate: e.target.value }));
    setExplorefilter(prev => ({ ...prev, cate: e.target.value }));
  };
  const handleFoodChange = e => {
    setWineFoodCheck(e.target.value);
    // setSelectFilter(prev => ({ ...prev, bigCate: e.target.value }));
    setExplorefilter(prev => ({ ...prev, bigCate: e.target.value }));
  };

  const handlePriceChange = e => {
    setWinePriceCheck(e.target.value);
    // setSelectFilter(prev => ({ ...prev, price: e.target.value }));
    setExplorefilter(prev => ({ ...prev, price: e.target.value }));
  };
  const handleCountryChange = e => {
    setWineCountryCheck(e.target.value);
    // setSelectFilter(prev => ({ ...prev, country: e.target.value }));
    setExplorefilter(prev => ({ ...prev, country: e.target.value }));
  };

  // 선택값 초기화
  const handleReset = () => {
    setWineTypeCheck("");
    setWineFoodCheck("");
    setWinePriceCheck("");
    setWineCountryCheck("");
    setExplorefilter("");
  };
  return (
    <SearchFilterWrap>
      <ul>
        <li>
          {/* 와인종류 */}
          <Radio.Group value={wineTypeCheck} onChange={handleTypeChange}>
            {wineOptions.cate.map(option => (
              <Radio key={option.id} value={option.id}>
                <b>{option.icon}</b>
                {option.value}
              </Radio>
            ))}
          </Radio.Group>
        </li>
        <li>
          {" "}
          {/* 페어링음식 */}
          <Radio.Group value={wineFoodCheck} onChange={handleFoodChange}>
            {wineOptions.bigCate.map(option => (
              <Radio key={option.id} value={option.id}>
                <b>{option.icon}</b> {option.value}
              </Radio>
            ))}
          </Radio.Group>
        </li>
        <li>
          {/* 가격대 */}
          <Radio.Group value={winePriceCheck} onChange={handlePriceChange}>
            {wineOptions.price.map(option => (
              <Radio key={option.id} value={option.id}>
                <b>{option.icon}</b>
                {option.value}
              </Radio>
            ))}
          </Radio.Group>
        </li>
        <li>
          {" "}
          {/* 나라종류 */}
          <Radio.Group value={wineCountryCheck} onChange={handleCountryChange}>
            {wineOptions.country.map(option => (
              <Radio key={option.id} value={option.id}>
                <b>{option.icon}</b>
                {option.value}
              </Radio>
            ))}
          </Radio.Group>
        </li>
        <li>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#79213d",
                fontFamily:
                  '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
              },
            }}
          >
            <Button onClick={handleReset}>선택값 초기화</Button>
          </ConfigProvider>
        </li>
      </ul>
    </SearchFilterWrap>
  );
};

export default SearchFilter;
