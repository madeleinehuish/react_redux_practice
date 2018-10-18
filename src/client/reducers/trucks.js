import { TRUCKS_BUTTON, RECEIVE_TRUCKS } from '../actions/index';

let initialState = { trucks: ''};

function trucksButtonFunction(state = initialState, action){
  switch (action.type) {
    // case TRUCKS_BUTTON:

    case RECEIVE_TRUCKS:
      return Object.assign({}, state, {
        trucks: action.payload
      });
    default:
      return state;
  }
}

export default trucksButtonFunction;
