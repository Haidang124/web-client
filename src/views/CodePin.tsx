import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../assets/scss/component/codepin.scss';
import socket from '../socketioClient';

const CodePin: React.FC = () => {
  const [codePin, setCodepin] = useState(null);
  const [username, setUsername] = useState(null);
  const saveSession = () => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('socketId', socket.id);
    sessionStorage.setItem('codePin', codePin);
  };
  const joinRoom = () => {
    socket.emit('join-room', { pin: codePin, username: username });
    socket.on('check-join-room', (data) => {
      if (data.result === true) {
        toast.success('Tham gia thành công !');
        saveSession();
      } else {
        toast.error('Không tồn tại phòng như vậy !');
      }
    });
  };
  useEffect(() => {
    socket.on('redirect', function (data) {
      window.location.href = data.redirect;
    });
  }, []);
  return (
    <div className="codepin">
      <div className="container-codepin">
        <div className="logo">
          <img
            alt="..."
            src={require('../assets/img/brand/kahoot-logo.png')}
            id="logo-kahoot"
          />
        </div>
        <input
          name="gameId"
          type="tel"
          placeholder="Game PIN"
          onChange={(e) => setCodepin(e.currentTarget.value)}
          id="game-input-codepin"
          className="game-input"
        />
        <input
          name="gameId"
          type="tel"
          placeholder="User Name"
          onChange={(e) => setUsername(e.currentTarget.value)}
          id="game-input-codepin"
          className="game-input mt-4"
        />
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={joinRoom}
          style={{ width: '18.75rem', height: '3.5rem', fontSize: '1.25rem' }}>
          Join
        </button>
      </div>
    </div>
  );
};

export default CodePin;
