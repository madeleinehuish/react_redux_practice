import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import RootReducer from './reducers';
// import { createStore, applyMiddleware } from 'redux';
import store from './store';

// import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './containers/App';
// import reducers from './reducers';
// let store = createStore(RootReducer, devToolsEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App currentState={store.getState()}/>
	</Provider>
	, document.getElementById('root'));


//// TODO:
//keeping todos here for future reference...
//maybe put truck logic on server side and call for it...
//+ babel-preset-env@1.7.0
//+ babel-polyfill@6.26.0
