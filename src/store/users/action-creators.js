import TYPES from './action-types';

export const addUser = () => ({
  type: TYPES.ADD_USER,
  payload: {},
});

export const updateUsersList = (list) => ({
  type: TYPES.UPDATE_USERS_LIST,
  payload: { list },
});

export const removeUser = (id) => ({
  type: TYPES.REMOVE_USER,
  payload: { id },
});

export const updateNewUser = (key, value) => ({
  type: TYPES.UPDATE_NEW_USER,
  payload: { key, value },
});
