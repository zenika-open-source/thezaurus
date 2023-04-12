import { createSlice } from "@reduxjs/toolkit";

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState: {
    visible: false,
    link: "",
  },
  reducers: {
    hide: (state) => {
      state.visible = false;
      state.link = "";
    },
    defineLink: (state, action) => {
      state.link = action.payload;
      state.visible = true;
    },
  },
});

export const { hide, defineLink } = cinemaSlice.actions;

export default cinemaSlice.reducer;
