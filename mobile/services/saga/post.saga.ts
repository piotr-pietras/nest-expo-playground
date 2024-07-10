import { call, put, takeLatest } from "redux-saga/effects";
import { Post, postSlice } from "../redux/post.slice";
import { getPosts } from "@/helpers/backend";

const { getPosts$, setPosts, setPending } = postSlice.actions;

export function* getPostsSaga() {
  yield takeLatest(getPosts$, function* () {
    try {
      yield put(setPending(true));
      const posts: Post[] = yield call(getPosts);
      yield put(setPosts(posts));
    } catch (error) {
    } finally {
      yield put(setPending(false));
    }
  });
}
