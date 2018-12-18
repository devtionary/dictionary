import { combineReducers } from 'redux';

import definitionsReducer from './defintionsReducer';
import searchReducer from './searchReducer';
import usersReducer from './usersReducer';

// Combine Reducers
const reducers = combineReducers({
  currentUser: usersReducer,
  definitions: definitionsReducer,
  searchModal: searchReducer,
});

export default reducers;
