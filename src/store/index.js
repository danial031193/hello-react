import { combineReducers, compose, createStore } from 'redux';
import allReducers from './reducers';

const reduxDevTools = window?.__REDUX_DEVTOOLS_EXTENSION__?.() ?? compose;

const configureStore = () => {
  const store = createStore(combineReducers({ ...allReducers }), compose(reduxDevTools));

  return { store };
};

export default configureStore;
