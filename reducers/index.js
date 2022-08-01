import { combineReducers } from "redux";
import landlords from "./landlords";
import flatbookings from "./flatbookings";
import tenants from "./tenants";
import flats from "./flats";

export default combineReducers({
  landlords,
  flatbookings,
  tenants,
  flats

});