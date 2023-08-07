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
  } catch (err) {
    console.log("입문용 와인 에러 발생", err);
  }
};

// 음식별 와인 GET
export const getFoodWines = async (bigCategoryId, _setFoodWines, _loading) => {
  _loading(true);
  try {
    const res = await axios.get(
      `/api/main/6/food?bigCategoryId=${bigCategoryId}`,
    );
    // const res = await axios.get("test");
    const result = res.data;
    // console.log("음식별 와인 데이터", result);
    _setFoodWines(result);
    _loading(false);
  } catch (err) {
    console.log("음식별 와인 에러 발생", err);
  }
};
