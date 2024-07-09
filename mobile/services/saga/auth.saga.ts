import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { authSlice } from "../redux/auth.slice";
import { signIn, signUp } from "@/helpers/backend";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {
  signUp$,
  signIn$,
  setPending,
  setMessage: setError,
  removeMessage: removeError,
} = authSlice.actions;

export function* signUpSaga() {
  yield takeLatest(signUp$, function* ({ payload }) {
    yield put(removeError());
    yield put(setPending(true));
    try {
      const res: Awaited<ReturnType<typeof signUp>> = yield call(
        signUp,
        payload
      );
      yield call(AsyncStorage.setItem, "access_token", res.access_token);
      router.replace("/home");
    } catch (error) {
      yield put(setError((error as any).message));
    } finally {
      yield put(setPending(false));
    }
  });
}

export function* signInSaga() {
  yield takeLatest(signIn$, function* ({ payload }) {
    yield put(removeError());
    yield put(setPending(true));
    try {
      const res: Awaited<ReturnType<typeof signIn>> = yield call(
        signIn,
        payload
      );
      yield call(AsyncStorage.setItem, "access_token", res.access_token);
      router.replace("/home");
    } catch (error) {
      yield put(setError((error as any).message));
    } finally {
      yield put(setPending(false));
    }
  });
}
