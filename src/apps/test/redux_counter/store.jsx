import { configureStore } from "@reduxjs/toolkit";
import Counter from "./counterSlice";

export default configureStore({
  reducer: {
    counter: Counter,
  },
});
