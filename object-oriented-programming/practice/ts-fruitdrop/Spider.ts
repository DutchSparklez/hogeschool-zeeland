import CanvasUtil from './CanvasUtil.js';

export default class Spider {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  /**
   * Create an instance of the spider class
   *
   * @param maxX The edge of the x-axis
   */
  public constructor(maxX: number) {
    // Select a random image
    switch (Math.floor(Math.random() * 4)) {
      case 0: this.image = CanvasUtil.loadNewImage('./assets/spider01.png'); break;
      case 1: this.image = CanvasUtil.loadNewImage('./assets/spider02.png'); break;
      case 2: this.image = CanvasUtil.loadNewImage('./assets/spider03.png'); break;
      default: this.image = CanvasUtil.loadNewImage('./assets/spider04.png'); break;
    }

    // Set the position
    this.posY = 0;
    this.posX = Math.floor(Math.random() * maxX);
  }

  /**
   * Update the instance of the spider class
   *
   * @param elapsed the time in ms since the last screen
   */
  public update(elapsed: number) {
    this.posY += elapsed * 0.5;
  }

  /**
   * Draw the spider to the screen
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
