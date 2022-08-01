import http from "../http-common";
const getAll = () => {
  return http.get("/admin_user/viewAllFlat");
};
const get = flatId => {
  return http.get(`/User/viewFlatById/${flatId}`);
};
const create = data => {
  return http.post("/User/addFlat", data);
};
const update = (flatId,data) => {
  return http.put(`/Admin/updateFlat/${flatId}`, data);
};
const remove = flatId => {
  return http.delete(`/Admin/deleteFlat/${flatId}`);
};
/* any other service or queries or sorting or features which you want to add
const removeAll = () => {
  return http.delete(`/tutorials`);
};
const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};*/
const FlatService = {
    getAll,
    get,
    create,
    update,
    remove,
    //removeAll,
    //findByTitle
    //you can add more actions here
  };
  export default FlatService;