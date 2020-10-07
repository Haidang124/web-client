import API from '../../utils/api';

const URL_PREFIX = '/api/user';

export const userService = {
  getProdGames,
  getDevGames,
  getGameData,
  getGame,
  addGame,
  addGameProd,
  updateGameProd,
  getLinkImage,
  deleteGameProd,
};

function getProdGames() {
  return API.get(`${URL_PREFIX}/prod`);
}
function getDevGames() {
  return API.get(`${URL_PREFIX}/dev`);
}

function getGame(gameId: any) {
  return API.get(`${URL_PREFIX}/${gameId}`);
}

function getGameData(gameId: any) {
  return API.get(`${URL_PREFIX}/game-prod/${gameId}`);
}

function deleteGameProd(gameId: any) {
  return API.delete(`${URL_PREFIX}/game-prod/${gameId}`);
}

function addGame(game: any) {
  return API.post(`${URL_PREFIX}`, game);
}

function addGameProd(game: any) {
  return API.post(`${URL_PREFIX}/prod`, game);
}

function updateGameProd(id: any, game: any) {
  return API.put(`${URL_PREFIX}/prod/${id}`, game);
}

function getLinkImage(data: FormData) {
  return API.post('/api/media/getLinkResources', data);
}
