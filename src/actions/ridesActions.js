/* eslint-disable no-return-await */
import {
  SET_RIDES,
  FETCHING,
  FETCHING_RIDES_FAILED,
  SET_CREATED_RIDE,
  ERROR_CREATING_RIDE,
  TOGGLE_NAV_VIEW,
} from './types';
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

export const setCreatedRideAction = payload => ({
  type: SET_CREATED_RIDE,
  payload,
});

export const errorCreatingRideAction = payload => ({
  type: ERROR_CREATING_RIDE,
  payload,
});

export const toggleNavViewAction = view => ({
  type: TOGGLE_NAV_VIEW,
  payload: {
    isViewingAllRides: view === 1,
    isViewingOwnRides: view === 2,
    isViewingRideRequests: view === 3,
  },
});

export const handleFetchingRides = self => async (dispatch) => {
  dispatch(fetchingAction(true));

  axiosInstance.defaults.headers.common.Authorization = localStorage.getItem('token');

  const url = self ? 'user/rides' : 'rides';
  return await axiosInstance.get(url)
    .then((response) => {
      dispatch(setRidesAction(response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(fetchingRidesFailedAction(error.response.data));
      dispatch(fetchingAction(false));
    })
    .catch(() => {
      // TODO: Throw internet connection error here.
    });
};

export const handleCreateRide = rideData => async (dispatch) => {
  dispatch(fetchingAction(true));

  return await axiosInstance.post('users/rides', rideData)
    .then((response) => {
      dispatch(setCreatedRideAction(response.data));
      dispatch(fetchingAction(false));
    })
    .catch((error) => {
      dispatch(errorCreatingRideAction(error.response.data));
      dispatch(fetchingAction(false));
    })
    .catch(() => {
      // TODO: Throw internet connection error here.
    });
};
