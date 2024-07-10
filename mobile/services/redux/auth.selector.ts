import { Store } from "./redux";

export const selectIsPending = (state: Store) => state.authSlice.isPending;
export const selectMessage = (state: Store) => state.authSlice.message;

