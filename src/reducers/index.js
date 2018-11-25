import { combineReducers } from 'redux';
import authReducer from './authReducer';
import entryReducer from './entryReducer';
import entriesReducer from './entriesReducer';

export default combineReducers({
  auth: authReducer,
  singleEntry: entryReducer,
  entriesList: entriesReducer
});