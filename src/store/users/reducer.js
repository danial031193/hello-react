import TYPES from './action-types';

const initialState = {
  list: [
    { id: 1, username: 'user-1', password: '123' },
    { id: 2, username: 'user-2', password: '123' },
    { id: 3, username: 'user-3', password: '123' },
    { id: 4, username: 'user-4', password: '123' },
    { id: 5, username: 'user-5', password: '123' },
    { id: 6, username: 'user-6', password: '123' },
    { id: 7, username: 'user-7', password: '123' },
    { id: 8, username: 'user-8', password: '123' },
    { id: 9, username: 'user-9', password: '123' },
    { id: 10, username: 'user-10', password: '123' },
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
