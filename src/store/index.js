import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import allReducers from './reducers';
import SagaManager from './SagaManager';

const reduxDevTools = window?.__REDUX_DEVTOOLS_EXTENSION__?.() ?? compose;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware]; //, thunk];

  const store = createStore(
    combineReducers({ ...allReducers }),
    compose(applyMiddleware(...middlewares), reduxDevTools),
  );

  const persistor = persistStore(store, null);

  sagaMiddleware.run(SagaManager);

  return { store, persistor };
};

export default configureStore;
