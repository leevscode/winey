import axios from "axios";

export const getRandomWines = async (_setRandomWines, _loading) => {
  try {
    const res = await axios.get("/api/main/6/random-wines");
    // const res = await axios.get("test");
    const result = res.data;
    console.log("입문용 와인 데이터", result);
    _setRandomWines(result);
    _loading(false);
  } catch (err) {
    console.log("입문용 와인 에러 발생", err);
  }
};
