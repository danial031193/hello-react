import AccountReducer from './account/reducer';
import UsersReducer from './users/reducer';

const allReducers = {
  account: AccountReducer,
  users: UsersReducer,
};

export default allReducers;
