import * as types from '../constants/actionTypes';

export const addDefinition = definition => ({
  type: types.ADD_DEFINITION,
  payload: definition,
});

export const toggleDisplaySearch = () => ({
  type: types.TOGGLE_DISPLAY_SEARCH,
});

export const searchTerm = term => {
  // term = term.toLowerCase();
  const request = fetch(`http://localhost:8000/api/definitions/${term}`, {
    method: 'GET',
    mode: 'cors',
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    });
  return {
    type: types.SEARCH_TERM,
    payload: request,
  };
};
