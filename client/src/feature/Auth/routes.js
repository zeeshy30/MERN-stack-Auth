import { SigninContainer } from "./Signin";
import { SignupContainer } from "./Signup";
import { RestorePasswordContainer } from "./RestorePassword";
import { ConfirmRestorePasswordContainer } from "./ConfirmRestorePassword";
import { SetPasswordContainer } from "./SetPassword";
export const routes = [
  {
    path: "/",
    component: SigninContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/signup",
    component: SignupContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/restore-password",
    component: RestorePasswordContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/confirm-restore-password/:id/:token",
    component: ConfirmRestorePasswordContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/setpassword/:id/:token",
    component: SetPasswordContainer,
    isAuth: false,
    exact: true
  }
];
