import 'phaser';
import React, { useEffect, useState } from 'react';
import { gameService } from '../services/game/api';
import { useRouteMatch } from 'react-router-dom';

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

  // bay gio no kiêu như thê nay
  // phai chen them image can hienj thi trong resoucre nữa rồi cái image trong data cần goi tên nữa là đc. Cho là mảng được kho. mảng g/ moi cai ten khac nhau ma
  // ns chung k cho dc cai image phia duoi fix cung luôn vạy la đc. cần thay đổi cái trên là xong. Nhuwng caí database nó cố định mà
  // chưa hiểu. chỉnh lại db đi. Làm sao chèn được nhiều image phía trên resource ấy. Phải cho nó là mảng thì mới chèn được chứ
  // hinh nhu trong js co push cho 1 object
  // the gio sua db theo cai moi nay nha
  // element[`image${n}`]="11"

  // chỗ gameData nay la dât cho game. tôi đang fix cứng nó ở như thế. nhưng đúng ra pahri lấy api rồi get về như cái hàm useefect kia.
  // việc cần làm bây giờ vào bên sserve tạo 1 model mới tên game.để lưu data cho game
  // sau ddos vieets api để lấy data. rồi gọi ở chỗ này
  //viết như user đấy hả. uk tạo 1 model mới cùng chỗ vs user. cũng gôm 3 file model, controler, router
  // có viết đc k hay để tôi viết.. Để tôi xem rồi thửu viết xem sao. làm chỗ vs cái user nha
  // viết thêm api tạo data cho game từ cái create game ông đang làm ấy. từ cái create game nó phải lưu vào đc dbase.
  // Nó lưu xong phải xuất hiện ơ chỗ discorver ấy. Chỗ discorvr  lầ mấy cái game đã tạo ra rồi chỉ có vào chơi
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
