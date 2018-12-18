import * as types from '../constants/actionTypes';

const initialState = {
  username: undefined,
  definitionCount: 0,
  credibility: 0,
  avatarUrl: '',
  upVotes: [],
  downVotes: [],
};

const usersReducer = (state = initialState, action) => {
  return state;
};

export default usersReducer;
