import API from '../../utils/api';

const URL_PREFIX = '/api/user';

export const userService = {
  getUser,
  signUp,
  login,
};

function getUser() {
  return API.get(`${URL_PREFIX}/`);
}
function signUp(user: any) {
  return API.post(`${URL_PREFIX}/signup`, user);
}
function login(user: any) {
  return API.post(`${URL_PREFIX}/login`, user);
}
