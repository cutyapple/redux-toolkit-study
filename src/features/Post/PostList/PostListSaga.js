import { call, put, takeLatest } from "redux-saga/effects";
import { getPostUrl } from "../../../api/PostList";
import { methodType, requestApi } from "../../../api/requestAPI";

import { postListActions } from "./PostListSlice";

function* handleLoadPost() {
  const { loadPostSuccess, loadPostFail } = postListActions;

  try {
    const REQUEST_URL = getPostUrl();

    const res = yield call(requestApi, methodType.GET, REQUEST_URL);
    const posts = res.data;

    yield put(loadPostSuccess(posts));
  } catch (error) {
    console.log("PostListSaga/handleLoadPost");
    console.log(error);
  }
}

export default function* watchPostList() {
  const { loadPost } = postListActions;

  yield takeLatest(loadPost, handleLoadPost);
}
