import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from '../duck';
import users from '../duck/users/reducer'

const store = createStore(reducers(), undefined, composeWithDevTools(applyMiddleware(thunk)));

export default store;