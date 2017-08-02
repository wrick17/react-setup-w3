import { takeEvery } from 'redux-saga/effects';
import ACTION from 'common/action_constants';
import {home} from './home_saga';
import {about} from './about_saga';

export default function* rootSaga() {
  yield takeEvery(ACTION.HOME.GETHOME, home);
  yield takeEvery(ACTION.ABOUT.GETABOUT, about);
}