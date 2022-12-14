import http from "../http-common";
const getAll = () => {
  return http.get('/admin_user/getAllLandlord');
};
const get = landlordId => {
  return http.get(`/admin_user/getLandlordById/${landlordId}`);
};
const create = data => {
  return http.post('/Admin/addLandlord', data);
};
const update = (landlordId,data) => {
  return http.put(`/Admin/updatelandlord/${landlordId}`, data);
};
const remove = landlordId => {
  return http.delete(`/Admin/deleteLandlord/${landlordId}`);
};


const LandlordService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default LandlordService;