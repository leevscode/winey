import axios from "axios";
import { client } from "./client";

// 장바구니 출력
export const fetchCartData = async () => {
  try {
    const response = await client.get("/api/wine/filledcart");
    const cartData = response.data;
    return cartData; // 받아온 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return [];
  }
};

// 상품을 장바구니에서 삭제
export const removeCarts = async _removeCart => {
  try {
    const response = await client.delete("/api/wine/delete", {
      data: {
        cartId: _removeCart,
      },
    });
    console.log("장바구니 삭제 성공");
    const removedItem = response.data;
    return removedItem; // 삭제된 상품 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return [];
  }
};

// 상품 수량을 변경
export const changeQuantity = async (cartId, newQuantity) => {
  try {
    const response = await client.put(`/api/wine/quantity`, {
      cartId: cartId,
      quantity: newQuantity,
    });

    if (response.status === 200) {
      const updatedItem = response.data;
      return updatedItem; // 변경된 상품 데이터를 반환
    } else {
      console.error("상품 수량 변경 실패:", response);
      return null; // 실패 시에는 null
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};



export const addCart = async () => {
  try {
    const response = await axios.post(``);
    const addedItem = response.data;
    return addedItem; // 추가된 상품 데이터를 반환
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
  }
};

