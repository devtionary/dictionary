import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import ReduxPromise from 'redux-promise';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(ReduxPromise))
);
export default store;
