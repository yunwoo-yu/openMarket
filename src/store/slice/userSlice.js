import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const initialState = {
  token,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getToken(state, action) {
      state.token += action.payload;
    },
  },
});

export const { getToken } = userSlice.actions;

export default userSlice;
