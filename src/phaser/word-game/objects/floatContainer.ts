export class FloatContainer extends Phaser.GameObjects.Container {
  typeFloat: Phaser.GameObjects.Image;
  isAnswer = false;
  correct: Phaser.GameObjects.Image;
  wrong: Phaser.GameObjects.Image;
  text: Phaser.GameObjects.Text;
  constructor(params) {
    super(params.scene, params.x, params.y);
    this.scene.add.existing(this);
    this.typeFloat = this.scene.add.image(this.x, this.y, params.type);
    this.text = this.scene.add
      .text(this.x, this.y - 40, params.text, {
        fontSize: 50,
        fontStyle: 'bold',
        color: '#1e2632',
      })
      .setOrigin(0.5);
    this.correct = this.scene.add
      .image(this.x + 400, this.y - 100, 'correctTick')
      .setVisible(false);
    this.wrong = this.scene.add
      .image(this.x + 400, this.y - 100, 'wrongTick')
      .setVisible(false);
  }
  setCorrect() {
    this.wrong.setVisible(false);
    this.correct.setVisible(true);
    this.isAnswer = true;
  }
  setUnactiveAll() {
    this.wrong.setVisible(false);
    this.correct.setVisible(false);
    this.isAnswer = false;
  }
  setWrong() {
    this.wrong.setVisible(true);
    this.correct.setVisible(false);
    this.isAnswer = true;
  }
}
