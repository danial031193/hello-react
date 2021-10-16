import TYPES from './action-types';

export const addUser = (username, password) => ({
  type: TYPES.ADD_USER,
  payload: { username, password },
});

export const removeUser = (id) => ({
  type: TYPES.REMOVE_USER,
  payload: { id },
});
