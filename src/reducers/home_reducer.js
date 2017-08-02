import ACTION from 'common/action_constants';

function home(state = {},action){
  let tempState = Object.assign({}, state);
  if(action.type === ACTION.HOME.LOADHOME) {
    tempState.load = true;
    return tempState;
  }
  return state;
}
export default home;
