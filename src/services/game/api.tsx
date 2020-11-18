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
function getGameName(game_name: any) {
  return API.get(`${URL_PREFIX}/get-game-name?game_name=` + game_name);
}
function getAllGame() {
  return API.get(`${URL_PREFIX}/get-all-game`);
}
function deleteGame(game_id: any) {
  return API.post(`${URL_PREFIX}/deleteGame`, game_id);
}
function updateGame(data: any) {
  return API.post(`${URL_PREFIX}/updateGame`, data);
}
