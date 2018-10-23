import { TRUCKS_BUTTON, RECEIVE_TRUCKS } from '../actions/index';

let initialState = { trucks: ''};

function trucksButtonFunction(state = initialState, action){
  switch (action.type) {

    case RECEIVE_TRUCKS:
      return action.payload;
    default:
      return state;
  }
}

export default trucksButtonFunction;
