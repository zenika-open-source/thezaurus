import { createSlice } from "@reduxjs/toolkit";

export const cinemaSlice = createSlice({
  name: "cinema",
  initialState: {
    visible: false,
    link: "",
  },
  reducers: {
    show: (state) => {
      state.visible = true;
    },
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

export const { show, hide, defineLink } = cinemaSlice.actions;

export default cinemaSlice.reducer;
