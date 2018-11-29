import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const state = { auth: { authenticated: localStorage.getItem('token') } };

export default ({ children, initialState = { ...state } }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};