import { Store } from "./redux";

export const selectIsPending = (state: Store) => state.authSlice.isPending;
export const selectError = (state: Store) => state.authSlice.message;

