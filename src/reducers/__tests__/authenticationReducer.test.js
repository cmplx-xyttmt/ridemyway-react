import {
  TOGGLE_AUTH_VIEW,
  SIGN_UP,
  SIGNUP_FAILED,

} from '../../actions/types';
import { authenticationReducer } from '../authentication';

describe('authentication reducer tests', () => {
  let userData;
  let errorData;
  let beforeState;

  beforeEach(() => {
    userData = {
      username: 'test',
    };

    errorData = {
      error: 'error',
    };

    beforeState = {};
  });

  it('returns the initial state ', () => {
    expect(authenticationReducer(undefined, {})).toEqual(beforeState);
  });

  it('toggles auth view', () => {
    const action = {
      type: TOGGLE_AUTH_VIEW,
      payload: {
        isLoading: true, isOnSignUpView: false, isOnLoginView: false,
      },
    };
    const afterState = authenticationReducer(beforeState, action);
    expect(afterState).toEqual({
      isLoading: true,
      errors: undefined,
      isOnSignUpView: false,
      isOnLoginView: false,
    });
  });

  it('signs up the user', () => {
    const action = {
      type: SIGN_UP,
      payload: userData,
    };
    const afterState = authenticationReducer(beforeState, action);

    expect(afterState).toEqual({
      user: { username: 'test' },
      errors: undefined,
      isLoading: false,
    });
  });

  it('sets errors on sign up failure', () => {
    const action = {
      type: SIGNUP_FAILED,
      payload: errorData,
    };
    const afterState = authenticationReducer(beforeState, action);

    expect(afterState).toEqual({ errors: { error: 'error' }, isLoading: false, user: undefined });
  });
});
