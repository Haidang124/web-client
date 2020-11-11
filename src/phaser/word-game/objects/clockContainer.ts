import { ButtonCircle } from './buttonCircle';

export class ClockContainer extends ButtonCircle {
  timer: Phaser.GameObjects.Text;
  initialTime: number;
  params: any;
  timedEvent: Phaser.Time.TimerEvent;
  isFocused: boolean;
  clockSound: Phaser.Sound.BaseSound;

  constructor(params: any) {
    super(params);
    this.params = params;
    this.isFocused = false;
    this.initialTime = params.time;
    this.clockSound = params.clockSound;
    this.timer = this.scene.add
      .text(35, 0, this.initialTime.toString(), {
        fontFamily: 'Comic Sans Bold',
        fontWeight: 'bold',
        fontSize: 60,
        color: '#DA7429',
      })
      .setOrigin(0.5);

    this.timedEvent = this.scene.time.addEvent({
      delay: 1000,
      callback: this.handleTimeEvent,
      callbackScope: this,
      loop: true,
    });

    this.add(this.timer);
    this.scene.add.existing(this);
  }

  public switchButton(): void {
    this.isFocused = !this.isFocused;
  }

  public stop(): void {
    this.isFocused = false;
  }

  private handleTimeEvent(): void {
    if (this.isFocused) {
      this.initialTime -= 1;
    }
    if (this.initialTime <= 0) {
      this.stop();
      if (typeof this.clockSound !== "undefined") {
        this.clockSound.stop();
      }
    }
    this.timer.setText(this.initialTime.toString());
  }

  public restart(): void {
    this.initialTime = this.params.time;
    this.timer.setText(this.initialTime.toString());
    this.isFocused = false;
  }
}
