import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isPending: boolean;
  message?: string | string[];
}

const initialState: InitialState = {
  isPending: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    signUp$: (_, _2: PayloadAction<{ email: string; password: string }>) => {},
    signIn$: (_, _2: PayloadAction<{ email: string; password: string }>) => {},
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPending = payload;
    },
    setMessage: (state, { payload }: PayloadAction<string | string[]>) => {
      state.message = payload;
    },
    removeMessage: (state) => {
      state.message = undefined;
    },
  },
});
