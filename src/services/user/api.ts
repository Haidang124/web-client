import API from '../../utils/api';

const URL_PREFIX = '/api/user';

export const userService = {
  getUser,
};

function getUser() {
  return API.get(`${URL_PREFIX}/`);
}
