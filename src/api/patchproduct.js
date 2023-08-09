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
    console.log("와인 상세페이지 axios", result);
    return result;
  } catch (err) {
    console.log("와인 상세페이지 에러 발생", err);
  }
};

// 입문 난이도 GET
// export const getFeature = async (_setFeature, _productId) => {
//   try {
//     const res = await axios.get(`/api/main/feature?productId=${_productId}`);
//     const result = res.data;
//     _setFeature(result);
//     // console.log("입문 난이도 axios", result);
//     return result;
//   } catch (err) {
//     console.log("입문 난이도 에러 발생", err);
//   }
// };
