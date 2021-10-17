import { all } from 'redux-saga/effects';
import PostsSagas from './posts/sagas';

function* SagaManager() {
  yield all(PostsSagas);
}

export default SagaManager;
