import { combineReducers } from 'redux';

import count_button from './button';
import searchBarFunction from './search_bar';
import tableInputFunction from './table_input';
import trucksButtonFunction from './trucks';
import pokeButtonFunction from './pokemon';

const RootReducer = combineReducers({
	count_button: count_button,
	searchString: searchBarFunction,
	tableInputString: tableInputFunction,
	trucks: trucksButtonFunction,
	pokemon: pokeButtonFunction
})


export default RootReducer;
