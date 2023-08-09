import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import userSlice from "../reducers/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
});

export default store;
