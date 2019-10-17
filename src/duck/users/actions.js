import * as types from "./constants";
import api from "../../api";

export const setLoading = payload => {
  return {
    payload,
    type: types.SET_LOADING
  };
};

export const setError = payload => {
  return {
    payload,
    type: types.SET_ERROR
  };
};

export const getUsers = payload => {
  return {
    payload,
    type: types.GET_USERS
  };
};

export const fetchUsers = () => async dispatch => {
  try {
    const response = await api.get("/users");
    dispatch(setLoading(false));
    dispatch(
      getUsers(response.data.map(user => ({ ...user, selected: false })))
    );
  } catch (error) {
    dispatch(setError(true));
  }
};

export const selectUser = payload => {
  return {
    payload,
    type: types.SELECT_USER
  };
};

export const selectAll = payload => {
  return {
    payload,
    type: types.SELECT_ALL
  };
};
