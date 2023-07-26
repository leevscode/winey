/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import { KeywordWrap } from "../../style/KeywordStyle";
import { Checkbox, ConfigProvider } from "antd";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { useNavigate } from "react-router";

const KeywordChooseCp = () => {
  const navigator = useNavigate();
  const [favoriteKeyword, setFavoriteKeyword] = useState([]);
  const [wineTypeCheckedList, setWineTypeCheckedList] = useState([]);
  const [winePriceCheckedList, setWinePriceCheckedList] = useState([]);
  const [wineWithFoodCheckedList, setWineWithFoodCheckedList] = useState([]);
  const [wineFlavorCheckedList, setWineFlavorCheckedList] = useState([]);
  const [wineCountryCheckedList, setWineCountryCheckedList] = useState([]);

  const wineTypeOptions = ["레드", "화이트", "스파클링", "기타"];
  const winePriceOptions = ["2만원 미만", "2~5만원", "5~10만원", "10만원이상"];
  const wineWithFoodOptions = [
    "스테이크",
    "돼지고기",
    "치킨",
    "해산물",
    "어패류",
    "샐러드",
    "튀김",
    "치즈",
    "과일",
    "한식",
    "피자",
    "디저트",
  ];
  const wineFlavorOptions = [
    "꽃",
    "식물",
    "과일",
    "향신료",
    "흙냄새",
    "오크",
    "견과류",
  ];
  const wineCountryOptions = [
    "프랑스",
    "이탈리아",
    "스페인",
    "칠레",
    "호주",
    "미국",
    "기타",
  ];

  // 와인종류 핸들러
  const isTypeIndeterminate =
    !!wineTypeCheckedList.length &&
    wineTypeCheckedList.length < wineTypeOptions.length;
  const isTypeCheckAll = wineTypeCheckedList.length === wineTypeOptions.length;
  const handleTypeCheckAllChange = e => {
    setWineTypeCheckedList(e.target.checked ? wineTypeOptions : []);
    console.log("e.target.checked", e.target.checked);
  };
  const handleTypeOnChange = list => {
    setWineTypeCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, wineType: list }));
    console.log("favoriteKeyword", favoriteKeyword);
  };

  // 와인금액 핸들러
  const isPriceIndeterminate =
    !!winePriceCheckedList.length &&
    winePriceCheckedList.length < winePriceOptions.length;
  const isPriceCheckAll =
    winePriceCheckedList.length === winePriceOptions.length;
  const handlePriceCheckAllChange = e => {
    setWinePriceCheckedList(e.target.checked ? winePriceOptions : []);
  };
  const handlePriceOnChange = list => {
    setWinePriceCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, winePrice: list }));

    console.log("favoriteKeyword", favoriteKeyword);
  };

  // 페어링 음식 핸들러
  const isWithFoodIndeterminate =
    !!wineWithFoodCheckedList.length &&
    wineWithFoodCheckedList.length < wineWithFoodOptions.length;
  const isWithFoodCheckAll =
    wineWithFoodCheckedList.length === wineWithFoodOptions.length;
  const handleWithFoodCheckAllChange = e => {
    setWineWithFoodCheckedList(e.target.checked ? wineWithFoodOptions : []);
  };
  const handleWithFoodOnChange = list => {
    setWineWithFoodCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, wineFood: list }));
    console.log("favoriteKeyword", favoriteKeyword);
  };

  // 향 핸들러
  const isFlavorIndeterminate =
    !!wineFlavorCheckedList.length &&
    wineFlavorCheckedList.length < wineFlavorOptions.length;
  const isFlavorCheckAll =
    wineFlavorCheckedList.length === wineFlavorOptions.length;
  const handleFlavorCheckAllChange = e => {
    setWineFlavorCheckedList(e.target.checked ? wineFlavorOptions : []);
  };
  const handleFlavorOnChange = list => {
    setWineFlavorCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, wineFlavor: list }));
  };
  // 원산지 핸들러
  const isCountryIndeterminate =
    !!wineCountryCheckedList.length &&
    wineCountryCheckedList.length < wineCountryOptions.length;
  const isCountryCheckAll =
    wineCountryCheckedList.length === wineCountryOptions.length;
  const handleCountryCheckAllChange = e => {
    setWineCountryCheckedList(e.target.checked ? wineCountryOptions : []);
  };
  const handleCountryOnChange = list => {
    setWineCountryCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, wineCountry: list }));
  };

  // 이벤트핸들러
  const handleKeywordChoice = () => {
    // favoriteKeyword();
    console.log("favoriteKeyword", favoriteKeyword);
    navigator("/");
  };
  const handleKeywordAll = () => {
    // favoriteKeyword("all");
    navigator("/");
  };
  return (
    <KeywordWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
          },
        }}
      >
        <ul>
          <li>
            <h3>와인종류</h3>
            <div>
              <Checkbox.Group
                value={wineTypeCheckedList}
                onChange={handleTypeOnChange}
              >
                {wineTypeOptions.map(option => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox
                indeterminate={isTypeIndeterminate}
                onChange={handleTypeCheckAllChange}
                checked={isTypeCheckAll}
              >
                아무거나
              </Checkbox>
            </div>
          </li>
          <li>
            <h3>가격대</h3>

            <div>
              <Checkbox.Group
                value={winePriceCheckedList}
                onChange={handlePriceOnChange}
              >
                {winePriceOptions.map(option => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox
                indeterminate={isPriceIndeterminate}
                onChange={handlePriceCheckAllChange}
                checked={isPriceCheckAll}
              >
                아무거나
              </Checkbox>
            </div>
          </li>
          <li>
            {" "}
            <h3>페어링음식</h3>
            <div>
              <Checkbox.Group
                value={wineWithFoodCheckedList}
                onChange={handleWithFoodOnChange}
              >
                {wineWithFoodOptions.map(option => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox
                indeterminate={isWithFoodIndeterminate}
                onChange={handleWithFoodCheckAllChange}
                checked={isWithFoodCheckAll}
              >
                아무거나
              </Checkbox>
            </div>
          </li>
          <li>
            <h3>향</h3>
            <div>
              <Checkbox.Group
                value={wineFlavorCheckedList}
                onChange={handleFlavorOnChange}
              >
                {wineFlavorOptions.map(option => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox
                indeterminate={isFlavorIndeterminate}
                onChange={handleFlavorCheckAllChange}
                checked={isFlavorCheckAll}
              >
                아무거나
              </Checkbox>
            </div>
          </li>
          <li>
            <h3>원산지</h3>
            <div>
              <Checkbox.Group
                value={wineCountryCheckedList}
                onChange={handleCountryOnChange}
              >
                {wineCountryOptions.map(option => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
              <Checkbox
                value="all"
                indeterminate={isCountryIndeterminate}
                onChange={handleCountryCheckAllChange}
                checked={isCountryCheckAll}
              >
                아무거나
              </Checkbox>
            </div>
          </li>
        </ul>
      </ConfigProvider>
      <ButtonOk onClick={handleKeywordChoice}>선택완료</ButtonOk>
      <ButtonCancel onClick={handleKeywordAll}>
        아무거나 상관없어요
      </ButtonCancel>
    </KeywordWrap>
  );
};

export default KeywordChooseCp;
