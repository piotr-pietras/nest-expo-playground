import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user?: { email: string; id: string };
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
    setUser: (
      state,
      { payload }: PayloadAction<{ email: string; id: string }>
    ) => {
      state.user = payload;
    },
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPending = payload;
    },
  },
});
