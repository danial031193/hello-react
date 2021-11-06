import TYPES from './action-types';

export const getRepos = () => ({
  type: TYPES.GET_REPOS,
  payload: {},
});

export const getReposSuccess = (data) => ({
  type: TYPES.GET_REPOS_SUCCESS,
  payload: { data },
});

export const getReposError = (message) => ({
  type: TYPES.GET_REPOS_ERROR,
  payload: { message },
});

export const getSingleRepo = (id) => ({
  type: TYPES.GET_SINGLE_REPO,
  payload: { id },
});

export const getSingleRepoSuccess = (data) => ({
  type: TYPES.GET_SINGLE_REPO_SUCCESS,
  payload: { data },
});

export const getSingleRepoError = (message) => ({
  type: TYPES.GET_SINGLE_REPO_ERROR,
  payload: { message },
});

export const setSearch = (value = '') => ({
  type: TYPES.SET_SEARCH,
  payload: { value },
});

export const setCurrentPage = (value = 1) => ({
  type: TYPES.SET_CURRENT_PAGE,
  payload: { value },
});

export const setTotalPages = (value = 1) => ({
  type: TYPES.SET_TOTAL_PAGES,
  payload: { value },
});
