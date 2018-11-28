import axios from 'axios';
import * as types from './actionTypes';

const base_url = process.env.REACT_APP_API_URL

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_url}/api/v1/auth/signin`, formValues);

    dispatch({ type: types.SIGNIN_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_url}/api/v1/auth/signup`, formValues);

    dispatch({ type: types.SIGNIN_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const signout = () => (dispatch) => {
  localStorage.clear();
  return dispatch({ type: types.SIGNOUT_USER });
};

export const clearSigninError = () => ({ type: types.CLEAR_SIGNIN_ERROR });