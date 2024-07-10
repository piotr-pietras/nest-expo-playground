import { call, put, takeLatest } from "redux-saga/effects";
import { userSlice } from "../redux/user.slice";
import { getUser } from "@/helpers/backend";

const { getUser$, setPending, setUser } = userSlice.actions;

export function* getUserSaga() {
  yield takeLatest(getUser$, function* () {
    yield put(setPending(true));
    try {
      const user: Awaited<ReturnType<typeof getUser>> = yield call(getUser);
      yield put(setUser(user));
    } catch (error) {
    } finally {
      yield put(setPending(false));
    }
  });
}
