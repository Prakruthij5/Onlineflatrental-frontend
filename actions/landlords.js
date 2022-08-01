import {
    ADD_LANDLORD,
  RETRIEVE_LANDLORDS,
  UPDATE_LANDLORD,
  DELETE_LANDLORD,
  
} from "./types";
import  LandlordService from "../services/LandlordService";

export const addLandlord = ( landlordName,landlordAge) => async (dispatch) => {
  try {

    const res = await LandlordService.create({landlordName,landlordAge});
    dispatch({
      type: ADD_LANDLORD,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveLandlords = () => async (dispatch) => {
  try {
    const res = await LandlordService.getAll();
    dispatch({
      type: RETRIEVE_LANDLORDS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateLandlord = (landlordId, data) => async (dispatch) => {
  try {
    const res = await LandlordService.update(landlordId, data);
    dispatch({
      type: UPDATE_LANDLORD,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteLandlord = (landlordId) => async (dispatch) => {
  try {
    await LandlordService.remove(landlordId);
    dispatch({
      type: DELETE_LANDLORD,
      payload: { landlordId },
    });
  } catch (err) {
    console.log(err);
  }
};