import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import ACTION from 'common/action_constants.js';
function* home(action) {
    yield delay(2000);
    yield put({type:ACTION.HOME.LOADHOME});
}
export {
    home
};