import { configureStore } from "@reduxjs/toolkit";
import cinemaSlice from "./features/cinema/cinemaSlice";

export default configureStore({
  reducer: {
    cinema: cinemaSlice,
  },
});
