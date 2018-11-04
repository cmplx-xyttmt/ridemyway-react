/* eslint-disable no-return-await */
import { SET_RIDE_REQUEST, ERROR_CREATING_RIDE_REQUEST } from './types';
import { fetchingAction } from './ridesActions';
import { axiosInstance } from '../globals';

export const setRideRequestAction = payload => ({
  type: SET_RIDE_REQUEST,
  payload,
});

export const errorCreatingRideRequest = payload => ({
  type: ERROR_CREATING_RIDE_REQUEST,
  payload,
});

export const handleSendingRideRequest = rideId => async (dispatch) => {
  dispatch(fetchingAction(true));

  const url = `rides/${rideId}/requests`;

  return await axiosInstance.post(url)
    .then((response) => {
      dispatch(setRideRequestAction(response.data));
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
