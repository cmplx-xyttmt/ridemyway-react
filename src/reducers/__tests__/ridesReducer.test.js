import {
  FETCHING_RIDES_FAILED,
} from '../../actions/types';
import { ridesReducer } from '../ridesReducer';

describe('authentication reducer tests', () => {
  let errorData;
  let beforeState;

  beforeEach(() => {
    errorData = {
      error: 'error',
    };

    beforeState = {};
  });

  it('returns the initial state ', () => {
    expect(ridesReducer(undefined, {})).toEqual(beforeState);
  });

  it('sets errors when fetching rides fails ', () => {
    const action = {
      type: FETCHING_RIDES_FAILED,
      payload: errorData,
    };

    const afterState = ridesReducer(beforeState, action);
    expect(afterState).toEqual({ errors: { error: 'error' }, isFetching: false });
  });
});
