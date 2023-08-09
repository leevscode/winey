import { createSlice } from "@reduxjs/toolkit";

// 초깃값 설정
const initialState = {
  userId: null,
  email: "",
  nm: "",
  tel: "",
  regionNmId: null,
};

// slice 생성
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      state.nm = action.payload.nm;
      state.tel = action.payload.tel;
      state.regionNmId = action.payload.regionNmId;
    },
    logoutUser: state => {
      state.userId = null;
      state.email = "";
      state.nm = "";
      state.tel = "";
      state.regionNmId = null;
    },
  },
});

export default userSlice.reducer;
export const { getUser, logoutUser } = userSlice.actions;
