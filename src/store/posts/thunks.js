import { getPostsError, getPostsSuccess, getPosts as getPostsAction } from './action-creators';
import { fetchPosts } from './api';

export const getPosts = () => async (dispatch) => {
  dispatch(getPostsAction());

  try {
    const posts = await fetchPosts();

    dispatch(getPostsSuccess(posts));
  } catch (e) {
    dispatch(getPostsError(e.message));
  }
};
