import { all } from 'redux-saga/effects';
import PostsSagas from './posts/sagas';
import UsersSagas from './users/sagas';
import ReposSagas from './repos/sagas';

function* SagaManager() {
  yield all(PostsSagas);
  yield all(UsersSagas);
  yield all(ReposSagas);
}

export default SagaManager;
