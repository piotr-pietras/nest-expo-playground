import { fork } from "redux-saga/effects";
import { appInitSaga } from "./app.saga";

export function* sagas() {
  yield fork(appInitSaga);
}
