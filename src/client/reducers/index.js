import { combineReducers } from 'redux';

import count_button from './button';
import searchBarFunction from './search_bar';
import tableInputFunction from './table_input';
import trucksButtonFunction from './trucks'

const RootReducer = combineReducers({
	count_button: count_button,
	searchString: searchBarFunction,
	tableInputString: tableInputFunction,
	trucks: trucksButtonFunction
})


export default RootReducer;
