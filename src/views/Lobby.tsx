import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import { toast } from 'react-toastify';
import '../assets/scss/component/lobby.scss';
import { gameService } from '../services/game/api';
import socket from '../socketioClient';

const Lobby: React.FC = () => {
  const [codepin, setCodepin] = useState(null);
  const [players, setPlayers] = useState([]);
  const { params } = useRouteMatch();
  // tslint:disable-next-line: no-string-literal
  const gameId = params['id'];
  useEffect(() => {
    console.log(socket);
    getGame(gameId);
    socket.on('connect', function () {
      socket.emit('host-join');
    });
    socket.on('showGamePin', function (data) {
      setCodepin(data.pin);
    });
    socket.on('redirect', function (data) {
      window.location.href = data.redirect;
    });
    socket.on('player-disconnect', (data) => {
      data.players.splice(0, 1);
      setPlayers(data.players);
      toast.error(data.playerDis + ' đã thoát khỏi phòng!');
    });
    getPlayers();
  }, []);
  const getPlayers = () => {
    socket.on('player-lobby', (data) => {
      data.players.splice(0, 1);
      setPlayers(data.players);
      toast.success(data.playerJoin + ' đã vào phòng!');
    });
  };
  const startgame = () => {
    socket.emit('startGame', { pin: codepin, gameId: gameId });
  };
  const getGame = async (_id) => {
    if (_id === '') {
      toast.error('Không thấy GameId');
    }
    gameService
      .getGameId(_id)
      .then((res) => {
        toast.success(res.data.data);
      })
      .catch((error) => {
        toast.error('Không thấy GameId hợp lệ');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      });
  };
  const removePlayer = (key) => {
    socket.emit('kick-player-request', key + 1);
    socket.on('refreshPlayer', (data) => {
      data.players.splice(0, 1);
      setPlayers(data.players);
    });
  };
  return (
    <div className="lobby" style={{ overflow: 'hidden' }}>
      <div>
        <div className="lobbystyles__RectangleShape-sc-1dkblab-1 kzvJek" />
        <div className="lobbystyles__CircleShape-sc-1dkblab-2 heWDjw" />
        <div className="content">
          <div className="row code-pin">
            <p>Join this Game using the Game Pin : {codepin} </p>
          </div>
          <div className="row h-100 container-player">
            <div className="col-2 number-player">
              <i className="fas fa-user" />
              <span>{players.length}</span>
            </div>
            <div className="col-8 d-flex flex-column align-items-center">
              <img
                className="logo"
                alt="..."
                src={require('../assets/img/brand/kahoot-logo-white.png')}
                width="200px"
              />
              {players.map((player, key) => (
                <>
                  <div className="btn">
                    <p
                      key="index"
                      className="list-username"
                      id={String(key)}
                      onClick={() => removePlayer(key)}>
                      {player}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div className="col-2 d-flex flex-column">
              <button
                type="button"
                className="btn btn-danger"
                onClick={startgame}>
                Start Game
              </button>
            </div>
          </div>
          <p className="waiting">Waitting for players</p>
          <img
            src={require('../assets/img/brand/image-kahoot.svg')}
            height="300px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Lobby;
