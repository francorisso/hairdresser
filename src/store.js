import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import reducers from './reducers';

console.log(reducers);

const devToolsExtension = window.devToolsExtension && window.devToolsExtension();
export default createStore(combineReducers({
  ...reducers,
  routing: routerReducer,
}), {}, devToolsExtension);
