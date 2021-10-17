import { call, takeLatest, put } from 'redux-saga/effects';
import { getPostsSuccess, getPostsError } from './action-creators';
import TYPES from './action-types';
import { fetchPosts } from './api';

function* getPosts({ payload: { test } }) {
  console.log({ test });

  try {
    const posts = yield call(fetchPosts);

    yield put(getPostsSuccess(posts));
  } catch (e) {
    yield put(getPostsError(e.message));
  }
}

export default [takeLatest(TYPES.GET_POSTS, getPosts)];
