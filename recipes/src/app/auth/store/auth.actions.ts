import {Action} from '@ngrx/store';

export const SIGNUP = {};
export const SIGNIN = {};
export const LOGOUT = {};

export class SignUp implements Action {
  readonly type = <string>SIGNUP;
}
export class SignIn implements Action {
  readonly type = <string>SIGNIN;
}
export class LogOut implements Action {
  readonly type = <string>LOGOUT;
}

export type AuthActions = SignUp|SignIn|LogOut;
