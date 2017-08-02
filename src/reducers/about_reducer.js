import ACTION from 'common/action_constants';

function about(state = {},action){
  let tempState = Object.assign({}, state);
  if(action.type === ACTION.ABOUT.LOADABOUT) {
    tempState.load = false;
    return tempState;
  }
  return state;
}
export default about;
