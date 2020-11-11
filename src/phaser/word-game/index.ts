import { Boot } from './../boot/boot';
// import { Boot } from '../../common/scenes/boot';
import { Game } from './scenes/game';

class WordGame extends Phaser.Game {
  constructor(gameData) {
    super({
      width: 1920,
      height: 930,
      type: Phaser.CANVAS,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      parent: 'board-game',
      scene: [Boot, Game],
      backgroundColor: '#ffffff',
      dom: {
        createContainer: true,
      },
    });
    this.scene.start('Boot', gameData);
  }
}

export default WordGame;
