import Drawable from './Drawable.js';

/**
 * Represents an item that can affect the score of the player.
 * This class inherits from drawable to enable drawing instances to a canvas.
 */
export default abstract class ScoreItem extends Drawable {
  /**
   * The score modifier.
   */
  protected score: number;

  /**
   * The speed at which the item trafels in pixels.
   */
  protected speed: number;

  /**
   * Update the instance of ScoreItem.
   *
   * @param elapsed The time elapsed in ms since the previous call to update.
   */
  public update(elapsed: number): void {
    this.posX += elapsed * this.speed;
  }

  /**
   * Get the score modifier of the item.
   *
   * @returns The score modifier of the item.
   */
  public getScore(): number {
    return this.score;
  }
}
