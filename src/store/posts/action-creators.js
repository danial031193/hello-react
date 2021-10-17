import TYPES from './action-types';

export const getPosts = (test) => ({
  type: TYPES.GET_POSTS,
  payload: { test },
});

export const getPostsSuccess = (data) => ({
  type: TYPES.GET_POSTS_SUCCESS,
  payload: { data },
});

export const getPostsError = (message) => ({
  type: TYPES.GET_POSTS_ERROR,
  payload: { message },
});
