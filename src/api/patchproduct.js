/*
  작업자 : 김아영
  노션 : https://kimaydev.notion.site/kimaydev/FE-7a53f9f631f146c88c39413cd175a9d0
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/new?bigCategoryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = await res.data;
    // console.log("카테고리 id", _cate);
    // console.log("현재페이지", _page.current);
    // console.log("음식별 와인리스트 GET(최신등록순)", result);
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/expensive?bigCategoryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("음식별 와인리스트 GET(높은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/food/cheap?bigCategoryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("음식별 와인리스트 GET(낮은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/new/?countryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(최신등록순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/expensive?countryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(높은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
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
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/country/cheap?countryId=${_cate}&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("국가별 와인리스트 GET(낮은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("국가별 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 2만원 미만 와인리스트 GET(최신등록순)
export const getTotalMinusTwoNew = async (
  _setListScroll,
  _setHasNextPage,
  _page,
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/price${_cate}/new?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log(`${_cate} 미만 와인리스트 GET(최신등록순)`, result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("2만원 미만 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 2만원 미만 와인리스트 GET(높은금액순)
export const getTotalMinusTwoExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/price${_cate}/expencive?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("2만원 미만 와인리스트 GET(높은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("2만원 미만 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 2만원 미만 와인리스트 GET(낮은금액순)
export const getTotalMinusTwoCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
  _cate,
) => {
  try {
    const res = await axios.get(
      `/api/main/price${_cate}/cheap?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("2만원 미만 와인리스트 GET(낮은금액순)", result);
    // _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("2만원 미만 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};

// 상품리스트 - 레드와인 와인리스트 GET(최신금액순)
export const getRedWineNew = async (_setListScroll, _setHasNextPage, _page) => {
  try {
    const res = await axios.get(
      `/api/main/redWine/new?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("레드와인 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("레드와인 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};

// 상품리스트 - 레드와인 와인리스트 GET(높은금액순)
export const getRedWineExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/redWine/expencive?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("레드와인 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("레드와인 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};

// 상품리스트 - 레드와인 와인리스트 GET(낮은금액순)
export const getRedWineCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/redWine/cheap?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("레드와인 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("레드와인 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};

// 상품리스트 - 화이트와인 와인리스트 GET(최신금액순)
export const getWhiteWineNew = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/whiteWine/new?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("화이트와인 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("화이트와인 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};

// 상품리스트 - 화이트와인 와인리스트 GET(높은금액순)
export const getWhiteWineExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/whiteWine/expencive?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("화이트와인 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("화이트와인 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};

// 상품리스트 - 화이트와인 와인리스트 GET(낮은금액순)
export const getWhiteWineCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/whiteWine/cheap?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("화이트와인 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("화이트와인 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};

// 상품리스트 - 스파클링와인 와인리스트 GET(최신금액순)
export const getSpaklingWineNew = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/sparklingWine/new?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("스파클링와인 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("스파클링와인 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};
// 상품리스트 - 스파클링와인 와인리스트 GET(높은금액순)
export const getSpaklingWineExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/sparklingWine/expencive?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("스파클링와인 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("스파클링와인 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};
// 상품리스트 - 스파클링와인 와인리스트 GET(낮은금액순)
export const getSpaklingWineCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/sparklingWine/cheap?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("스파클링와인 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("스파클링와인 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};
// 상품리스트 - 기타와인 와인리스트 GET(최신금액순)
export const getEtcWineNew = async (_setListScroll, _setHasNextPage, _page) => {
  try {
    const res = await axios.get(
      `/api/main/otherWine/new?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("기타와인 와인리스트 GET(최신등록순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("기타와인 와인리스트 GET(최신등록순) 에러 발생", err);
  }
};
// 상품리스트 - 기타와인 와인리스트 GET(높은금액순)
export const getEtcWineExpensive = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/otherWine/expencive?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("기타와인 와인리스트 GET(높은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("기타와인 와인리스트 GET(높은금액순) 에러 발생", err);
  }
};
// 상품리스트 - 기타와인 와인리스트 GET(낮은금액순)
export const getEtcWineCheap = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/otherWine/cheap?page=${_page.current}&row=9`,
    );
    const result = res.data;
    // console.log("기타와인 와인리스트 GET(낮은금액순)", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("기타와인 와인리스트 GET(낮은금액순) 에러 발생", err);
  }
};
