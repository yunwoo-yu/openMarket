import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
