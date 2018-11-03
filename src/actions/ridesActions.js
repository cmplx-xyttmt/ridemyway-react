/* eslint-disable no-return-await */
import { SET_RIDES, FETCHING, FETCHING_RIDES_FAILED } from './types';
import { axiosInstance } from '../globals';

export const fetchingAction = payload => ({
  type: FETCHING,
  payload,
});

export const setRidesAction = payload => ({
  type: SET_RIDES,
  payload,
});

export const fetchingRidesFailedAction = payload => ({
  type: FETCHING_RIDES_FAILED,
  payload,
});

export const handleFetchingRides = () => async (dispatch) => {
  dispatch(fetchingAction(true));

  return await axiosInstance.get('rides')
    .then((response) => {
      dispatch(setRidesAction(response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(fetchingRidesFailedAction(error.response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      // TODO: Throw internet connection error here.
    });
};
