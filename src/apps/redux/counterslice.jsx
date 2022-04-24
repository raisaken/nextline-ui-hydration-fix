import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk("todos/gettodos", async () => {
  return fetch(`https://jsonplaceholder.typicode.com/notodos?_limit=5`).then((res) => res.json());
});

const counterslice = createSlice({
  name: "posts",
  initialState: {
    todos: [],
    status: "null",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const { increment, incrementbyvalue } = counterslice.actions;

export default counterslice.reducer;
