import CanvasUtil from './CanvasUtil.js';

/**
 * The GameItem class.
 * A class made to be inherited by other classes that will be used as game items.
 */
export default abstract class GameItem {
  /**
   * The image to be drawn onto the screen.
   */
  protected image: HTMLImageElement;

  /**
   * The X-Position of the item (left-side).
   */
  protected posX: number;

  /**
   * The Y-position of the item (top-side).
   */
  protected posY: number;

  /**
   * The speed of the item.
   */
  protected speed: number;

  /**
   * The change to the player's shield whenever this item collides with the player.
   */
  protected shieldModifier: number;

  /**
   * Create an instance of the abstract GameItem class
   *
   * @param image the image for the item.
   * @param posX the X position of the item.
   * @param posY the Y position of the item.
   * @param speed the initial speed of the item.
   * @param shieldModifier the shield modifier of the item.
   */
  public constructor(
    image: HTMLImageElement,
    posX: number,
    posY: number,
    speed: number,
    shieldModifier: number,
  ) {
    this.image = image;
    this.posX = posX;
    this.posY = posY;
    this.speed = speed;
    this.shieldModifier = shieldModifier;
  }

  public abstract update(elapsed: number): void;

  /**
   * Draw the spaceship to the screen.
   *
   * @param canvas the canvas element on the web page to draw on.
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }

  /**
   * Get the current shield modifier.
   *
   * @returns The shield modifier.
   */
  public getShieldModifier(): number {
    return this.shieldModifier;
  }

  /**
   * Get the X-position of the item.
   *
   * @returns the x position of the item.
   */
  public getPosX() {
    return this.posX;
  }

  /**
   * Get the Y-position of the item.
   *
   * @returns the y position of the item.
   */
  public getPosY() {
    return this.posY;
  }
}
