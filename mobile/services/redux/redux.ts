import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./app.slice";
import createSagaMiddleware from "redux-saga";
import { sagas } from "../saga";
import { authSlice } from "./auth.slice";
import { userSlice } from "./user.slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

const states = store.getState();
export type Store = typeof states;
