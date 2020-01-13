import { unAuthAxiosCall } from "./axiosCall";
import { deleteToken } from "../../lib/utils/auth";

export const getClients = async () =>
  unAuthAxiosCall("/clients/list", {
    method: "GET"
  });

export const addFavoriteVenue = async (client, venue) =>
  unAuthAxiosCall("/clients/add-favorite", {
    method: "POST",
    body: JSON.stringify({
      client,
      venue
    })
  });

export const removeFavoriteVenue = async (client, venue) =>
  unAuthAxiosCall("/clients/remove-favorite", {
    method: "DELETE",
    body: JSON.stringify({
      client,
      venue
    })
  });

export const addNewClient = async client =>
  unAuthAxiosCall("/clients/add", {
    method: "POST",
    body: JSON.stringify({
      ...client
    })
  });
