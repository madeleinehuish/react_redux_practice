import { POKE_BUTTON, RECEIVE_POKEMON } from '../actions/index';

let initialState = { pokemon: ''};

function pokeButtonFunction(state = initialState, action){
  switch (action.type) {

    case RECEIVE_POKEMON:
      return action.payload;
    default:
      return state;
  }
}

export default pokeButtonFunction;
