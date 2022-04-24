import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("post ", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res);
});

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    value: 20,
    status: null,
    posts: [],
  },
  reducers: {
    increment(state) {
      state.value+=1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});
export const {increment} = PostSlice.actions;
export default PostSlice.reducer;
