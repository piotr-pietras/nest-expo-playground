import { createSelector } from "@reduxjs/toolkit";
import { Store } from "../redux/redux";
import { postEntityAdapter } from "../redux/post.slice";

const selectEntity = (state: Store) => state.postSlice.posts;

export const selectPosts = createSelector(selectEntity, (entity) => {
  return postEntityAdapter.getSelectors().selectAll(entity);
});

export const selectIsPending = (state: Store) => state.postSlice.isPending;
export const selectMessage = (state: Store) => state.postSlice.message;


