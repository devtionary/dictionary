import * as types from '../constants/actionTypes';

const initialState = {
  displaySearch: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_DISPLAY_SEARCH: {
      const displaySearch = state.displaySearch === false ? true : false;
      const copyState = Object.assign({}, state);
      copyState.displaySearch = displaySearch;
      return copyState;
    }

    case types.SEARCH_TERM: {
      //get the definitions from action payload
    }
  }
  return state;
};

export default searchReducer;
