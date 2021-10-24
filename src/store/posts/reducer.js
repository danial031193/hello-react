import TYPES from './action-types';

const initialState = {
  list: {
    result: [],
    error: null,
    loading: false,
  },
  userList: {
    result: [],
    error: null,
    loading: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_POSTS:
      return { ...state, list: { ...state.list, loading: true, error: null } };

    case TYPES.GET_POSTS_SUCCESS:
      return { ...state, list: { ...state.list, loading: false, result: payload.data } };

    case TYPES.GET_POSTS_ERROR:
      return { ...state, list: { ...state.list, loading: false, error: payload.message } };

    case TYPES.GET_USER_POSTS:
      return { ...state, userList: { ...state.userList, loading: true, error: null } };

    case TYPES.GET_USER_POSTS_SUCCESS:
      return { ...state, userList: { ...state.userList, loading: false, result: payload.data } };

    case TYPES.GET_USER_POSTS_ERROR:
      return { ...state, userList: { ...state.userList, loading: false, error: payload.message } };

    default:
      return { ...state };
  }
};
