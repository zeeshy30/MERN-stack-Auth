import { api } from "../../../helpers/api";

export const SET_PASSWORD_PROCESS = "SET_PASSWORD_PROCESS";
export const SET_PASSWORD_SUCCESS = "SET_PASSWORD_SUCCESS";
export const SET_PASSWORD_ERROR = "SET_PASSWORD_ERROR";
export const TOKEN_VALIDITY_PROCESS = "TOKEN_VALIDITY_PROCESS";
export const TOKEN_VALIDITY_ERROR = "TOKEN_VALIDITY_ERROR";
export const TOKEN_VALIDITY_SUCCESS = "TOKEN_VALIDITY_SUCCESS";
export const RENEW_TOKEN_PROCESS = "RENEW_TOKEN_PROCESS";
export const RENEW_TOKEN_ERROR = "RENEW_TOKEN_ERROR";
export const RENEW_TOKEN_SUCCESS = "RENEW_TOKEN_SUCCESS";

const setPasswordProcess = () => ({ type: SET_PASSWORD_PROCESS });

const setPasswordSuccess = () => ({
  type: SET_PASSWORD_SUCCESS
});

const setPasswordError = error => ({
  type: SET_PASSWORD_ERROR,
  error
});

export const setPasswordRequest = formData => async dispatch => {
  try {
    dispatch(setPasswordProcess());
    await api("put", "auth/set-password", formData);

    dispatch(setPasswordSuccess());
  } catch (error) {
    dispatch(setPasswordError(error.response ? error.response.data : error));
  }
};

const tokenValidityProcess = () => ({ type: TOKEN_VALIDITY_PROCESS });

const tokenValiditySuccess = () => ({ type: TOKEN_VALIDITY_SUCCESS });

const tokenValidityError = error => ({
  type: TOKEN_VALIDITY_ERROR,
  error
});

export const checkTokenValidity = formData => async dispatch => {
  try {
    dispatch(tokenValidityProcess());
    await api("post", "auth/check-password-token-validity", formData);
    dispatch(tokenValiditySuccess());
  } catch (error) {
    dispatch(tokenValidityError(error.response ? error.response.data : error));
  }
};

const renewTokenProcess = () => ({ type: RENEW_TOKEN_PROCESS });

const renewTokenSuccess = () => ({ type: RENEW_TOKEN_SUCCESS });

const renewTokenFail = error => ({
  type: RENEW_TOKEN_ERROR,
  error
});

export const renewToken = formData => async dispatch => {
  try {
    dispatch(renewTokenProcess());
    await api("put", "auth/renew-password-token", formData);
    dispatch(renewTokenSuccess());
  } catch (error) {
    dispatch(renewTokenFail(error.response ? error.response.data : error));
  }
};
