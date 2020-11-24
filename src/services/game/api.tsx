import API from '../../utils/api';

const URL_PREFIX = '/api/game';

export const gameService = {
  createGame,
  getGameId,
  getGameName,
  getAllGame,
  deleteGame,
  updateGame,
};

function createGame(data: any) {
  return API.post(`${URL_PREFIX}/create-game`, data);
}
function getGameId(id: any) {
  return API.get(`${URL_PREFIX}/get-game-id?id=` + id);
}
function getGameName(gameName: any) {
  return API.get(`${URL_PREFIX}/get-game-name?gameName=` + gameName);
}
function getAllGame() {
  return API.get(`${URL_PREFIX}/get-all-game`);
}
function deleteGame(gameId: any) {
  return API.post(`${URL_PREFIX}/deleteGame`, gameId);
}
function updateGame(data: any) {
  return API.post(`${URL_PREFIX}/updateGame`, data);
}
