import React, { useEffect, useState } from 'react';
import '../assets/scss/component/lobby.scss';
import socket from '../socketioClient';

const Lobby: React.FC = () => {
  const [codepin, setCodepin] = useState(null);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    console.log(socket);
    socket.on('connect', function (data) {
      socket.emit('host-join', { id: 1 });
    });
    socket.on('showGamePin', function (data) {
      setCodepin(data.pin);
    });
    socket.on('redirect', function (data) {
      window.location.href = data.redirect;
    });
    getPlayers();
  }, []);
  const getPlayers = () => {
    socket.on('player-lobby', (data) => {
      data.players.splice(0, 1);
      setPlayers(data.players);
    });
  };
  const startgame = () => {
    // window.location.href = 'game/123';
    socket.emit('startGame', { pin: codepin });
  };
  return (
    <div className="lobby">
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
                <p key="index" className="list-username">
                  {player}
                </p>
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
          <p className="waiting">Waiting for players</p>
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
