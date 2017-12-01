import * as AuthActions from './auth.actions';

export interface State {
  authed: boolean;
}

const initState: State = {
  authed: false
};

export function authReducer(state = initState, action: AuthActions.AuthActions){
  switch (action.type) {
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return {
        ...state,
        authed: true
      };
      case AuthActions.LOGOUT:
      return {
        ...state,
        authed: false
      };
    default:
      return state;
  }
}
