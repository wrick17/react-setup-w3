import { combineReducers } from 'redux';
import home from './home_reducer';
import about from './about_reducer';

const rootReducers = combineReducers({
  home,
  about
});

export default rootReducers;