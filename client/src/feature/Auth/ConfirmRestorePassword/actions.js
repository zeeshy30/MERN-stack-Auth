import { api } from "../../../helpers/api";

export const CONFIRM_RESTORE_REQUEST_PROCESS =
  "CONFIRM_RESTORE_REQUEST_PROCESS";
export const CONFIRM_RESTORE_REQUEST_ERROR = "CONFIRM_RESTORE_REQUEST_ERROR";
export const CONFIRM_RESTORE_SUCCESS = "CONFIRM_RESTORE_SUCCESS";

export const VERIFY_RESTORE_TOKEN_PROCESS = "VERIFY_RESTORE_TOKEN_PROCESS";
export const VERIFY_RESTORE_TOKEN_ERROR = "VERIFY_RESTORE_TOKEN_ERROR";
export const VERIFY_RESTORE_TOKEN_SUCCESS = "VERIFY_RESTORE_TOKEN_SUCCESS";

export const confirmRestoreRequestProcess = () => ({
  type: CONFIRM_RESTORE_REQUEST_PROCESS
});

export const confirmRestoreSuccess = data => ({
  type: CONFIRM_RESTORE_SUCCESS,
  data
});

export const confirmRestoreRequestError = error => ({
  type: CONFIRM_RESTORE_REQUEST_ERROR,
  error
});

export const confirmRestorePasswordRequest = data => async dispatch => {
  try {
    dispatch(confirmRestoreRequestProcess());
    const res = await api("post", "auth/confirm-restore-password", data);

    dispatch(confirmRestoreSuccess(res));
  } catch (error) {
    dispatch(
      confirmRestoreRequestError(error.response ? error.response.data : error)
    );
  }
};

const verifyRestorePasswordTokenProcess = () => ({
  type: VERIFY_RESTORE_TOKEN_PROCESS
});

const verifyRestorePasswordTokenError = error => ({
  type: VERIFY_RESTORE_TOKEN_ERROR,
  error
});

const verifyRestorePasswordTokenSuccess = data => ({
  type: VERIFY_RESTORE_TOKEN_SUCCESS,
  data
});

export const verifyRestorePasswordToken = data => async dispatch => {
  try {
    dispatch(verifyRestorePasswordTokenProcess());
    const res = await api("post", "auth/verify-restore-password-token", data);

    dispatch(verifyRestorePasswordTokenSuccess(res));
  } catch (error) {
    dispatch(
      verifyRestorePasswordTokenError(
        error.response ? error.response.data : error
      )
    );
  }
};
