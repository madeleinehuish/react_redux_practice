import { combineReducers } from 'redux';

import count_button from './button';
import searchBarFunction from './search_bar';
import tableInputFunction from './table_input';

// const rootReducer = combineReducers({
// 	//combine here
// })
// const RootReducer = function(value){
//
// 	const val = value || null;
//
// 	const state = {
// 		stateData1 : 1,
// 		stateData2 : 2,
// 		val: val
// 	}
//
// 	return { state };
// };

const RootReducer = combineReducers({
	count_button: count_button,
	searchString: searchBarFunction,
	tableInputString: tableInputFunction
})


export default RootReducer;
