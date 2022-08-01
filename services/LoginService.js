import http from '../http-common';
const create = ({data}) => {
    return http.post('/LandlordAndTenant/addAdmin', data);
  };
  const createUser = ({data}) => {
    return http.post('/LandlordAndTenant/addUser', data);
  };

  const LoginService = {
    createUser,
    create,


  };

  export default LoginService;