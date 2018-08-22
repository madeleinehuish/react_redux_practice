import { TABLE_INPUT } from '../actions/index';

let initialState = { tableInputString: ''};

function tableInputFunction(state = initialState, action){
  switch (action.type) {
    case TABLE_INPUT:
      return {tableInputString: action.payload};
    default:
      return state;
  }
}

export default tableInputFunction;
