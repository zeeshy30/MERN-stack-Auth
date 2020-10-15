import { combineReducers } from "redux";

import { signinReducer as signin } from "./Signin";
import { signupReducer as signup } from "./Signup";
import {
  setPasswordReducer as setPassword,
  tokenValidityReducer as tokenValidity,
  renewTokenReducer as renewToken
} from "./SetPassword";
import { restorePasswordReducer as restorePassword } from "./RestorePassword";
import { confirmRestorePasswordReducer as confirmRestorePassword } from "./ConfirmRestorePassword";

export const reducers = combineReducers({
  signin,
  signup,
  setPassword,
  tokenValidity,
  renewToken,
  restorePassword,
  confirmRestorePassword
});
