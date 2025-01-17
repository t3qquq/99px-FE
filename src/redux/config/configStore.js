import { configureStore } from "@reduxjs/toolkit";
import tempModule from "../modules/tempModule";

const store = configureStore({
  reducer: {
    tempModule,
  },
});

export default store;
