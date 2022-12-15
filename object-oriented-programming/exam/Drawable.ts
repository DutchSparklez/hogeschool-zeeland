import CanvasUtil from './CanvasUtil.js';

/**
 * Represents the drawable class,
 * inherited by objects that can be drawn onto the screen.
 */
export default abstract class Drawable {
  /**
   * The image that represents the object
   */
  protected image: HTMLImageElement;

  /**
   * Represents the x position of the object,
   * this is the left side of the image.
   */
  protected posX: number;

  /**
   * Represents the y position of the object,
   * this is the top of the image.
   */
  protected posY: number;

  /**
   * Get the x position of the object.
   *
   * @returns The x position of the object, this is the left side.
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * Get the y position of the object.
   *
   * @returns The y position of the object, this is the top.
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * Get the width of the object.
   *
   * @returns The width of the image.
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * Get the height of the image.
   *
   * @returns The height of the image.
   */
  public getHeight(): number {
    return this.image.height;
  }

  /**
   * Draw the image that represents the object to a given canvas.
   *
   * @param canvas the canvas on which the image will be drawn.
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
