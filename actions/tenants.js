import {
    ADD_TENANT,
  RETRIEVE_TENANTS,
  UPDATE_TENANT,
  DELETE_TENANT,
  
} from "./types";

import  TenantService from "../services/TenantService";
//we are creating action objects so that they can be dispatched to the store
//addTenant --dispatch object from where -
// when we  bindActionCreators -- destructured object of diff vars and functions and to that we are tying the dispatch
//useDispatch hook , which will give us the constant of dispatch

export const addTenant = (tenant_age,tenantName) => async (dispatch) => {
  try {
    //first the call to back end server is happening
    //data of tenant type and we receive server response

    const res = await TenantService.create({ tenant_age,tenantName});
    dispatch({
      type: ADD_TENANT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const retrieveTenants = () => async (dispatch) => {
  try {
    const res = await TenantService.getAll();
    dispatch({
      type: RETRIEVE_TENANTS,
      payload:res.data,
    });
   
  
}
catch(err){return Promise.reject(err);}};


export const updateTenant = (tenant_id, data) => async (dispatch) => {
  try {
    const res = await TenantService.update(tenant_id, data);
    dispatch({
      type: UPDATE_TENANT,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const  deleteTenant = (tenant_id) => async (dispatch) => {
  try {
    await TenantService.remove(tenant_id);
    dispatch({
      type: DELETE_TENANT,
      payload: { tenant_id },
    });
  } catch (err) {
    console.log(err);
  }
};