/*
    작업자 : 최혜미
    노션 : https://www.notion.so/hyemdev
    깃허브 : https://github.com/hyemdev
*/

import React, { useEffect, useState } from "react";
import {
  EditKeywordConfirmBtn,
  KeywordConfirmBtn,
  KeywordWrap,
} from "../../style/KeywordStyle";
import { Checkbox, ConfigProvider } from "antd";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { useNavigate } from "react-router-dom";

const KeywordSelectEdit = () => {
  const navigator = useNavigate();
  const wineOptions = {
    cateId: [
      { id: 0, value: "레드" },
      { id: 1, value: "화이트" },
      { id: 2, value: "스파클링" },
      { id: 3, value: "기타" },
    ],
    priceRange: [
      { id: 0, value: "2만원미만" },
      { id: 1, value: "2~5만원" },
      { id: 2, value: "5~10만원" },
      { id: 3, value: "10만원이상" },
    ],
    smallcategoryId: [
      { id: 0, value: "스테이크" },
      { id: 1, value: "돼지고기" },
      { id: 2, value: "치킨" },
      { id: 3, value: "해산물" },
      { id: 4, value: "어패류" },
      { id: 5, value: "샐러드" },
      { id: 6, value: "튀김" },
      { id: 7, value: "치즈" },
      { id: 8, value: "과일" },
      { id: 9, value: "한식" },
      { id: 10, value: "피자" },
      { id: 11, value: "디저트" },
    ],
    aroma: [
      { id: 0, value: "꽃" },
      { id: 1, value: "식물" },
      { id: 2, value: "과일" },
      { id: 3, value: "향신료" },
      { id: 4, value: "흙냄새" },
      { id: 5, value: "오크" },
      { id: 6, value: "견과류" },
    ],
    countryId: [
      { id: 0, value: "미국" },
      { id: 1, value: "스페인" },
      { id: 2, value: "이탈리아" },
      { id: 3, value: "칠레" },
      { id: 4, value: "포르투갈" },
      { id: 5, value: "프랑스" },
    ],
  };

  //수정된 선호키워드를 담는다(초기값에는 이전에 선택한 항목을 담자)
  const [editFavoriteKeyword, setEditFavoriteKeyword] = useState("");

  // 각 항목별로 키워드 관리 (초기값에는 기존에 선택한 항목이 담긴다.)
  const [wineTypeCheckedList, setWineTypeCheckedList] = useState("");
  const [winePriceCheckedList, setWinePriceCheckedList] = useState("");
  const [wineWithFoodCheckedList, setWineWithFoodCheckedList] = useState("");
  const [wineFlavorCheckedList, setWineFlavorCheckedList] = useState("");
  const [wineCountryCheckedList, setWineCountryCheckedList] = useState("");

  // 와인종류 핸들러
  const isTypeIndeterminate =
    !!wineTypeCheckedList.length &&
    wineTypeCheckedList.length < wineOptions.cateId.length;
  const isTypeCheckAll =
    wineTypeCheckedList.length === wineOptions.cateId.length;
  const handleTypeCheckAllChange = e => {
    setWineTypeCheckedList(e.target.checked ? wineOptions.cateId : []);
    setEditFavoriteKeyword(prev => ({ ...prev, cateId: wineOptions.cateId }));
  };
  const handleTypeOnChange = list => {
    setWineTypeCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, cateId: list }));
  };

  // 와인금액 핸들러
  const isPriceIndeterminate =
    !!winePriceCheckedList.length &&
    winePriceCheckedList.length < wineOptions.priceRange.length;
  const isPriceCheckAll =
    winePriceCheckedList.length === wineOptions.priceRange.length;
  const handlePriceCheckAllChange = e => {
    setWinePriceCheckedList(e.target.checked ? wineOptions.priceRange : []);
    setEditFavoriteKeyword(prev => ({
      ...prev,
      priceRange: wineOptions.priceRange,
    }));
  };
  const handlePriceOnChange = list => {
    setWinePriceCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, priceRange: list }));
  };

  // 페어링 음식 핸들러
  const isWithFoodIndeterminate =
    !!wineWithFoodCheckedList.length &&
    wineWithFoodCheckedList.length < wineOptions.smallcategoryId.length;
  const isWithFoodCheckAll =
    wineWithFoodCheckedList.length === wineOptions.smallcategoryId.length;
  const handleWithFoodCheckAllChange = e => {
    setWineWithFoodCheckedList(
      e.target.checked ? wineOptions.smallcategoryId : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      smallcategoryId: wineOptions.smallcategoryId,
    }));
  };
  const handleWithFoodOnChange = list => {
    setWineWithFoodCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, wineFood: list }));
    console.log("editfavoriteKeyword", editFavoriteKeyword);
  };

  // 향 핸들러
  const isFlavorIndeterminate =
    !!wineFlavorCheckedList.length &&
    wineFlavorCheckedList.length < wineOptions.aroma.length;
  const isFlavorCheckAll =
    wineFlavorCheckedList.length === wineOptions.aroma.length;
  const handleFlavorCheckAllChange = e => {
    setWineFlavorCheckedList(e.target.checked ? wineOptions.aroma : []);
    setEditFavoriteKeyword(prev => ({
      ...prev,
      aroma: wineOptions.aroma,
    }));
  };
  const handleFlavorOnChange = list => {
    setWineFlavorCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, aroma: list }));
  };
  // 원산지 핸들러
  const isCountryIndeterminate =
    !!wineCountryCheckedList.length &&
    wineCountryCheckedList.length < wineOptions.countryId.length;
  const isCountryCheckAll =
    wineCountryCheckedList.length === wineOptions.countryId.length;
  const handleCountryCheckAllChange = e => {
    setWineCountryCheckedList(e.target.checked ? wineOptions.countryId : []);
    setEditFavoriteKeyword(prev => ({
      ...prev,
      countryId: wineOptions.countryId,
    }));
  };
  const handleCountryOnChange = list => {
    setWineCountryCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, countryId: list }));
  };

  // 이벤트핸들러
  const handleEditKeywordChoice = () => {
    // editFavoriteKeyword();
    console.log("editFavoriteKeyword", editFavoriteKeyword);
    navigator("/main");
  };
  const handleEditKeywordAll = () => {
    // editFavoriteKeyword("all");
    setEditFavoriteKeyword({ ...wineOptions });
    console.log("확인중", editFavoriteKeyword);

    // navigator("/main");
  };
  return (
    <KeywordWrap>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#79213d",
            fontFamily:
              '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
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
                // defaultValue={selectedKeyword}
              >
                {wineOptions.cateId.map(option => (
                  <Checkbox key={option.id} value={option.id}>
                    {option.value}
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
                // defaultValue={selectedKeyword}
              >
                {wineOptions.priceRange.map(option => (
                  <Checkbox key={option.id} value={option.id}>
                    {option.value}
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
                // defaultValue={selectedKeyword}
              >
                {wineOptions.smallcategoryId.map(option => (
                  <Checkbox key={option.id} value={option.id}>
                    {option.value}
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
                // defaultValue={selectedKeyword}
              >
                {wineOptions.aroma.map(option => (
                  <Checkbox key={option.id} value={option.id}>
                    {option.value}
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
                // defaultValue={selectedKeyword}
              >
                {wineOptions.countryId.map(option => (
                  <Checkbox key={option.id} value={option.id}>
                    {option.value}
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
      <EditKeywordConfirmBtn>
        <ButtonOk onClick={handleEditKeywordChoice}>선택 변경완료</ButtonOk>
        <ButtonCancel onClick={handleEditKeywordAll}>
          아무거나 상관없어요
        </ButtonCancel>
      </EditKeywordConfirmBtn>
    </KeywordWrap>
  );
};

export default KeywordSelectEdit;
