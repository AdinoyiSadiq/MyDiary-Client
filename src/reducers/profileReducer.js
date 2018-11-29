import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE:
      return { ...state, profile: action.payload };
    case types.GET_USER_PROFILE_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};