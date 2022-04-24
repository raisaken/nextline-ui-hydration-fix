import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
