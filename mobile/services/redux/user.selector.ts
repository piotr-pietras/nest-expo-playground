import { Store } from "./redux";

export const selectUser = (state: Store) => state.userSlice.user;
