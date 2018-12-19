import * as types from '../constants/actionTypes';

// const initialState = null;

const initialState = {
  username: '',
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
