import {
  CONFIRM_RESTORE_REQUEST_PROCESS,
  CONFIRM_RESTORE_REQUEST_ERROR,
  CONFIRM_RESTORE_SUCCESS,
  VERIFY_RESTORE_TOKEN_PROCESS,
  VERIFY_RESTORE_TOKEN_ERROR,
  VERIFY_RESTORE_TOKEN_SUCCESS
} from "./actions";

const initialState = {
  isSuccess: false,
  tokenValid: false,
  verifyingToken: false,
  verifiedToken: false,
  isLoading: false,
  isError: false,
  errorMessage: ""
};

export const confirmRestorePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_RESTORE_REQUEST_PROCESS:
      return { ...state, isError: false, errorMessage: "", isLoading: true };
    case CONFIRM_RESTORE_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.error.message
      };
    case CONFIRM_RESTORE_SUCCESS:
      return {
        isSuccess: true,
        verifiedToken: true,
        tokenValid: true,
        isLoading: false
      };
    case VERIFY_RESTORE_TOKEN_PROCESS:
      return {
        ...state,
        verifyingToken: true
      };
    case VERIFY_RESTORE_TOKEN_ERROR:
      return {
        ...state,
        verifyingToken: false,
        verifiedToken: true,
        isError: true,
        errorMessage: action.error.message
      };
    case VERIFY_RESTORE_TOKEN_SUCCESS:
      return {
        ...state,
        tokenValid: true,
        verifyingToken: false,
        verifiedToken: true
      };
    default:
      return state;
  }
};
