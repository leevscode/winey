/*
    작업자 : 이동은
    노션 : https://www.notion.so/leevscode/leevscode-5223e3d332604844a255a0c63113a284
    깃허브 : https://github.com/leevscode
*/
import { totalItem } from "../reducers/cartSlice";
import { client } from "./client";

// 장바구니 출력
export const fetchCartData = async () => {
  try {
    const response = await client.get("/api/wine/filledcart");
    const cartData = await response.data;
    // console.log(cartData);
    // const cartLength = await cartData.length;
    // console.log("장바구니 갯수 출력", cartLength);
    console.log("장바구니 get", cartData);
    return cartData;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    // return [];
  }
};
// 장바구니 갯수 출력
export const cartLengthData = async dispatch => {
  try {
    const res = await client.get("/api/wine/filledcart");
    const result = await res.data;
    const cartLength = await result.length;
    // console.log("장바구니 갯수 출력", cartLength);
    dispatch(totalItem(cartLength));
    return cartLength;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
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
    // console.log("장바구니 삭제 성공");
    const removedItem = response.data;
    return removedItem; // 삭제된 상품 데이터를 반환
  } catch (error) {
    // console.error("API 요청 중 오류 발생:", error);
    return [];
  }
};

// 장바구니 추가 POST
export const addCart = async _productId => {
  try {
    const res = await client.post("/api/wine/cart", {
      quantity: 1,
      productId: _productId,
    });
    const result = res.data;
    // console.log("장바구니 추가 POST 성공", result);
    return result;
  } catch (error) {
    // console.error("API 요청 중 오류 발생:", error);
  }
};
