import * as types from '../constants/actionTypes';

export const addDefinition = definition => ({
  type: types.ADD_DEFINITION,
  payload: definition,
});

export const toggleDisplaySearch = () => ({
  type: types.TOGGLE_DISPLAY_SEARCH,
});

export const searchTerm = term => {
  console.log(term.toLowerCase());

  //make fetch here
  
  return {
    type: types.SEARCH_TERM,
  };
};
