import {
  FETCHING_RIDES_FAILED,
  SET_CREATED_RIDE,
  ERROR_CREATING_RIDE,
  FETCHING_RIDE_REQUESTS_FAILED,
  REQUEST_RESPONSE,
  ERROR_REQUEST_RESPONSE,
} from '../../actions/types';
import { ridesReducer } from '../ridesReducer';
import { rideRequestsReducer } from '../requestsReducer';

describe('authentication reducer tests', () => {
  let successData;
  let errorData;
  let beforeState;

  beforeEach(() => {
    errorData = {
      error: 'error',
    };

    successData = {
      message: 'Success',
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

  it('sets created ride', () => {
    const action = {
      type: SET_CREATED_RIDE,
      payload: successData,
    };

    const afterState = ridesReducer(beforeState, action);
    expect(afterState).toEqual({
      createdRide: { message: 'Success' },
      isFetching: false,
      errorsCreatingRide: undefined,
    });
  });

  it('sets errors when creating ride fails', () => {
    const action = {
      type: ERROR_CREATING_RIDE,
      payload: errorData,
    };

    const afterState = ridesReducer(beforeState, action);
    expect(afterState).toEqual({ errorsCreatingRide: { error: 'error' }, isFetching: false });
  });

  it('sets errors when fetching ride requests fails', () => {
    const action = {
      type: FETCHING_RIDE_REQUESTS_FAILED,
      payload: errorData,
    };

    const afterState = rideRequestsReducer(beforeState, action);
    expect(afterState).toEqual({ errors: { error: 'error' }, rideRequests: undefined });
  });

  it('sets request response', () => {
    const action = {
      type: REQUEST_RESPONSE,
      payload: successData,
    };

    const afterState = rideRequestsReducer(beforeState, action);
    expect(afterState).toEqual({ errors: undefined, requestResponse: { message: 'Success' } });
  });

  it('sets errors when responding to ride request fails', () => {
    const action = {
      type: ERROR_REQUEST_RESPONSE,
      payload: errorData,
    };

    const afterState = rideRequestsReducer(beforeState, action);
    expect(afterState).toEqual({ errors: { error: 'error' }, requestResponse: undefined });
  });
});
