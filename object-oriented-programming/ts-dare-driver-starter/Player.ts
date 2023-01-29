import CanvasUtil from './CanvasUtil.js';
import Drawable from './Drawable.js';
import ScoreItem from './ScoreItem.js';

/**
 * The player class
 */
export default class Player extends Drawable {
  /**
   * Create a new player.
   *
   * @param startX The starting x position, which is the left side of the player.
   * @param startY The starting y position, which is the bottom of the player.
   */
  public constructor(startX: number, startY: number) {
    super();
    this.image = CanvasUtil.loadNewImage('./assets/player.png');
    this.posX = startX;
    this.posY = startY - this.image.height;
  }

  /**
   * Move the player to a new x position.
   *
   * @param newX The new x position.
   */
  public move(newX: number): void {
    this.posX = newX;
  }

  /**
   * Check if the player collides with an item.
   *
   * @param item The item to check collision with.
   * @returns True if the player collides with the item.
   */
  public collideWithItem(item: ScoreItem): boolean {
    return (this.posX < item.getPosX() + item.getWidth()
      && this.posX + this.getWidth() > item.getPosX()
      && this.posY < item.getPosY() + item.getHeight()
      && this.posY + this.getHeight() > item.getPosY());
  }
}
