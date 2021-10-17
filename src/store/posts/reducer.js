import TYPES from './action-types';

const initialState = {
  list: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_POSTS:
      return { ...state, loading: true, error: null };

    case TYPES.GET_POSTS_SUCCESS:
      return { ...state, loading: false, list: payload.data };

    case TYPES.GET_POSTS_ERROR:
      return { ...state, loading: false, error: payload.message };

    default:
      return { ...state };
  }
};
