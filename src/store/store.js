import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
import userSlice from "../reducers/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
// persist config 작성
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  whitelist: ["user", "cart"], // target (reducer name)
};
const reducer = combineReducers({
  cart: cartReducer,
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, //직렬화 안하겠다 설정
    }),
});
export default store;