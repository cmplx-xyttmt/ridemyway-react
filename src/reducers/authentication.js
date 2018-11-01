import {
  TOGGLE_AUTH_VIEW,
  SIGN_UP,
  SIGNUP_FAILED,

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
        ...state, user: action.payload, errors: undefined, isLoading: false,
      };
    case SIGNUP_FAILED:
      return {
        ...state, errors: action.payload, isLoading: false, user: undefined,
      };
    default:
      return state;
  }
};
