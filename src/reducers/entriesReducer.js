import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ENTRIES_LIST:
      return { ...state, entries: action.payload };
    case types.GET_ENTRIES_LIST_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};