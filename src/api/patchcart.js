import axios from "axios";

// 장바구니 출력
export const fetchCartData = async () => {
  try {
    const response = await axios.get("api/wine/filledcart");
    const cartData = response.data;
    return cartData; // 받아온 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return [];
  }
};

// 장바구니 총합계
export const fetchCartTotal = async () => {
  try {
    const response = await axios.get(``);
    const cartTotal = response.data;
    return cartTotal;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};

// 상품을 장바구니에 추가
export const addToCart = async () => {
  try {
    const response = await axios.post(``);
    const addedItem = response.data;
    return addedItem; // 추가된 상품 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};

// 상품 수량을 변경
export const changeQuantity = async (itemId, newQuantity) => {
  try {
    const response = await axios.put(``, {
      quantity: newQuantity,
    });
    const updatedItem = response.data;
    return updatedItem; // 변경된 상품 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};

// 상품을 장바구니에서 삭제
export const removeFromCart = async () => {
  try {
    const response = await axios.delete(``);
    const removedItem = response.data;
    return removedItem; // 삭제된 상품 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};
