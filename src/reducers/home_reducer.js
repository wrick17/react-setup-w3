import ACTION from 'common/action_constants';

function home(state = {},action){
  let tempState = Object.assign({}, state);
  if(action.type === ACTION.HOME.LOADHOME) {
    tempState.load = false;
    return tempState;
  }
  return state;
}
export default home;
