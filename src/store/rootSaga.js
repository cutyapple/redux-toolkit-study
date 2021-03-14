import { all } from "redux-saga/effects";
import watchPostList from "../features/Post/PostList/PostListSaga";

function* rootSaga() {
  yield all([watchPostList()]);
}

export default rootSaga;
