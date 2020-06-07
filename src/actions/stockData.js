import { API_KEY } from "./../API_KEY";

import axios from "axios";

export const requestQueryPending = () => {
  return {
    type: "REQUEST_QUERY_PENDING",
  };
};

export const requestQuerySuccess = (data) => {
  return {
    type: "REQUEST_QUERY_SUCCESS",
    isPending: false,
    payload: data,
  };
};

export const requestQueryFail = ({ message }) => {
  return {
    type: "REQUEST_QUERY_FAIL",
    payload: message,
    isPending: false,
  };
};

export const requestQuery = () => (dispatch, getState) => {
  const searchQuery = getState().queryReducer.queryField;
  console.log(searchQuery);
  dispatch(requestQueryPending());
  axios
    .get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchQuery}&apikey=${API_KEY}`
    )
    .then(({ data }) => dispatch(requestQuerySuccess(data)))
    .catch((error) => dispatch(requestQueryFail(error)));
};
