import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../globals';
import {
  SET_CREATED_RIDE_REQUEST,
  ERROR_CREATING_RIDE_REQUEST,
  FETCHING,
  SET_RIDE_REQUESTS,
  FETCHING_RIDE_REQUESTS_FAILED,
} from '../types';
import { handleSendingRideRequest, handleFetchingRideRequests } from '../rideRequestActions';

describe('authentication actions', () => {
  let store;
  let httpMock;

  const response = {
    message: 'Successful',
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

  it('sets the ride request', async () => {
    httpMock.onPost('/rides/1/requests').reply(201, response);

    handleSendingRideRequest(1)(store.dispatch);
    await flushAllPromises();

    const expected = [{ type: FETCHING, payload: true },
      { type: SET_CREATED_RIDE_REQUEST, payload: { message: 'Successful' } },
      { type: FETCHING, payload: false }];

    expect(store.getActions()).toEqual(expected);
  });

  it('sets errors when a ride request fails', async () => {
    httpMock.onPost('/rides/1/requests').reply(401, errorData);

    handleSendingRideRequest(1)(store.dispatch);
    await flushAllPromises();
    const expected = [{ type: FETCHING, payload: true },
      {
        type: ERROR_CREATING_RIDE_REQUEST,
        payload: { message: 'There was an error' },
      },
      { type: FETCHING, payload: false }];

    expect(store.getActions()).toEqual(expected);
  });

  it('fetches ride requests for a ride offer', async () => {
    httpMock.onGet('/users/rides/1/requests').reply(200, response);

    handleFetchingRideRequests(1)(store.dispatch);
    await flushAllPromises();
    const expected = [{ type: FETCHING, payload: true },
      {
        type: SET_RIDE_REQUESTS,
        payload: { message: 'Successful' },
      },
      { type: FETCHING, payload: false }];

    expect(store.getActions()).toEqual(expected);
  });

  it('sets errors when fetching ride requests fails', async () => {
    httpMock.onGet('/users/rides/1/requests').reply(501, errorData);

    handleFetchingRideRequests(1)(store.dispatch);
    await flushAllPromises();

    const expected = [{ type: FETCHING, payload: true },
      {
        type: FETCHING_RIDE_REQUESTS_FAILED,
        payload: { message: 'There was an error' },
      },
      { type: FETCHING, payload: false }];

    expect(store.getActions()).toEqual(expected);
  });
});
