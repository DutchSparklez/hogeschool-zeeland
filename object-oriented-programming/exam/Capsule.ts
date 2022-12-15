import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

export default class Capsule extends ScoreItem {
  /**
   * The vertical speed of the item.
   */
  private verticalSpeed: number;

  /**
   * Create an instance of the waste class.
   *
   * @param maxY The height of the canvas, used to pick a random y position.
   */
  public constructor(maxY: number) {
    // Call the constructor of the super class
    super();

    // Set the values of the class properties
    this.image = CanvasUtil.loadNewImage('./assets/capsule.png');
    this.posX = 0 - this.image.width;
    this.posY = Math.floor(Math.random() * maxY);
    this.score = 0;
    this.speed = 0.3;
    this.verticalSpeed = 0.03;
  }

  /**
   * Update the instance of Update.
   *
   * @param elapsed The time elapsed in ms since the previous call to update.
   */
  public override update(elapsed: number): void {
    super.update(elapsed);
    this.posY -= this.verticalSpeed;

    console.log(this.posY);
  }
}
