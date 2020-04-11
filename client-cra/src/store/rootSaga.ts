import { all } from 'redux-saga/effects';
import novelsSaga from './novel/saga';

export default function* rootSaga() {
  yield all([...novelsSaga]);
}
