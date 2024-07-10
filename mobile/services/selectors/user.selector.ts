import { Store } from "../redux/redux";

export const selectUser = (state: Store) => state.userSlice.user;
