import { call, put, takeLatest } from "redux-saga/effects";
import { Post, postSlice } from "../redux/post.slice";
import { addPost, getPosts } from "@/helpers/backend";
import { router } from "expo-router";

const {
  getPosts$,
  setPosts,
  addPost$,
  addOnePost,
  setPending,
  setMessage,
  removeMessage,
} = postSlice.actions;

export function* getPostsSaga() {
  yield takeLatest(getPosts$, function* () {
    yield put(setPending(true));
    try {
      const posts: Post[] = yield call(getPosts);
      yield put(setPosts(posts));
    } catch (error) {
    } finally {
      yield put(setPending(false));
    }
  });
}

export function* addPostSaga() {
  yield takeLatest(addPost$, function* ({ payload }) {
    yield put(removeMessage());
    yield put(setPending(true));
    try {
      const post: Post = yield call(addPost, payload);
      yield put(addOnePost(post));
      router.back();
    } catch (error) {
      yield put(setMessage((error as any).message));
    } finally {
      yield put(setPending(false));
    }
  });
}
