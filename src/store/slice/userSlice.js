import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("token");
const initialState = {
  token,
  type: "BUYER",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getToken(state, action) {
      state.token += action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
  },
});

export const { getToken, setType } = userSlice.actions;

export default userSlice;
