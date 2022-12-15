import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

/**
 * Represents the player.
 * Inherits from drawable for drawing capabilities.
 */
export default class Player extends Drawable {
  /**
   * The height of the canvas.
   */
  private maxY: number;

  /**
   * Create an instance of the player class.
   *
   * @param maxX The width of the canvas.
   * @param maxY The height of the canvas.
   */
  public constructor(maxX: number, maxY: number) {
    // Call the constructor of the super class
    super();

    // Set the class properties
    this.image = CanvasUtil.loadNewImage('./assets/player.png');
    this.posX = maxX - (20 + this.image.width);
    this.posY = Math.floor(maxY / 2);
    this.maxY = maxY;
  }

  /**
   * Move the player up by 5 pixels.
   * This function ensures that the player does not leave the screen.
   */
  public moveUp(): void {
    if (this.posY > 0) {
      this.posY -= 5;
    }
  }

  /**
   * Move the player down by 5 pixels.
   * This function ensures that the player does not leave the screen.
   */
  public moveDown(): void {
    if (this.posY < this.maxY - this.image.height) {
      this.posY += 5;
    }
  }

  /**
   * Check whether an instance of ScoreItem collides with the player.
   * The following checks are performed:
   * 1. Is the right side of the item past the left side of the player.
   * 2. Is the right side of the item within the right side of the player
   * 3. Is the bottom of the the item past the top of the player.
   * 4. Is the top of the player above the bottom of the player.
   *
   * @param item The item to check for a collision.
   * @returns True, if the given item collides with the player.
   */
  public collidesWithItem(item: ScoreItem): boolean {
    return item.getPosX() + item.getWidth() > this.posX
      && item.getPosX() + item.getWidth() < this.posX + this.image.width
      && item.getPosY() + item.getHeight() > this.posY
      && item.getPosY() < this.posY + this.image.height;
  }
}
