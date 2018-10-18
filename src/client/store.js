import RootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

let store = createStore(RootReducer, devToolsEnhancer(applyMiddleware(thunk)));

export default store ;
