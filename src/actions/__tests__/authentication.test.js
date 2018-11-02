import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../globals';
import { TOGGLE_AUTH_VIEW, SIGN_UP, SIGNUP_FAILED } from '../types';
import { handleSignUp, handleLogin } from '../authenticationActions';

describe('sign up actions', () => {
  let store; let httpMock;

  const response = {
    message: 'Successfully signed up',
  };

  const errorData = {
    message: 'There was an error',
  };

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it('signs up the user', async () => {
    httpMock.onPost('/auth/signup').reply(201, response);

    handleSignUp()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: SIGN_UP,
      payload: { message: 'Successfully signed up' },
    },
    {
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: false, isOnSignUpView: false, isOnLoginView: true },
    }];
    expect(store.getActions()).toEqual(expected);
  });

  it('shows an error on sign up failure', async () => {
    httpMock.onPost('/auth/signup').reply(400, errorData);

    handleSignUp()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: false, isOnSignUpView: true, isOnLoginView: false },
    },
    { type: SIGNUP_FAILED, payload: 'There was an error' }];

    expect(store.getActions()).toEqual(expected);
  });

  it('shows an error when no response from the server on sign up', async () => {
    httpMock.onPost('/auth/signup').reply(-1, undefined);

    handleSignUp()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: false, isOnSignUpView: true, isOnLoginView: false },
    },
    {
      type: SIGNUP_FAILED,
      payload: 'Failed to connect to server. Please check your internet connection',
    },
    {
      type: TOGGLE_AUTH_VIEW,
      payload: { isLoading: false, isOnSignUpView: true, isOnLoginView: false },
    }];
    expect(store.getActions()).toEqual(expected);
  });

  it('shows an error when no response from the server on log in', async () => {
    httpMock.onPost('/auth/login').reply(-1, undefined);

    handleLogin()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: false, isOnSignUpView: false, isOnLoginView: true },
    },
    {
      type: 'LOGIN_FAILED',
      payload: 'Failed to connect to server. Please check your internet connection',
    },
    {
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: false, isOnSignUpView: false, isOnLoginView: true },
    }];

    expect(store.getActions()).toEqual(expected);
  });

  it('shows error on login failure', async () => {
    httpMock.onPost('/auth/login').reply(400, errorData);

    handleLogin()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: false, isOnSignUpView: false, isOnLoginView: true },
    },
    { type: 'LOGIN_FAILED', payload: 'There was an error' }];

    expect(store.getActions()).toEqual(expected);
  });

  it('logs in the user', async () => {
    httpMock.onPost('/auth/login').reply(201, response);

    handleLogin()(store.dispatch);
    await flushAllPromises();
    const expected = [{
      type: 'TOGGLE_AUTH_VIEW',
      payload: { isLoading: true, isOnSignUpView: false, isOnLoginView: false },
    },
    {
      type: 'LOGIN',
      payload: { message: 'Successfully signed up' },
    }];
    expect(store.getActions()).toEqual(expected);
  });
});
