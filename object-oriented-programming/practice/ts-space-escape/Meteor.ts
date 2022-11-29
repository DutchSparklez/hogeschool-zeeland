import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

/**
 * A meteor is a malicious object to be used during the game.
 */
export default class Meteor extends GameItem {
  /**
   * Create an instance of the Meteor class.
   *
   * @param maxX the width of the canvas.
   * @param maxY the height of the canvas.
   */
  public constructor(maxX: number, maxY: number) {
    // Create variables for constant data across different meteors
    const color = Math.random() > 0.5 ? 'brown' : 'grey';
    const posY = Math.round(Math.random() * maxY);

    // Determine whether we're drawing a big meteor or a small one
    if (Math.random() > 0.5) {
      // Load the image and create the object
      const image = CanvasUtil.loadNewImage(`./assets/meteor_${color}_big.png`);
      super(image, maxX + image.width, posY, 1, -5);
    } else {
      // Load the image and create the object
      const image = CanvasUtil.loadNewImage(`./assets/meteor_${color}_small.png`);
      super(image, maxX + image.width, posY, 2, -1);
    }
  }

  /**
   * Update the Metoer class.
   * This function changes the speeds and the position.
   *
   * @param elapsed the time since the last frame started in ms.
   */
  public override update(elapsed: number): void {
    this.speed += elapsed / 5_000;
    this.posX -= this.speed;
  }
}
