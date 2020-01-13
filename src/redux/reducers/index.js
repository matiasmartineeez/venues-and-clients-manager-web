import { combineReducers } from "redux";
import clients from "./clients";
import venues from "./venues";

export default combineReducers({
  venues,
  clients
});
