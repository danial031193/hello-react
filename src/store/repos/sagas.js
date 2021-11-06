import { call, debounce, fork, put, select, takeLatest } from 'redux-saga/effects';
import {
  getRepos as startLoading,
  getReposError,
  getReposSuccess,
  getSingleRepoError,
  getSingleRepoSuccess,
  setTotalPages,
} from './action-creators';
import TYPES from './action-types';
import { fetchRepo, fetchRepoContributors, fetchRepos } from './api';

function* getRepos() {
  try {
    yield put(startLoading());

    const search = yield select((state) => state.repos.search);
    const currentPage = yield select((state) => state.repos.currentPage);

    const repos = yield call(fetchRepos, search, currentPage);

    yield put(getReposSuccess(repos?.items ?? []));

    const totalPages = repos?.total_count > 100 ? 10 : Math.ceil(repos?.total_count / 10);
    yield put(setTotalPages(totalPages));
  } catch (e) {
    yield put(getReposError(e.message));
  }
}

function* getSingleRepo({ payload: { id } }) {
  try {
    const repo = yield call(fetchRepo, id);

    repo.contributors = yield call(fetchRepoContributors, id);

    yield put(getSingleRepoSuccess(repo));
  } catch (e) {
    yield put(getSingleRepoError(e.message));
  }
}

function* onSearch() {
  yield debounce(500, TYPES.SET_SEARCH, getRepos);
}

export default [
  takeLatest(TYPES.SET_CURRENT_PAGE, getRepos),
  takeLatest(TYPES.GET_SINGLE_REPO, getSingleRepo),
  fork(getRepos),
  fork(onSearch),
];
