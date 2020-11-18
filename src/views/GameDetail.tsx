import 'phaser';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gameService } from '../services/game/api';

const GameDetail: React.FC<any> = () => {
  const { params } = useRouteMatch();
  const { gameId } = params as any;
  // let gameData = {
  //   game_type: 'happy-circle',
  //   title: 'Happy circle',
  //   cover: '',
  //   resources: {
  //     image: {
  //       next:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1604432947/Next-Button-PNG-HD_od9apu.png',
  //       analist:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1605043111/anlist_w7m1yc.png',
  //       1: 'https://api.hoclieu.vn/images/game/562d379eaa13270f8c70eaf18765ed81.png',
  //       2: 'https://api.hoclieu.vn/images/game/2dc69b7d671bacb8d877bda86ec7412d.png',
  //       3: 'https://api.hoclieu.vn/images/game/f91370a48014240140a7a6f9158d9c31.png',
  //       4: 'https://api.hoclieu.vn/images/game/26aaf5764006083edc9f24ae0197c5ee.png',
  //       cup_ranking:
  //         'https://api.hoclieu.vn/images/game/436843730189a8318dc065e80b1db8c5.png',
  //       stopwatchClicked:
  //         'https://api.hoclieu.vn/images/game/918b7a04aa321548b640e1acabba2a3e.png',
  //       correctTick:
  //         'https://api.hoclieu.vn/images/game/b88cb1c9f7113524fb76d93676210c5e.png',
  //       wrongTick:
  //         'https://api.hoclieu.vn/images/game/7c5c11d24f05cf6f7e37214fcbd44823.png',
  //       image1:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1604476964/02f7d734-e656-4ca6-9df6-08dad2a233a3_bhvzlp.png',
  //       image2:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1604476964/02f7d734-e656-4ca6-9df6-08dad2a233a3_bhvzlp.png',
  //       image3:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1604476964/02f7d734-e656-4ca6-9df6-08dad2a233a3_bhvzlp.png',
  //       image4:
  //         'https://res.cloudinary.com/vnu-uet/image/upload/v1604476964/02f7d734-e656-4ca6-9df6-08dad2a233a3_bhvzlp.png',
  //     },
  //     audio: {},
  //   },
  //   data: {
  //     startObject: 'startImage',
  //     objects: ['obj_1', 'obj_2', 'obj_3', 'obj_4'],
  //     array: [
  //       {
  //         question: 'He was the first President of the United States',
  //         key: 2, //Đáp án đúng
  //         listAnswer: ['Lưu  Hai Đang', 'Hai dang', 'abc', 'Đáp án 4'],
  //         image: 'image1',
  //         time: 15,
  //       },
  //       {
  //         question: 'He was the first President of the United States 1',
  //         key: 2,
  //         listAnswer: ['Đáp án 10', 'Đáp án 2', 'Đáp án 3', 'Đáp án 4'],
  //         image: 'image2',
  //         time: 25,
  //       },
  //       {
  //         question: 'He was the first President of the United States 2',
  //         key: 3,
  //         listAnswer: ['Đáp án 0', 'Đáp án 2', 'Đáp án 3', 'Đáp án 4'],
  //         image: 'image3',
  //         time: 35,
  //       },
  //     ],
  //   },
  // };

  const [phaserGame, setPhaserGame] = useState<Phaser.Game>();
  const [gameDataPhaser, setGameDataPhaser] = useState(null);

  useEffect(() => {
    gameService.getGameId(gameId).then((response) => {
      setGameDataPhaser(response.data.data);
      console.log(response.data.data);
    });
  }, [gameId]);

  const lazyLoadGame = async () => {
    const { default: GameComponent } = await import(`../phaser/word-game`);

    let gameComponent: Phaser.Game = new GameComponent(gameDataPhaser);
    setPhaserGame(gameComponent);
  };

  if (gameDataPhaser && !phaserGame) {
    lazyLoadGame();
  }

  return <div id="board-game" />;
};

export default GameDetail;
