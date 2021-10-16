import TYPES from './action-types';

const initialState = {
  id: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.LOGIN:
      return { ...state, id: payload.id };

    case TYPES.LOGOUT:
      return { ...initialState };

    default:
      return { ...state };
  }
};
