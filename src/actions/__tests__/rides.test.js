import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { axiosInstance } from '../../globals';
import { SET_RIDES, FETCHING_RIDES_FAILED, FETCHING } from '../types';
import { handleFetchingRides } from '../ridesActions';

describe('authentication actions', () => {
  let store; let httpMock;

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

  it('fetches the rides', async () => {
    httpMock.onGet('/rides').reply(200, response);

    handleFetchingRides()(store.dispatch);
    await flushAllPromises();
    const expected = [
      { type: FETCHING, payload: true },
      { type: SET_RIDES, payload: { message: 'Successful' } },
      { type: FETCHING, payload: false },
    ];
    expect(store.getActions()).toEqual(expected);
  });

  it('shows an error when fetching rides fail', async () => {
    httpMock.onGet('/rides').reply(400, errorData);

    handleFetchingRides()(store.dispatch);
    await flushAllPromises();
    const expected = [
      { type: FETCHING, payload: true },
      {
        type: FETCHING_RIDES_FAILED,
        payload: errorData,
      },
      { type: FETCHING, payload: false }];

    expect(store.getActions()).toEqual(expected);
  });
});
