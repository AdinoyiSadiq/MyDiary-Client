import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_ENTRY:
      return { ...state, entry: action.payload };
    case types.CREATE_ENTRY_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};