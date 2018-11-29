import axios from 'axios';
import * as types from './actionTypes';

const base_url = process.env.REACT_APP_API_URL

let axiosConfig = {
  headers: { "authorization": localStorage.getItem('token') }
};

export const getUserProfile = (entryId) => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/api/v1/profile`, axiosConfig);
    dispatch({ type: types.GET_USER_PROFILE, payload: response.data.profile });
  } catch (error) {
    dispatch({
      type: types.GET_USER_PROFILE_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};