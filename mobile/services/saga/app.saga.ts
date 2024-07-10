import { call, put, takeLeading } from "redux-saga/effects";
import { appSlice } from "../redux/app.slice";
import { router } from "expo-router";
import { getUser } from "@/helpers/backend";
import { User, userSlice } from "../redux/user.slice";

const { setInit, setLoading } = appSlice.actions;
const { setUser } = userSlice.actions;

export function* appInitSaga() {
  yield takeLeading(appSlice.actions.appInit$, function* () {
    setLoading(true);
    try {
      const user: User = yield call(getUser);
      if (user) {
        yield put(setUser(user));
        router.replace("/home");
      } else {
        router.replace("/auth");
      }
    } catch (error) {
      router.replace("/auth");
    } finally {
      setLoading(false);
    }
    yield put(setInit(true));
  });
}
