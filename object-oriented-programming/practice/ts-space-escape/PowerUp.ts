import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

/**
 * The PowerUp class, an helper during the
 */
export default class PowerUp extends GameItem {
  /**
   * Create an instance of the PowerUp class.
   *
   * @param maxX the width of the canvas.
   * @param maxY the height of the canvas.
   */
  public constructor(maxX: number, maxY: number) {
    // Determine the image to load
    const thing = Math.random() > 0.5 ? 'bolt' : 'things';
    const image = CanvasUtil.loadNewImage(`./assets/${thing}_gold.png`);

    // Create the object
    super(image, maxX + image.width, Math.round(Math.random() * maxY), 2, 3);
  }

  /**
   * Update the PowerUp class. This function updates the position.
   */
  public update(): void {
    this.posX -= this.speed;
  }
}
