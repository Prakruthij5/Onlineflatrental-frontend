import {
    ADD_FLATBOOKING,
  RETRIEVE_FLATBOOKING,
  UPDATE_FLATBOOKING,
  DELETE_FLATBOOKING,
  
} from "./types";
import  FlatBookingService from "../services/FlatBookingService";
//we are creating action objects so that they can be dispatched to the store
//addProduct --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addFlatBooking = ({bookingFromDate,bookingToDate}) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of product type and we receive server response

    const res = await FlatBookingService.create({ bookingFromDate,bookingToDate });
    dispatch({
      type: ADD_FLATBOOKING,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveFlatBookings = () => async (dispatch) => {
  try {
    const res = await FlatBookingService.getAll();
    dispatch({
      type: RETRIEVE_FLATBOOKING,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateFlatBooking = (bookingNo, data) => async (dispatch) => {
  try {
    const res = await FlatBookingService.update(bookingNo, data);
    dispatch({
      type: UPDATE_FLATBOOKING,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteFlatBooking = (bookingNo) => async (dispatch) => {
  try {
    await FlatBookingService.remove(bookingNo);
    dispatch({
      type: DELETE_FLATBOOKING,
      payload: { bookingNo },
    });
  } catch (err) {
    console.log(err);
  }
};