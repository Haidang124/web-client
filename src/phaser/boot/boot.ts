export class Boot extends Phaser.Scene {
  loadingBar;
  progressBar;
  nameFolder;
  gameResources;
  gameData;
  progressBarResources;
  totalScene;
  startScene: string | undefined;
  descTeamData;
  isGetThroughGame: boolean | undefined;

  constructor() {
    super('Boot');
  }

  init(data) {
    this.nameFolder = data.game_type;
    this.gameResources = data.resources;
    this.gameData = data.data;
    this.startScene = data.startScene || 'Game';
  }

  preload() {
    this.cameras.main.setBackgroundColor(0x000000);
    this.createLoadingGraphics();
    this.createProgressBar();
    this.registry.set('progressBarResources', this.progressBarResources);
    if (this.gameData && this.gameData.totalSceneGame) {
      this.registry.set('totalScene', Number(this.gameData.totalSceneGame));
    }
    if (this.gameResources) {
      this.loadAssets(this.gameResources);
    }
    // this.load.pack('preload', `/games/${this.nameFolder}/assets/pack.json`);
    // this.load.pack('preload', '/common/objects/footer/purple/assets/pack.json');
  }

  update() {
    this.scene.start(this.startScene, {
      gameResources: this.gameResources,
      gameData: this.gameData,
      descTeamData: this.descTeamData,
      // isGetThroughGame: this.isGetThroughGame,
    });
  }

  loadAssets(json) {
    Object.keys(json).forEach((group) => {
      Object.keys(json[group]).forEach((key) => {
        let value = json[group][key];
        if (
          group === 'atlas' ||
          group === 'unityAtlas' ||
          group === 'bitmapFont' ||
          group === 'spritesheet' ||
          group === 'multiatlas'
        ) {
          this.load[group](key, value[0], value[1]);
        } else {
          // audio, animation, binary, glsl, image, json, plugin, script, svg, text, tilemapCSV, tilemapTiledJSON, tilemapWeltmeister, xml
          this.load[group](key, value);
        }
      }, this);
    }, this);
  }

  private createLoadingGraphics() {
    this.loadingBar = this.add.graphics();
    this.loadingBar.fillStyle(0xffffff, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20,
    );
    this.progressBar = this.add.graphics();
  }

  private createProgressBar() {
    this.load.on(
      'progress',
      (value) => {
        this.progressBar.clear();
        this.progressBar.fillStyle(0x88e453, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4,
          this.cameras.main.height / 2 - 16,
          (this.cameras.main.width / 2) * value,
          16,
        );
      },
      this,
    );
  }
}
