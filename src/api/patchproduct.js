/*
  작업자 : 김아영
  노션 : https://www.notion.so/kimaydev
  깃허브 : https://github.com/kimaydev
*/
import axios from "axios";

// 와인 한글이름 GET
export const getKorNm = async (_setKorNm, _productId) => {
  try {
    const res = await axios.get(`/api/detail/korNm/${_productId}`);
    const result = res.data;
    _setKorNm(result);
    // console.log("와인 한글이름 axios", result);
    return result;
  } catch (err) {
    console.log("와인 한글이름 에러발생", err);
  }
};

// 와인 상세페이지 GET
export const getProductDetail = async (_setProductDetail, _productId) => {
  try {
    const res = await axios.get(`/api/detail/${_productId}`);
    const result = res.data;
    _setProductDetail(result);
    // console.log("와인 상세페이지 axios", result);
    return result;
  } catch (err) {
    console.log("와인 상세페이지 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 음식별 와인리스트 GET(최신등록순)
export const getTotalFoodNew = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/new?bigCategoryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("음식별 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("음식별 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 음식별 와인리스트 GET(높은금액순)
export const getTotalFoodExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/expensive?bigCategoryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("음식별 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("음식별 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 음식별 와인리스트 GET(낮은금액순)
export const getTotalFoodCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/cheap?bigCategoryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("음식별 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("음식별 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 국가별 와인리스트 GET(최신등록순)
export const getTotalCountryNew = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/new/?countryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("국가별 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 국가별 와인리스트 GET(높은금액순)
export const getTotalCountryExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/expensive?countryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("국가별 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 국가별 와인리스트 GET(낮은금액순)
export const getTotalCountryCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/cheap?countryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("국가별 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};
