import TYPES from './action-types';

export const login = (id) => ({
  type: TYPES.LOGIN,
  payload: { id },
});

export const logout = () => ({
  type: TYPES.LOGOUT,
  payload: {},
});
