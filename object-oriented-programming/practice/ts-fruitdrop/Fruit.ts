import CanvasUtil from './CanvasUtil.js';

export default class Fruit {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  /**
   * Create an instance of the Fruit class
   *
   * @param maxX The edge of the x-axis
   */
  public constructor(maxX: number) {
    // Get a random image
    switch (Math.floor(Math.random() * 5)) {
      case 0: this.image = CanvasUtil.loadNewImage('./assets/fruit-banana.png'); break;
      case 1: this.image = CanvasUtil.loadNewImage('./assets/fruit-cherries.png'); break;
      case 2: this.image = CanvasUtil.loadNewImage('./assets/fruit-grapes.png'); break;
      case 3: this.image = CanvasUtil.loadNewImage('./assets/fruit-orange.png'); break;
      default: this.image = CanvasUtil.loadNewImage('./assets/fruit-strawberry.png');
    }

    // Set the position
    this.posY = 0;
    this.posX = Math.floor(Math.random() * maxX);
  }

  /**
   * Update the instance of the fruit class
   *
   * @param elapsed the time in ms since the last screen
   */
  public update(elapsed: number) {
    this.posY += elapsed * 0.5 + (0.002 * this.posY);
  }

  /**
   * Draw the fruit to the screen
   *
   * @param canvas where to draw
   */
  public render(canvas: HTMLCanvasElement) {
    CanvasUtil.drawImage(canvas, this.image, this.posX, this.posY);
  }

  /**
   * Get the x-position
   *
   * @returns the x position
   */
  public getPosX(): number {
    return this.posX;
  }

  /**
   * Get the y-position
   *
   * @returns the y position
   */
  public getPosY(): number {
    return this.posY;
  }

  /**
   * Get the width
   *
   * @returns the width
   */
  public getWidth(): number {
    return this.image.width;
  }

  /**
   * Get the height
   *
   * @returns the height
   */
  public getHeight(): number {
    return this.image.height;
  }
}
