import 'phaser';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { gameService } from '../services/game/api';

const GameDetail: React.FC<any> = () => {
  const { params } = useRouteMatch();
  const { gameId } = params as any;
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
