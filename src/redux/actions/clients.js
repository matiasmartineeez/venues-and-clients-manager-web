import actions from "../actionTypes";
import * as clientsServices from "../../services/api/clientsServices";

const setLoadingAction = value => ({
  type: actions.SET_LOADING,
  value
});

const setClientsAction = value => {
  return {
    type: actions.SET_CLIENTS,
    value
  };
};

export const getClients = () => async dispatch => {
  dispatch(setLoadingAction(true));

  const response = await clientsServices.getClients();

  const { data: clientsData } = response;

  return dispatch(setClientsAction(clientsData));
};

export const addFavoriteVenue = (client, venue) => async dispatch => {
  dispatch(setLoadingAction(true));

  const response = await clientsServices.addFavoriteVenue(client, venue);

  if (response) {
    dispatch(getClients());
  } else {
    alert("Nooo man no");
  }
};

export const addNewClient = client => async dispatch => {
  dispatch(setLoadingAction(true));

  const response =  await clientsServices.addNewClient(client);

  if (response.data) {
    dispatch(getClients());
  }
};

export const removeFavoriteVenue = (client, venue) => async dispatch => {
  dispatch(setLoadingAction(true));

  const response = await clientsServices.removeFavoriteVenue(client, venue);

  if (response) {
    dispatch(getClients());
  } else {
    alert("Nooo man no");
  }
};
