import TYPES from './action-types';

const initialState = {
  search: '',
  currentPage: 1,
  totalPages: 10,
  list: {
    result: [],
    error: null,
    loading: false,
  },
  item: {
    result: {},
    error: null,
    loading: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_REPOS:
      return { ...state, list: { ...state.list, loading: true, error: null } };

    case TYPES.GET_REPOS_SUCCESS:
      return { ...state, list: { ...state.list, loading: false, result: payload.data } };

    case TYPES.GET_REPOS_ERROR:
      return { ...state, list: { ...state.list, loading: false, error: payload.message } };

    case TYPES.GET_SINGLE_REPO:
      return { ...state, item: { ...state.item, loading: true, error: null } };

    case TYPES.GET_SINGLE_REPO_SUCCESS:
      return { ...state, item: { ...state.item, loading: false, result: payload.data } };

    case TYPES.GET_SINGLE_REPO_ERROR:
      return { ...state, item: { ...state.item, loading: false, error: payload.message } };

    case TYPES.SET_SEARCH:
      return { ...state, search: payload.value };

    case TYPES.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload.value };

    case TYPES.SET_TOTAL_PAGES:
      return { ...state, totalPages: payload.value };

    default:
      return { ...state };
  }
};
