import TYPES from './action-types';

const initialState = {
  isOpen: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case TYPES.TOGGLE_MODAL:
      return { ...state, isOpen: !state.isOpen };

    default:
      return { ...state };
  }
};
