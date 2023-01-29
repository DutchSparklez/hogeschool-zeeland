import Drawable from './Drawable.js';

/**
 * Represents an item that can be collected for (negative) points.
 */
export default abstract class ScoreItem extends Drawable {
  /**
   * The score modifier of the item.
   */
  protected score: number;

  /**
   * The speed of the item.
   */
  protected speed: number;

  /**
   * Update the y position of the item according to its speed.
   *
   * @param elapsed The elapsed time since the last update.
   */
  public update(elapsed: number): void {
    this.posY += this.speed * elapsed;
  }

  /**
   * Returns the score modifier of the item.
   *
   * @returns The score modifier of the item.
   */
  public getScore(): number {
    return this.score;
  }
}
