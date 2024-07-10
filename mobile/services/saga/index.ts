import { fork } from "redux-saga/effects";
import { appInitSaga } from "./app.saga";
import { signInSaga, signUpSaga } from "./auth.saga";
import { getUserSaga } from "./user.saga";
import { getPostsSaga } from "./post.saga";

export function* sagas() {
  yield fork(appInitSaga);
  yield fork(signUpSaga);
  yield fork(signInSaga);
  yield fork(getUserSaga);
  yield fork(getPostsSaga);
}
