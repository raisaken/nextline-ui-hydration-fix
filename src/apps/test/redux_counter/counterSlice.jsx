import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 30 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementbyvalue: (state, action) => {
      state.value += action.payload;
    },
  },
  extrareducer: {},
});

export const incrementbyasyncvalue = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementbyvalue(amount));
  }, 5000);
};

export const { increment, incrementbyvalue } = CounterSlice.actions;

export default CounterSlice.reducer;
