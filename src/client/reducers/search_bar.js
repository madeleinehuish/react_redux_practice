import { SEARCH_BAR } from '../actions/index';

let initialState = { searchString: ''};

function searchBarFunction(state = initialState, action){
  switch (action.type) {
    case SEARCH_BAR:
      return {searchString: action.payload};
    default:
      return state;
  }
}

export default searchBarFunction;
