import { createSlice } from "@reduxjs/toolkit";

// 초깃값 설정
const initialState = {
  cartLength: 0,
};

// slice 생성
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    totalItem: (state, action) => {
      console.log(action);
      state.cartLength = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { totalItem } = cartSlice.actions;
