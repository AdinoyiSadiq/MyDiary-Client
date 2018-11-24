import axios from 'axios';
import * as types from './actionTypes';

const base_url = process.env.REACT_APP_API_URL

let axiosConfig = {
  headers: { "authorization": localStorage.getItem('token') }
};

export const createEntry = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(`${base_url}/api/v1/entries`, formValues, axiosConfig);
    dispatch({ type: types.CREATE_ENTRY, payload: response.data.entry });
    callback(response.data.entry.id);
  } catch (error) {
    dispatch({
      type: types.CREATE_ENTRY_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};