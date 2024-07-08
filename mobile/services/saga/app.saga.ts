import { put, takeLeading } from "redux-saga/effects";
import { appSlice } from "../redux/app.slice";
import { Alert } from "react-native";

const { setInit } = appSlice.actions;

export function* appInitSaga() {
  yield takeLeading(appSlice.actions.appInit$, function* () {
    try {
    } catch (error) {
      Alert.alert("Network error");
    }
    yield put(setInit(true));
  });
}
