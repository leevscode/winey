import axios from "axios";

// 와인 한글이름 GET
export const getKorNm = async (_setKorNm, _productId) => {
  try {
    const res = await axios.get(`/detail/korNm/${_productId}`);
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
    const res = await axios.get(`/detail/${_productId}`);
    const result = res.data;
    _setProductDetail(result);
    // console.log("와인 상세페이지 axios", result);
    return result;
  } catch (err) {
    console.log("와인 상세페이지 에러 발생", err);
  }
};

// 상품리스트 전체보기 - 국가별 와인리스트 GET
export const getTotalCountry = async _setTotalList => {
  try {
    const res = await axios.get(
      // `/api/main/food?bigCategoryId=1&page=${_pageId}&row=9`,
      `/api/main/food?bigCategoryId=1&page=1&row=9`,
    );
    // 카테고리 id 값에 따라 내용 다르게 출력하는 작업 필요함
    // const res = await axios.get(`/api/main/food?bigCategoryId=1&page=1&row=9`)
    const result = res.data;
    console.log("국가별 와인리스트 GET", result);
    _setTotalList(result);
    return result;
  } catch (err) {
    console.log("국가별 와인리스트 전체보기 에러 발생", err);
  }
};
