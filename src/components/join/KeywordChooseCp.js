/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useState } from "react";
import { KeywordConfirmBtn, KeywordWrap } from "../../style/KeywordStyle";
import { Checkbox, ConfigProvider, Modal, Radio, Select } from "antd";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { postUserKeyword } from "../../api/keywordpatch";

const KeywordChooseCp = () => {
  const navigator = useNavigate();

  const [favoriteKeyword, setFavoriteKeyword] = useState([]);
  const [wineTypeCheckedList, setWineTypeCheckedList] = useState([]);
  const [winePriceCheckedList, setWinePriceCheckedList] = useState([]);
  const [wineWithFoodCheckedList, setWineWithFoodCheckedList] = useState([]);
  const [wineFlavorCheckedList, setWineFlavorCheckedList] = useState([]);
  const [wineCountryCheckedList, setWineCountryCheckedList] = useState([]);

  const wineOptions = {
    categoryId: [
      { id: 1, value: "레드" },
      { id: 2, value: "화이트" },
      { id: 3, value: "스파클링" },
      { id: 4, value: "기타" },
    ],
    priceRange: [
      { id: 1, value: "2만원미만" },
      { id: 2, value: "2~5만원" },
      { id: 3, value: "5~10만원" },
      { id: 4, value: "10만원이상" },
    ],
    smallCategoryId: [
      { id: 1, value: "스테이크" },
      { id: 2, value: "돼지고기" },
      { id: 3, value: "치킨" },
      { id: 4, value: "해산물" },
      { id: 5, value: "어패류" },
      { id: 6, value: "샐러드" },
      { id: 7, value: "튀김" },
      { id: 8, value: "치즈" },
      { id: 9, value: "과일" },
      { id: 10, value: "한식" },
      { id: 11, value: "피자" },
      { id: 12, value: "디저트" },
    ],
    aroma: [
      { id: 1, value: "꽃" },
      { id: 2, value: "식물" },
      { id: 3, value: "과일" },
      { id: 4, value: "향신료" },
      { id: 5, value: "흙냄새" },
      { id: 6, value: "오크" },
      { id: 7, value: "견과류" },
    ],
    countryId: [
      { id: 1, value: "미국" },
      { id: 2, value: "스페인" },
      { id: 3, value: "이탈리아" },
      { id: 4, value: "칠레" },
      { id: 5, value: "포르투갈" },
      { id: 6, value: "프랑스" },
    ],
  };

  // 와인종류 핸들러
  const isTypeIndeterminate =
    !!wineTypeCheckedList.length &&
    wineTypeCheckedList.length < wineOptions.categoryId.length;
  const isTypeCheckAll =
    wineTypeCheckedList.length === wineOptions.categoryId.length;

  const handleTypeCheckAllChange = e => {
    setWineTypeCheckedList(
      e.target.checked ? wineOptions.categoryId.map(option => option.id) : [],
    );
    setFavoriteKeyword(prev => ({
      ...prev,
      categoryId: wineOptions.categoryId.map(option => option.id),
    }));
  };
  const handleTypeOnChange = list => {
    setWineTypeCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, categoryId: list }));
  };

  // 와인금액 핸들러
  const isPriceIndeterminate =
    !!winePriceCheckedList.length &&
    winePriceCheckedList.length < wineOptions.priceRange.length;
  const isPriceCheckAll =
    winePriceCheckedList.length === wineOptions.priceRange.length;
  const handlePriceCheckAllChange = e => {
    setWinePriceCheckedList(
      e.target.checked ? wineOptions.priceRange.map(option => option.id) : [],
    );
    setFavoriteKeyword(prev => ({
      ...prev,
      priceRange: wineOptions.priceRange.map(option => option.id),
    }));
  };
  const handlePriceOnChange = list => {
    setWinePriceCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, priceRange: list }));
  };

  // 페어링 음식 핸들러
  const isWithFoodIndeterminate =
    !!wineWithFoodCheckedList.length &&
    wineWithFoodCheckedList.length < wineOptions.smallCategoryId.length;
  const isWithFoodCheckAll =
    wineWithFoodCheckedList.length === wineOptions.smallCategoryId.length;
  const handleWithFoodCheckAllChange = e => {
    setWineWithFoodCheckedList(
      e.target.checked
        ? wineOptions.smallCategoryId.map(option => option.id)
        : [],
    );
    setFavoriteKeyword(prev => ({
      ...prev,
      smallCategoryId: wineOptions.smallCategoryId.map(option => option.id),
    }));
  };
  const handleWithFoodOnChange = list => {
    setWineWithFoodCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, smallCategoryId: list }));
  };

  // 원산지 핸들러
  const isCountryIndeterminate =
    !!wineCountryCheckedList.length &&
    wineCountryCheckedList.length < wineOptions.countryId.length;
  const isCountryCheckAll =
    wineCountryCheckedList.length === wineOptions.countryId.length;

  const handleCountryCheckAllChange = e => {
    setWineCountryCheckedList(
      e.target.checked ? wineOptions.countryId.map(option => option.id) : [],
    );
    setFavoriteKeyword(prev => ({
      ...prev,
      countryId: wineOptions.countryId.map(option => option.id),
    }));
  };
  const handleCountryOnChange = list => {
    setWineCountryCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, countryId: list }));
  };

  // 향 핸들러
  const isFlavorIndeterminate =
    !!wineFlavorCheckedList.length &&
    wineFlavorCheckedList.length < wineOptions.aroma.length;
  const isFlavorCheckAll =
    wineCountryCheckedList.length === wineOptions.aroma.length;

  const handleFlavorCheckAllChange = e => {
    setWineFlavorCheckedList(
      e.target.checked ? wineOptions.aroma.map(option => option.id) : [],
    );
    setFavoriteKeyword(prev => ({
      ...prev,
      aroma: wineOptions.aroma.map(option => option.id),
    }));
  };
  const handleAromaOnChange = list => {
    setWineFlavorCheckedList(list);
    setFavoriteKeyword(prev => ({ ...prev, aroma: list }));
  };

  // 이벤트핸들러 (저장하기)
  const handleKeywordChoice = () => {
    try {
      Modal.confirm({
        okText: "예",
        cancelText: "아니오",
        wrapClassName: "info-modal-wrap notice-modal",
        maskClosable: true,
        // title: "선호 키워드",
        content: (
          <ul>
            <li>선택한 내용을 저장하시겠습니까?</li>
          </ul>
        ),
        onOk() {
          postUserKeyword(favoriteKeyword, navigator);
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 모두선택하기
  const handleKeywordAll = async () => {
    setFavoriteKeyword({ ...wineOptions });
  };
  console.log("favoriteKeyword", favoriteKeyword);

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
              >
                {wineOptions.categoryId.map(option => (
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
              >
                {wineOptions.smallCategoryId.map(option => (
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
            <h3>원산지</h3>
            <div>
              <Checkbox.Group
                value={wineCountryCheckedList}
                onChange={handleCountryOnChange}
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
          {/* 향 취향선택 3차에 업데이트 예정 */}
          <li>
            <h3>향</h3>
            <div>
              <Checkbox.Group
                value={wineFlavorCheckedList}
                onChange={handleAromaOnChange}
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
        </ul>
      </ConfigProvider>
      <KeywordConfirmBtn>
        <ButtonOk onClick={handleKeywordChoice}>선택완료</ButtonOk>
        <ButtonCancel onClick={handleKeywordAll}>
          아무거나 상관없어요
        </ButtonCancel>
      </KeywordConfirmBtn>
    </KeywordWrap>
  );
};

export default KeywordChooseCp;
