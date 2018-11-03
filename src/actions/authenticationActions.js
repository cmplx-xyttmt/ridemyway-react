/* eslint-disable no-return-await */
import {
  TOGGLE_AUTH_VIEW,
  SIGN_UP,
  SIGNUP_FAILED,
  LOGIN,
  LOGIN_FAILED,

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

export const loginAction = payload => ({
  type: LOGIN,
  payload,
});

export const loginFailureAction = payload => ({
  type: LOGIN_FAILED,
  payload,
});

const internetConnectionError = (dispatch, action, view) => {
  dispatch(action('Failed to connect to server. Please check your internet connection'));
  dispatch(toggleAuthViewAction(view));
};

export const handleSignUp = signUpData => async (dispatch) => {
  dispatch(toggleAuthViewAction(1));

  return await axiosInstance.post('/auth/signup', signUpData)
    .then((response) => {
      dispatch(signUpAction(response.data));
      dispatch(toggleAuthViewAction(3));
    })
    .catch((error) => {
      dispatch(toggleAuthViewAction(2));
      dispatch(signUpFailureAction(error.response.data.message));
    })
    .catch(() => {
      internetConnectionError(dispatch, signUpFailureAction, 2);
    });
};

export const handleLogin = loginData => async (dispatch) => {
  dispatch(toggleAuthViewAction(1));

  return await axiosInstance.post('/auth/login', loginData)
    .then((response) => {
      dispatch(loginAction(response.data));
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', loginData.username);
    })
    .catch((error) => {
      dispatch(toggleAuthViewAction(3));
      dispatch(loginFailureAction(error.response.data.message));
    })
    .catch(() => {
      internetConnectionError(dispatch, loginFailureAction, 3);
    });
};
