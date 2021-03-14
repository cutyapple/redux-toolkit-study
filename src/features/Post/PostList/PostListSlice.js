import { createSlice } from "@reduxjs/toolkit";

const name = "POST/POSTLIST";
const initialState = {
  isLoading: false,
  postList: [],
  error: null,
};
const reducers = {
  loadPost: (state) => {
    state.isLoading = true;
  },
  loadPostSuccess: (state, { payload: posts }) => {
    state.isLoading = false;
    state.postList = posts;
  },
  loadPostFail: (state, { payload: error }) => {
    state.isLoading = false;
    state.error = error;
  },
};

const postListSlice = createSlice({
  name,
  initialState,
  reducers,
});

export const POSTLIST = postListSlice.name;
export const postListActions = postListSlice.actions;
export default postListSlice.reducer;
