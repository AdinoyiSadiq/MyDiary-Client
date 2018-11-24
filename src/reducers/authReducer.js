import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_USER:
      return { ...state, authenticated: action.payload };
    case types.SIGNIN_USER_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};