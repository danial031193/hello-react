import TYPES from './action-types';

const initialState = {
  list: [
    { id: 1, username: '123', password: '123' },
    { id: 2, username: 'user1', password: '123' },
    { id: 3, username: 'user2', password: '123' },
    { id: 4, username: 'user3', password: '123' },
    { id: 5, username: 'user4', password: '123' },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.ADD_USER:
      const user = { ...payload, id: state.list[state.list.length - 1].id + 1 };
      return { ...state, list: [...state.list, user] };

    case TYPES.REMOVE_USER:
      return { ...state, list: state.list.filter((u) => u.id !== payload.id) };

    default:
      return { ...state };
  }
};
