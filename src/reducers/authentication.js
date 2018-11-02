import {
  TOGGLE_AUTH_VIEW,
  SIGN_UP,
  SIGNUP_FAILED,
  LOGIN,
  LOGIN_FAILED,

} from '../actions/types';

export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_AUTH_VIEW:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        errors: action.payload.isLoading ? undefined : state.errors,
        isOnSignUpView: action.payload.isOnSignUpView,
        isOnLoginView: action.payload.isOnLoginView,
      };
    case SIGN_UP:
      return {
        ...state,
        user: action.payload,
        errors: undefined,
        isLoading: false,
        signUpSuccess: true,
        loginSuccess: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state, errors: action.payload, isLoading: false, user: undefined,
      };
    case LOGIN:
      return {
        ...state,
        errors: undefined,
        isLoading: false,
        user: action.payload,
        loginSuccess: true,
        signUpSuccess: false,
      };
    case LOGIN_FAILED:
      return {
        ...state, errors: action.payload, isLoading: false, user: undefined,
      };
    default:
      return state;
  }
};
