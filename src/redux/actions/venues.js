import actions from "../actionTypes";
import * as venuesServices from "../../services/api/venuesServices";

const setLoadingAction = value => ({
  type: actions.SET_LOADING,
  value
});

const setVenuesAction = value => {
  return {
    type: actions.SET_VENUES,
    value
  };
};

export const getVenues = () => async dispatch => {
  dispatch(setLoadingAction(true));

  const response = await venuesServices.getVenues();

  const { data: venuesData } = response;

  return dispatch(setVenuesAction(venuesData));
};

export const addVenue = name => async dispatch => {
  dispatch(setLoadingAction(true));

  const response = await venuesServices.addVenue(name);

  const { data: venueData } = response;

  if (venueData) dispatch(getVenues());
};
