/* eslint-disable no-return-await */
import {
  SET_CREATED_RIDE_REQUEST,
  ERROR_CREATING_RIDE_REQUEST,
  SET_RIDE_REQUESTS,
  FETCHING_RIDE_REQUESTS_FAILED,
} from './types';
import { fetchingAction } from './ridesActions';
import { axiosInstance } from '../globals';

export const setCreatedRideRequestAction = payload => ({
  type: SET_CREATED_RIDE_REQUEST,
  payload,
});

export const errorCreatingRideRequest = payload => ({
  type: ERROR_CREATING_RIDE_REQUEST,
  payload,
});

export const setRideRequestsAction = payload => ({
  type: SET_RIDE_REQUESTS,
  payload,
});

export const fetchingRideRequestsFailedAction = payload => ({
  type: FETCHING_RIDE_REQUESTS_FAILED,
  payload,
});

export const handleSendingRideRequest = rideId => async (dispatch) => {
  dispatch(fetchingAction(true));

  const url = `rides/${rideId}/requests`;

  return await axiosInstance.post(url)
    .then((response) => {
      dispatch(setCreatedRideRequestAction(response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(errorCreatingRideRequest(error.response.data));
      dispatch(fetchingAction(false));
    })
    .catch(() => {
      // TODO: Throw internet connection error here.
    });
};

export const handleFetchingRideRequests = rideId => async (dispatch) => {
  dispatch(fetchingAction(true));

  const url = `users/rides/${rideId}/requests`;

  return await axiosInstance.get(url)
    .then((response) => {
      dispatch(setRideRequestsAction(response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(fetchingRideRequestsFailedAction(error.response.data));
      dispatch(fetchingAction(false));
    })
    .catch(() => {
      // TODO: Throw internet connection error here.
    });
};
