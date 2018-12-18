import * as types from '../constants/actionTypes';

export const addDefinition = (definition) => ({
  type: types.ADD_DEFINITION,
  payload: definition,
});
