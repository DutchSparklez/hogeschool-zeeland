import CanvasUtil from './CanvasUtil.js';
import GameItem from './GameItem.js';

/**
 * The class that will be used as a player during the game.
 */
export default class Player extends GameItem {
  /**
   * The height of the canvas.
   */
  private maxY: number;

  /**
   * Create an instance of the player class.
   *
   * @param maxY the height of the canvas.
   */
  public constructor(maxY: number) {
    // Create the object
    super(CanvasUtil.loadNewImage('./assets/ship.png'), 50, Math.round(maxY / 2), 0, 0);

    // Save the height of the canvas for later use.
    this.maxY = maxY;
  }

  /**
   * Check whether a given game-object collides with the instance of the player class.
   *
   * @param item The item to check collision with the player for.
   * @returns whether the item provided collides with the player.
   */
  public itemCollided(item: GameItem): boolean {
    // Determine whether the item is touching the player.
    return item.getPosX() > this.getPosX() - this.image.width
    && this.getPosX() + this.image.width > item.getPosX()
    && item.getPosY() > this.getPosY() - this.image.height
    && this.getPosY() + this.image.height > item.getPosY();
  }

  /**
   * Increase the upwards motion of the player.
   * This function caps the speed at 20.
   */
  public moveUp(): void {
    this.speed -= this.speed > -20 ? 0.1 : 0;
  }

  /**
   * Increase the downwards motion of the player.
   * This function caps the speed at 20.
   */
  public moveDown(): void {
    this.speed += this.speed < 20 ? 0.1 : 0;
  }

  /**
   * Update the player class. This function changes the position based on the speed.
   * It also loops the players around the screen whenever they leave the screen.
   */
  public override update(): void {
    // Change the Y position when necesarry
    this.posY += this.speed;

    // Loop the player around the screen if they've left it
    if (this.posY < 0 - this.image.height) {
      this.posY = this.maxY;
    } else if (this.posY > this.maxY) {
      this.posY = 0 - this.image.height;
    }
  }
}
