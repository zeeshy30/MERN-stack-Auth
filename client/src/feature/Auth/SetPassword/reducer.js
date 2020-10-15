import {
  TOKEN_VALIDITY_PROCESS,
  TOKEN_VALIDITY_ERROR,
  TOKEN_VALIDITY_SUCCESS,
  SET_PASSWORD_PROCESS,
  SET_PASSWORD_ERROR,
  SET_PASSWORD_SUCCESS,
  RENEW_TOKEN_PROCESS,
  RENEW_TOKEN_SUCCESS,
  RENEW_TOKEN_ERROR
} from "./actions";

const setPasswordInitialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const setPasswordReducer = (state = setPasswordInitialState, action) => {
  switch (action.type) {
    case SET_PASSWORD_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case SET_PASSWORD_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false
      };
    default:
      return state;
  }
};

const tokenValidityInitialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  errorStatus: 0,
  errorMessage: ""
};

export const tokenValidityReducer = (
  state = tokenValidityInitialState,
  action
) => {
  switch (action.type) {
    case TOKEN_VALIDITY_PROCESS:
      return { ...state, isLoading: true };
    case TOKEN_VALIDITY_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message,
        errorStatus: action.error.code
      };
    case TOKEN_VALIDITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true
      };
    default:
      return state;
  }
};

const renewTokenInitialState = {
  isProcessing: false,
  isSuccess: false,
  isError: false,
  errorMessage: ""
};

export const renewTokenReducer = (state = renewTokenInitialState, action) => {
  switch (action.type) {
    case RENEW_TOKEN_PROCESS:
      return { ...state, isProcessing: true };
    case RENEW_TOKEN_ERROR:
      return {
        ...state,
        isProcessing: false,
        isError: true,
        errorMessage: action.error.message
      };
    case RENEW_TOKEN_SUCCESS:
      return {
        ...state,
        isProcessing: false,
        isSuccess: true
      };
    default:
      return state;
  }
};
