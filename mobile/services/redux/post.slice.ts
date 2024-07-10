import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export interface Post {
  id: string;
  title: string;
  body: string;
  timestamp: string;
  author: string;
}

export const postEntityAdapter = createEntityAdapter<Post, string>({
  selectId: (post) => post.id,
});

interface InitialState {
  posts: ReturnType<typeof postEntityAdapter.getInitialState>;
  isPending: boolean;
  message?: string | string[];
}

const initialState: InitialState = {
  posts: postEntityAdapter.getInitialState(),
  isPending: false,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    getPosts$: () => {},
    setPosts: (state, { payload }: PayloadAction<Post[]>) => {
      postEntityAdapter.setAll(state.posts, payload);
    },
    setPending: (state, { payload }: PayloadAction<boolean>) => {
      state.isPending = payload;
    },
    addPost$: (_, _2: PayloadAction<Pick<Post, "title" | "body">>) => {},
    addOnePost: (state, { payload }: PayloadAction<Post>) => {
      postEntityAdapter.addOne(state.posts, payload);
    },
    setMessage: (state, { payload }: PayloadAction<string | string[]>) => {
      state.message = payload;
    },
    removeMessage: (state) => {
      state.message = undefined;
    },
  },
});
