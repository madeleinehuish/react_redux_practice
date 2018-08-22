import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App';
// import reducers from './reducers';
let store = createStore(RootReducer);

ReactDOM.render(
	<Provider store={store}>
		<App currentState={store.getState()}/>
	</Provider>
	, document.getElementById('root'));


//// TODO:
//keeping todos here for future reference...
