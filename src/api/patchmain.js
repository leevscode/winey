import axios from "axios";

// 입문용 와인 GET
export const getRandomWines = async (_setRandomWines, _loading) => {
  _loading(true);
  try {
    const res = await axios.get("/api/main/6/random-wines");
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("입문용 와인 데이터", result);
    _setRandomWines(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("입문용 와인 에러 발생", err);
  }
};

// 음식별 와인 GET
export const getFoodWines = async (_bigCategoryId, _setFoodWines, _loading) => {
  _loading(true);
  try {
    const res = await axios.get(
      `/api/main/6/food?bigCategoryId=${_bigCategoryId}`,
    );
    // const res = await axios.get("test");
    const result = res.data;
    console.log("음식별 와인 데이터", result);
    _setFoodWines(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("음식별 와인 에러 발생", err);
  }
};

// 국가별 와인 GET
export const getContryWines = async (
  _countryId,
  _setCountryWines,
  _loading,
) => {
  _loading(true);
  try {
    const res = await axios.get(`/api/main/6/country?countryId=${_countryId}`);
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("국가별 와인 데이터", result);
    _setCountryWines(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("국가별 와인 에러 발생", err);
  }
};

// 2만원 미만 와인 GET
export const getPriceMinusTwo = async (_setPriceMinusTwo, _loading) => {
  _loading(true);
  try {
    const res = await axios.get("/api/main/6/price2");
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("1. 2만원 미만 와인 데이터", result);
    _setPriceMinusTwo(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("1. 2만원 미만 와인 에러 발생", err);
  }
};
// 2만원 이상 5만원 미만 와인 GET
export const getPriceOverTwo = async (_setPriceOverTwo, _loading) => {
  _loading(true);
  try {
    const res = await axios.get("/api/main/6/price25");
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("2. 2만원 이상 5만원 미만 와인 데이터", result);
    _setPriceOverTwo(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("2. 2만원 이상 5만원 미만 와인 에러 발생", err);
  }
};
// 5만원 이상 10만원 미만 와인 GET
export const getPriceOverFive = async (_setPriceOverFive, _loading) => {
  _loading(true);
  try {
    const res = await axios.get("/api/main/6/price510");
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("3. 5만원 이상 10만원 미만 와인 데이터", result);
    _setPriceOverFive(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("3. 5만원 이상 10만원 미만 와인 에러 발생", err);
  }
};
// 10만원 이상 와인 GET
export const getPricePlusTen = async (_setPricePlusTen, _loading) => {
  _loading(true);
  try {
    const res = await axios.get("/api/main/6/price10");
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("4. 10만원 이상 와인 데이터", result);
    _setPricePlusTen(result);
    _loading(false);
    return result;
  } catch (err) {
    console.log("4. 10만원 이상 와인 에러 발생", err);
  }
};
