/*
    작업자 : 최혜미
    노션 : https://hyemdev.notion.site/hyemdev/hyem-s-dev-STUDY-75ffe819c7534a049b59871e6fe17dd4
    깃허브 : https://github.com/hyemdev
*/

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Checkbox, ConfigProvider, Modal } from "antd";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import {
  EditKeywordConfirmBtn,
  KeywordSwiperWrap,
  KeywordWrap,
} from "../../style/KeywordStyle";
import { ButtonCancel, ButtonOk } from "../../style/GlobalStyle";
import { putUserKeyword } from "../../api/keywordpatch";
import { wineOptions } from "../../pages/login/KeywordSelect";

const KeywordEditCp = ({ yourKeyword }) => {
  const navigator = useNavigate();
  // swiper DOM 선택
  const swiperRef = useRef();

  //수정된 선호키워드를 담는다(초기값에는 이전에 선택한 항목을 담자)
  const [editFavoriteKeyword, setEditFavoriteKeyword] = useState(yourKeyword);

  // 각 항목별로 키워드 관리 (초기값에는 기존에 선택한 항목이 담긴다.)
  const [wineTypeCheckedList, setWineTypeCheckedList] = useState(
    yourKeyword.categoryId,
  );
  const [winePriceCheckedList, setWinePriceCheckedList] = useState(
    yourKeyword.priceRange,
  );
  const [wineWithFoodCheckedList, setWineWithFoodCheckedList] = useState(
    yourKeyword.smallCategoryId,
  );
  const [wineFlavorCheckedList, setWineFlavorCheckedList] = useState(
    yourKeyword.aromaCategoryId,
  );
  const [wineCountryCheckedList, setWineCountryCheckedList] = useState(
    yourKeyword.countryId,
  );

  // 와인종류 핸들러
  const isTypeIndeterminate =
    wineTypeCheckedList.length &&
    wineTypeCheckedList.length < wineOptions.categoryId.length;
  const isTypeCheckAll =
    wineTypeCheckedList.length === wineOptions.categoryId.length;

  const handleTypeCheckAllChange = e => {
    setWineTypeCheckedList(
      e.target.checked ? wineOptions.categoryId.map(option => option.id) : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      categoryId: wineOptions.categoryId.map(option => option.id) || [],
    }));
    // 아무거나 버튼 클릭 시 다음 슬라이드로 이동
    swiperRef.current.slideNext();
  };
  const handleTypeOnChange = list => {
    setWineTypeCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, categoryId: list }));
  };

  // 와인금액 핸들러
  const isPriceIndeterminate =
    winePriceCheckedList.length &&
    winePriceCheckedList.length < wineOptions.priceRange.length;
  const isPriceCheckAll =
    winePriceCheckedList.length === wineOptions.priceRange.length;
  const handlePriceCheckAllChange = e => {
    setWinePriceCheckedList(
      e.target.checked ? wineOptions.priceRange.map(option => option.id) : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      priceRange: wineOptions.priceRange.map(option => option.id) || [],
    }));
    // 아무거나 버튼 클릭 시 다음 슬라이드로 이동
    swiperRef.current.slideNext();
  };
  const handlePriceOnChange = list => {
    setWinePriceCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, priceRange: list }));
  };

  // 페어링 음식 핸들러
  const isWithFoodIndeterminate =
    wineWithFoodCheckedList.length &&
    wineWithFoodCheckedList.length < wineOptions.smallCategoryId.length;
  const isWithFoodCheckAll =
    wineWithFoodCheckedList.length === wineOptions.smallCategoryId.length;
  const handleWithFoodCheckAllChange = e => {
    setWineWithFoodCheckedList(
      e.target.checked
        ? wineOptions.smallCategoryId.map(option => option.id)
        : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      smallCategoryId:
        wineOptions.smallCategoryId.map(option => option.id) || [],
    }));
    // 아무거나 버튼 클릭 시 다음 슬라이드로 이동
    swiperRef.current.slideNext();
  };
  const handleWithFoodOnChange = list => {
    setWineWithFoodCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, smallCategoryId: list }));
  };

  // 원산지 핸들러
  const isCountryIndeterminate =
    wineCountryCheckedList.length &&
    wineCountryCheckedList.length < wineOptions.countryId.length;
  const isCountryCheckAll =
    wineCountryCheckedList.length === wineOptions.countryId.length;

  const handleCountryCheckAllChange = e => {
    setWineCountryCheckedList(
      e.target.checked ? wineOptions.countryId.map(option => option.id) : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      countryId: wineOptions.countryId.map(option => option.id) || [],
    }));
    // 아무거나 버튼 클릭 시 다음 슬라이드로 이동
    swiperRef.current.slideNext();
  };
  const handleCountryOnChange = list => {
    setWineCountryCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, countryId: list }));
  };

  // 향 선택
  const isFlavorIndeterminate =
    !!wineFlavorCheckedList.length &&
    wineFlavorCheckedList.length < wineOptions.aromaCategoryId.length;
  const isFlavorCheckAll =
    wineFlavorCheckedList.length === wineOptions.aromaCategoryId.length;

  const handleFlavorCheckAllChange = e => {
    setWineFlavorCheckedList(
      e.target.checked
        ? wineOptions.aromaCategoryId.map(option => option.id)
        : [],
    );
    setEditFavoriteKeyword(prev => ({
      ...prev,
      aromaCategoryId:
        wineOptions.aromaCategoryId.map(option => option.id) || [],
    }));
  };
  const handleAromaOnChange = list => {
    setWineFlavorCheckedList(list);
    setEditFavoriteKeyword(prev => ({ ...prev, aromaCategoryId: list }));
  };

  const allSelect = () => {
    const categoryId = wineOptions.categoryId.map(item => item.id);
    const priceRange = wineOptions.priceRange.map(item => item.id);
    const countryId = wineOptions.countryId.map(item => item.id);
    const smallCategoryId = wineOptions.smallCategoryId.map(item => item.id);
    const aromaCategoryId = wineOptions.aromaCategoryId.map(item => item.id);
    return {
      categoryId,
      priceRange,
      countryId,
      smallCategoryId,
      aromaCategoryId,
    };
  };
  // console.log("editFavoriteKeyword", editFavoriteKeyword);
  // 이벤트핸들러 (저장하기)
  const handleEditKeywordChoice = () => {
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
          putUserKeyword(editFavoriteKeyword, navigator);
        },
        onCancel() {
          // console.log("Cancel");
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 모두선택하기
  const handleEditKeywordAll = async () => {
    Modal.confirm({
      okText: "예",
      cancelText: "아니오",
      wrapClassName: "info-modal-wrap notice-modal",
      maskClosable: true,
      // title: "선호 키워드",
      content: (
        <ul>
          <li>모두선택을 저장 하시겠습니까? </li>
          <p style={{ fontSize: "1.4rem" }}>
            모두 선택 시 데이터 로딩이 길어질 수 있습니다.
          </p>
        </ul>
      ),
      async onOk() {
        try {
          await putUserKeyword(allSelect(), navigator);
        } catch (error) {
          console.log(error);
        }
      },
      onCancel() {
        // console.log("Cancel");
      },
    });
  };

  return (
    <>
      <KeywordWrap>
        <ConfigProvider
          theme={{
            token: {
              // colorPrimary: "#79213d",
              fontFamily:
                '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
            },
          }}
        >
          <KeywordSwiperWrap>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".keyword-button-prev",
                nextEl: ".keyword-button-next",
              }}
              pagination={true}
              speed={700}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {/* 와인종류 */}
              <SwiperSlide>
                <div className="title">
                  <h3>와인종류</h3>
                  <p>원하시는 와인의 종류를 선택해주세요.</p>
                </div>
                <div>
                  <Checkbox.Group
                    value={wineTypeCheckedList}
                    onChange={handleTypeOnChange}
                    // defaultValue={yourKeyword.categoryId}
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
                    <i>
                      <FontAwesomeIcon icon={faQuestion} />
                    </i>
                    아무거나
                  </Checkbox>
                </div>
              </SwiperSlide>
              {/* 가격대 */}
              <SwiperSlide>
                <div className="title">
                  <h3>가격대</h3>
                  <p>원하시는 가격대를 선택해주세요.</p>
                </div>
                <div>
                  <Checkbox.Group
                    value={winePriceCheckedList}
                    onChange={handlePriceOnChange}
                    // defaultValue={yourKeyword.priceRange}
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
                    <i>
                      <FontAwesomeIcon icon={faQuestion} />
                    </i>
                    아무거나
                  </Checkbox>
                </div>
              </SwiperSlide>
              {/* 페어링음식 */}
              <SwiperSlide>
                <div className="title">
                  <h3>페어링음식</h3>
                  <p>원하시는 페어링 음식을 선택해주세요.</p>
                </div>
                <div>
                  <Checkbox.Group
                    value={wineWithFoodCheckedList}
                    onChange={handleWithFoodOnChange}
                    // defaultValue={yourKeyword.smallcategoryId}
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
                    <i>
                      <FontAwesomeIcon icon={faQuestion} />
                    </i>
                    아무거나
                  </Checkbox>
                </div>
              </SwiperSlide>
              {/* 원산지 */}
              <SwiperSlide>
                <div className="title">
                  <h3>원산지</h3>
                  <p>원하시는 원산지를 선택해주세요.</p>
                </div>
                <div>
                  <Checkbox.Group
                    value={wineCountryCheckedList}
                    onChange={handleCountryOnChange}
                    // defaultValue={yourKeyword.countryId}
                  >
                    {wineOptions.countryId.map(option => (
                      <Checkbox key={option.id} value={option.id}>
                        {option.value}
                      </Checkbox>
                    ))}
                  </Checkbox.Group>
                  <Checkbox
                    indeterminate={isCountryIndeterminate}
                    onChange={handleCountryCheckAllChange}
                    checked={isCountryCheckAll}
                  >
                    <i>
                      <FontAwesomeIcon icon={faQuestion} />
                    </i>
                    아무거나
                  </Checkbox>
                </div>
              </SwiperSlide>
              {/* 향 */}
              <SwiperSlide>
                <div className="title">
                  <h3>향(아로마)</h3>
                  <p>원하시는 향을 선택해주세요.</p>
                </div>
                <div>
                  <Checkbox.Group
                    value={wineFlavorCheckedList}
                    onChange={handleAromaOnChange}
                    // defaultValue={yourKeyword.aromaCategoryId}
                  >
                    {wineOptions.aromaCategoryId.map(option => (
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
                    <i>
                      <FontAwesomeIcon icon={faQuestion} />
                    </i>
                    아무거나
                  </Checkbox>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* 슬라이드 버튼 */}
            <div className="btn-wrap">
              <button className="keyword-button-prev">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className="keyword-button-next">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </KeywordSwiperWrap>
        </ConfigProvider>
        <EditKeywordConfirmBtn>
          <ButtonOk onClick={handleEditKeywordChoice}>키워드 수정완료</ButtonOk>
          <ButtonCancel onClick={handleEditKeywordAll}>
            아무거나 상관없어요
          </ButtonCancel>
        </EditKeywordConfirmBtn>
      </KeywordWrap>
    </>
  );
};

export default KeywordEditCp;
