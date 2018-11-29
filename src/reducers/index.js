import { combineReducers } from 'redux';
import authReducer from './authReducer';
import entryReducer from './entryReducer';
import entriesReducer from './entriesReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReducer,
  singleEntry: entryReducer,
  entriesList: entriesReducer,
  userProfile: profileReducer
});