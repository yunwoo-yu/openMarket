import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
