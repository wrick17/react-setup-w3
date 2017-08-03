import { takeEvery } from 'redux-saga/effects';
import ACTION from 'common/action_constants';
import {home} from './home_saga';
import {about} from './about_saga';

export default () => [
  takeEvery(ACTION.HOME.GETHOME, home),
  takeEvery(ACTION.ABOUT.GETABOUT, about)
];