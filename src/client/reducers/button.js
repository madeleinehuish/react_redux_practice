import { INCREASE_COUNT, DECREASE_COUNT } from '../actions/index';

let initialState = {count: 0};

function count_button(state = initialState, action){
  switch (action.type) {
    case INCREASE_COUNT:
      return {count: state.count + action.payload};
    case DECREASE_COUNT:
      return {count: state.count - action.payload};
    default:
      return state;
  }
}

export default count_button;
