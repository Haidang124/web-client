import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import socket from '../../../socketioClient';
import Ranking from '../../../views/Ranking';
import { ClockContainer } from '../objects/clockContainer';
import { FloatContainer } from '../objects/floatContainer';
let randomColor = require('randomcolor');
const posObjects = {
  x: [450, 1450, 450, 1450],
  y: [700, 700, 880, 880],
};
export class Game extends Phaser.Scene {
  clocksound;
  answer = 1;
  myAnswer = -1;
  screenNumber = 0;
  float: FloatContainer[] = [];
  stopWatch: any;
  gamedata;
  elements: Phaser.GameObjects.DOMElement;
  numberPlayer: number;
  numberCorrect: Array<number>;
  arrNamePlayer: Array<string>;
  answerForAbc = new Array(4).fill(0);
  constructor() {
    super({
      key: 'Game',
    });
  }
  init(data) {
    this.gamedata = data.gameData;
  }
  preload(){
    for (let i = 0; i < this.gamedata.array.length; i++)  {
      this.load.image('image' + i, this.gamedata.array[i].image);
    }
  }
  create() {
    console.log(socket);
    socket.emit('change-hostId', { hostId: socket.id });
    socket.on('anwser-to-host', (data) => {
      this.myAnswer = data.answer;
      this.answerForAbc[data.answer - 1]++;
      this.checkAnser(data.answer, data.username);
      console.log(data.username + ' : ' + data.answer);
    });
    socket.emit('payload-data');
    socket.on('number-player', (data) => {
      this.arrNamePlayer = data.arrNamePlayer.filter((word) => word !== 'host');
      this.numberPlayer = this.arrNamePlayer.length;
      this.numberCorrect = new Array(this.numberPlayer).fill(0);
    });
    this.answer = this.gamedata.array[this.screenNumber].key;
    console.log(this.gamedata.array[this.screenNumber]);
    this.add.image(1920 / 2, 320, 'image' + this.screenNumber).setDisplaySize(500, 460);
    this.add
      .image(1600, 120, 'cup_ranking')
      .setScale(0.85)
      .setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.setupAnalist(
          `1700px`,
          this.arrNamePlayer.length,
          this.randomColor(this.arrNamePlayer.length),
          this.arrNamePlayer,
          this.numberCorrect,
          'Score of Users',
          'Câu',
        );
      });
    this.add
      .image(1500, 120, 'analist')
      .setScale(0.4)
      .setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        this.setupAnalist(
          `1700px`,
          4,
          this.randomColor(4),
          ['A', 'B', 'C', 'D'],
          this.answerForAbc,
          'Reply Statistics',
          'Người',
        );
      });
    this.add
      .image(1740, 120, 'next')
      .setScale(0.23)
      .setInteractive({ cursor: 'pointer' })
      .on('pointerdown', () => {
        if (this.screenNumber < this.gamedata.array.length - 1) {
          this.myAnswer = -1;
          this.screenNumber += 1;
          this.scene.restart();
        }
      });
    this.add
      .text(1920 / 2, 30, this.gamedata.array[this.screenNumber].question, {
        fontSize: 50,
        fontStyle: 'bold',
        color: '#006793',
        fontFamily: 'Comic Sans Bold',
      })
      .setOrigin(0.5);
    this.initStopWatch();
    this.stopWatch.switchButton();
    this.setupBoard();
  }
  private initStopWatch(): void {
    this.stopWatch = new ClockContainer({
      x: 140,
      y: 300,
      scene: this,
      key: 'stopwatchClicked',
      time: this.gamedata.array[this.screenNumber].time,
      clockSound: this.clocksound,
    });
  }
  randomColor(sum) {
    let arrColor = [];
    for (let i = 0; i < sum; i++) {
      let color =
        i % 2 === 0
          ? randomColor({
              luminosity: 'bright',
            })
          : randomColor({
              luminosity: 'dark',
            });
      arrColor.push(color);
    }
    return arrColor;
  }
  setupAnalist(
    width,
    numberPlayer,
    backgroundColor,
    arrNamePlayer,
    numberCorrect,
    nameRanking,
    label,
  ) {
    let props = {
      numberPlayer: numberPlayer,
      data: {
        backgroundColor: backgroundColor,
        arrNamePlayer: arrNamePlayer,
        numberCorrect: numberCorrect,
        nameRanking: nameRanking,
        label: label,
      },
      destroyFunction: () => {
        this.elements.destroy();
      },
    };
    this.elements = this.add
      .dom(1300, 200, 'div', {
        width: width,
        height: `400px`,
      })
      .setOrigin(0.5);
    ReactDOM.render(React.createElement(Ranking, props), this.elements.node);
  }
  // setupRanking() {
  //   let props = {
  //     numberPlayer: this.numberPlayer,
  //     data: {
  //       backgroundColor: this.randomColor(this.numberPlayer),
  //       arrNamePlayer: this.arrNamePlayer,
  //       numberCorrect: this.numberCorrect,
  //       nameRanking: 'Score of User',
  //       label: 'Correct',
  //     },
  //     destroyFunction: () => {
  //       this.elements.destroy();
  //     },
  //   };
  //   this.elements = this.add
  //     .dom(1300, 200, 'div', {
  //       width: `1800px`,
  //       height: `400px`,
  //     })
  //     .setOrigin(0.5);
  //   ReactDOM.render(React.createElement(Ranking, props), this.elements.node);
  // }
  setupBoard() {
    for (let i = 0; i < 4; i++) {
      this.float[i] = new FloatContainer({
        scene: this,
        x: posObjects.x[i],
        y: posObjects.y[i],
        text: this.gamedata.array[this.screenNumber].listAnswer[i],
        type: i + 1,
      });
      this.float[i].typeFloat
        .setInteractive({ cursor: 'pointer' })
        .on('pointerdown', () => {
          if (this.myAnswer === -1) {
            this.stopWatch.switchButton();
            this.myAnswer = i;
            if (i === this.answer) {
              this.float[i].setCorrect();
            } else {
              this.float[i].setWrong();
            }
          }
        });
    }
  }
  checkAnser(anwser, username) {
    if (this.answer === anwser) {
      this.numberCorrect[this.arrNamePlayer.indexOf(username)]++;
    }
  }
}

export default Game;
