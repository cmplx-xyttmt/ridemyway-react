/* eslint-disable no-return-await */
import {
  TOGGLE_AUTH_VIEW,
  SIGN_UP,
  SIGNUP_FAILED,

} from './types';
import { axiosInstance } from '../globals';

export const signUpAction = payload => ({
  type: SIGN_UP,
  payload,
});

export const toggleAuthViewAction = payload => ({
  type: TOGGLE_AUTH_VIEW,
  payload: {
    isLoading: payload === 1,
    isOnSignUpView: payload === 2,
    isOnLoginView: payload === 3,
  },
});

export const signUpFailureAction = payload => ({
  type: SIGNUP_FAILED,
  payload,
});

export const handleSignUp = signUpData => async (dispatch) => {
  dispatch(toggleAuthViewAction(1));

  return await axiosInstance.post('/auth/signup', signUpData)
    .then((response) => {
      dispatch(signUpAction(response.data));
      dispatch(toggleAuthViewAction(4));
    })
    .catch((error) => {
      dispatch(toggleAuthViewAction(2));
      dispatch(signUpFailureAction(error.response.data.message));
    })
    .catch(() => {
      dispatch(signUpFailureAction('Failed to sign up, check your internet connection'));
      dispatch(toggleAuthViewAction(2));
    });
};
