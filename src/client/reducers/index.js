import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
// 	//combine here
// })
const RootReducer = function(value){

	const val = value || null;

	const state = {
		stateData1 : 1,
		stateData2 : 2,
		val: val
	}

	return { state };
};


export default RootReducer;
