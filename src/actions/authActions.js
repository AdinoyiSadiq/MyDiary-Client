import * as types from './actionTypes';

export const signup = () => async (dispatch) => {
  try {
    dispatch({
      type: types.SIGNIN_USER,
      payload: [],
    });
  } catch (error) {
    dispatch({
      type: types.SIGNIN_USER_ERROR,
      payload: [],
    });
  }
};