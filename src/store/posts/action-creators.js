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

export const getUserPosts = (id) => ({
  type: TYPES.GET_USER_POSTS,
  payload: { id },
});

export const getUserPostsSuccess = (data) => ({
  type: TYPES.GET_USER_POSTS_SUCCESS,
  payload: { data },
});

export const getUserPostsError = (message) => ({
  type: TYPES.GET_USER_POSTS_ERROR,
  payload: { message },
});
