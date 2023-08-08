import axios from "axios";

export const fetchCartData = async () => {
  try {
    const response = await axios.get("/api/wine/filledcart?userId=1");
    const cartData = response.data;
    return cartData; // 받아온 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    throw error; 
  }
};
