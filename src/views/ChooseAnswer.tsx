import React, { useEffect, useState } from 'react';
import '../assets/scss/component/chooseanswer.scss';
import socket from '../socketioClient';

const ChooseAnswer: React.FC = () => {
  const [answer, setAnswer] = useState(null);
  useEffect(() => {
    if (sessionStorage.getItem('codePin')) {
      console.log('sdsdsd');
      socket.emit('join-room-again', {
        reCode: sessionStorage.getItem('codePin'),
        username: sessionStorage.getItem('username'),
      });
    }
  }, []);
  useEffect(() => {
    console.log(socket);
    console.log(answer);
    socket.emit('choose-answer', {
      answer: answer,
      codePin: sessionStorage.getItem('codePin'),
      username: sessionStorage.getItem('username'),
    });
  }, [answer]);
  return (
    <div className="choose-answer">
      <div>
        <div className="navbar-choose-answer">
          <div className="left-navbar">
            <div className="pin">PIN: 8586136</div>
            <div className="number-question">1 of 12</div>
          </div>
          <div className="right-navbar">
            <div className="nickname">123</div>
            <div className="score">0</div>
          </div>
        </div>
        <div className="content">
          <div className="top-answer">
            <div
              className="answer"
              id="answer-1"
              onClick={() => {
                setAnswer(1);
              }}>
              <div>
                <span
                  className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    width: '15.27467vmin',
                    height: '15.27467vmin',
                  }}>
                  <svg
                    id="TRIANGLE"
                    data-functional-selector="icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="rgba(0, 0, 0, 0.15)"
                    strokeWidth="1.3px"
                    style={{ paintOrder: 'stroke' }}>
                    <path
                      d="M27,24.559972 L5,24.559972 L16,7 L27,24.559972 Z"
                      style={{ fill: 'inherit' }}
                    />
                  </svg>
                </span>
              </div>
              <span
                data-functional-selector="question-choice-text-0"
                className="question-choice-content__Text-z7z2ef-1 diieaG"
              />
            </div>
            <div
              className="answer"
              id="answer-2"
              onClick={() => {
                setAnswer(2);
              }}>
              <div>
                <span
                  className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    width: '15.27467vmin',
                    height: '15.27467vmin',
                  }}>
                  <svg
                    id="DIAMOND"
                    data-functional-selector="icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="rgba(0, 0, 0, 0.15)"
                    strokeWidth="1.3px"
                    style={{ paintOrder: 'stroke' }}>
                    <path
                      d="M4,16.0038341 L16,4 L28,16.0007668 L16,28 L4,16.0038341 Z"
                      style={{ fill: 'inherit' }}
                    />
                  </svg>
                </span>
              </div>
              <span
                data-functional-selector="question-choice-text-1"
                className="question-choice-content__Text-z7z2ef-1 diieaG"
              />
            </div>
          </div>
          <div className="bottom-answer">
            <div
              className="answer"
              id="answer-3"
              onClick={() => {
                setAnswer(3);
              }}>
              <div>
                <span
                  className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    width: '15.27467vmin',
                    height: '15.27467vmin',
                  }}>
                  <svg
                    id="CIRCLE"
                    data-functional-selector="icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="rgba(0, 0, 0, 0.15)"
                    strokeWidth="1.3px"
                    style={{ paintOrder: 'stroke' }}>
                    <path
                      d="M16,27 C9.92486775,27 5,22.0751322 5,16 C5,9.92486775 9.92486775,5 16,5 C22.0751322,5 27,9.92486775 27,16 C27,22.0751322 22.0751322,27 16,27 Z"
                      style={{ fill: 'inherit' }}
                    />
                  </svg>
                </span>
              </div>
              <span
                data-functional-selector="question-choice-text-2"
                className="question-choice-content__Text-z7z2ef-1 diieaG"
              />
            </div>
            <div
              className="answer"
              id="answer-4"
              onClick={() => {
                setAnswer(4);
              }}>
              <div>
                <span
                  className="icon__Icon-xvsbpg-0 bJpEJN card-icon__icon"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    width: '15.27467vmin',
                    height: '15.27467vmin',
                  }}>
                  <svg
                    id="SQUARE"
                    data-functional-selector="icon"
                    viewBox="0 0 32 32"
                    focusable="false"
                    stroke="rgba(0, 0, 0, 0.15)"
                    strokeWidth="1.3px"
                    style={{ paintOrder: 'stroke' }}>
                    <path
                      d="M7,7 L25,7 L25,25 L7,25 L7,7 Z"
                      style={{ fill: 'inherit' }}
                    />
                  </svg>
                </span>
              </div>
              <span
                data-functional-selector="question-choice-text-3"
                className="question-choice-content__Text-z7z2ef-1 diieaG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAnswer;
