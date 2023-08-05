import axios from "axios";

export const getRandomWines = async () => {
  try {
    const res = await axios.get("/api/main/6/random-wines");
    const result = res.data;
    console.log("입문용 와인 데이터", result);
    return result;
  } catch (err) {
    console.log("입문용 와인 에러 발생", err);
  }
};
