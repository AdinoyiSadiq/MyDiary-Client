import axios from 'axios';
import * as types from './actionTypes';

const base_url = process.env.REACT_APP_API_URL;

let axiosConfig = {
  headers: { "authorization": localStorage.getItem('token') }
};

export const getEntriesList = () => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/api/v1/entries`, axiosConfig);
    dispatch({ type: types.GET_ENTRIES_LIST, payload: response.data.entries });
  } catch (error) {
    dispatch({
      type: types.GET_ENTRIES_LIST_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};