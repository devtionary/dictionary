import * as types from '../constants/actiontypes';

export const addDefinition = (definition) => ({
  type: types.ADD_DEFINITION,
  payload: definition,
});
