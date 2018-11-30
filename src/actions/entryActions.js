import axios from 'axios';
import * as types from './actionTypes';

const base_url = process.env.API_URL

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

export const getSingleEntry = (entryId) => async (dispatch) => {
  try {
    const response = await axios.get(`${base_url}/api/v1/entries/${entryId}`, axiosConfig);
    dispatch({ type: types.GET_ENTRY, payload: response.data.entry });
  } catch (error) {
    dispatch({
      type: types.GET_ENTRY_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const updateEntry = (formValues, entryId, callback) => async (dispatch) => {
  try {
    const response = await axios.put(`${base_url}/api/v1/entries/${entryId}`, formValues, axiosConfig);
    dispatch({ type: types.UPDATE_ENTRY, payload: response.data.entry });
    callback(response.data.entry.id);
  } catch (error) {
    dispatch({
      type: types.UPDATE_ENTRY_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const deleteEntry = (entryId, callback) => async (dispatch) => {
  try {
    const response = await axios.delete(`${base_url}/api/v1/entries/${entryId}`, axiosConfig);
    dispatch({ type: types.DELETE_ENTRY, payload: response.data.entry });
    callback(true);
  } catch (error) {
    dispatch({
      type: types.DELETE_ENTRY_ERROR,
      payload: error.response.data.message || error.response.data.error,
    });
  }
};

export const clearEntryError = () => ({ type: types.CLEAR_ENTRY_ERROR });