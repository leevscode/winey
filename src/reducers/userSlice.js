import { createSlice } from "@reduxjs/toolkit";

// 초깃값 설정
const initialState = {
  userId: null,
  email: "",
  unm: "",
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
      state.unm = action.payload.unm;
      state.tel = action.payload.tel;
      state.regionNmId = action.payload.regionNmId;
      state.roleType = action.payload.roleType;
    },
    logoutUser: state => {
      state.userId = null;
      state.email = "";
      state.unm = "";
      state.tel = "";
      state.roleType = "";
      state.regionNmId = null;
    },
  },
});

export default userSlice.reducer;
export const { getUser, logoutUser } = userSlice.actions;
