import { call, put, takeLeading } from "redux-saga/effects";
import { appSlice } from "../redux/app.slice";
import { router } from "expo-router";
import { getUser } from "@/helpers/backend";

const { setInit, setLoading } = appSlice.actions;

export function* appInitSaga() {
  yield takeLeading(appSlice.actions.appInit$, function* () {
    try {
      setLoading(true);
      const user: unknown = yield call(getUser);
      if (user) {
        router.push("/home");
      } else {
        router.push("/auth");
      }
    } catch (error) {
      router.push("/auth");
    } finally {
      setLoading(false);
    }
    yield put(setInit(true));
  });
}
