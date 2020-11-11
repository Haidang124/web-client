export class ButtonCircle extends Phaser.GameObjects.Container {
  image: Phaser.GameObjects.Image;
  shadow;

  constructor(params: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    key: string;
    shadowColor?: number;
  }) {
    super(params.scene, params.x, params.y);
    this.scene.add.existing(this);

    this.image = this.scene.add.image(0, 0, params.key);

    if (params.shadowColor !== undefined) {
      this.shadow = this.scene.add.graphics();
      this.shadow.fillStyle(params.shadowColor);
      this.shadow.fillCircle(0, 8, this.image.width / 2);
      this.add(this.shadow);
    }

    this.add(this.image);
  }

  down() {
    this.image.y = 8;
  }

  up() {
    this.image.y = 0;
  }
}
