import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
  id: string;
  email: string;
  posts: { id: string }[];
}

interface InitialState {
  user?: User;
  isPending: boolean;
}

const initialState: InitialState = {
  user: undefined,
  isPending: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    getUser$: () => {},
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
    },
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPending = payload;
    },
  },
});
