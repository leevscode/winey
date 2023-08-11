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

// 상품리스트 전체보기 - 음식별 와인리스트 GET
export const getTotalCountry = async (
  _setListScroll,
  _setHasNextPage,
  _page,
) => {
  try {
    const res = await axios.get(
      `/api/main/food?bigCategoryId=1&page=${_page.current}&row=9`,
    );
    const result = res.data;
    console.log("음식별 와인리스트 GET", result);
    _setListScroll(prevPosts => [...prevPosts, ...result]);
    _setHasNextPage(result.length === 9);
    if (result.length) {
      _page.current += 1;
    }
    return result;
  } catch (err) {
    console.log("음식별 와인리스트 전체보기 에러 발생", err);
  }
};
