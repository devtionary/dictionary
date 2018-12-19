import * as types from '../constants/actionTypes';

export const addDefinition = definition => ({
  type: types.ADD_DEFINITION,
  payload: definition,
});

export const toggleDisplaySearch = () => ({
  type: types.TOGGLE_DISPLAY_SEARCH,
});

export const searchTerm = term => {
  term = term.toLowerCase();

  //make fetch here
  const definitions =
    term === 'rubber ducking'
      ? [
          {
            term: 'Rubber ducking',
            text:
              'The means of logging every single line of code until you have debugged an issue or thrown in the towel due to exasperation',
          },
          {
            term: 'Rubber duck debugging',
            text:
              'In software engineering, rubber duck debugging is a method of debugging code. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line-by-line, to the duck. Many other terms exist for this technique, often involving different inanimate objects.',
          },
        ]
      : [];
  return {
    type: types.SEARCH_TERM,
    payload: definitions,
  };
};
