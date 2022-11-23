import CanvasUtil from './CanvasUtil.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class Player {
  private image: HTMLImageElement;

  private speed: number;

  private posX: number;

  private posY: number;

  /**
   * Create an instance of the player class
   *
   * @param maxX The edge of the x-axis
   * @param maxY The edge of the y-axis
   */
  public constructor(maxX: number, maxY: number) {
    this.image = CanvasUtil.loadNewImage('./assets/basket.png');
    this.speed = 5;
    this.posX = maxX / 2;
    this.posY = maxY - this.getHeight() * 2;
  }

  /**
   * Move the player to the left by means of its speed
   */
  public moveLeft(): void {
    this.posX -= this.speed;
  }

  /**
   * Move the player to the right by means of its speed
   */
  public moveRight(): void {
    this.posX += this.speed;
  }

  /**
   * Check whether a piece of fruit collides with the player
   *
   * @param fruit the fruit to check for a collision with
   * @returns true when a piece of fruit collides
   */
  public isCollidingFruit(fruit: Fruit): boolean {
    // Create a variables that stores the center position of the fruit
    const center = Math.floor(fruit.getWidth()) / 2;

    // Check the X-axis
    if (fruit.getPosX() + center > this.posX && this.getWidth() + this.posX > fruit.getPosX()) {
      // Check the Y-axis
      if (fruit.getPosY() > this.posY && this.getHeight() + this.posY > fruit.getPosY()) {
        // We're colliding
        return true;
      }
    }

    // We're not colliding
    return false;
  }

  /**
   * Check whether a spider collides with the player
   *
   * @param spider The spider to check for a collision with
   * @returns true when a spider collides
   */
  public isCollidingSpider(spider: Spider): boolean {
    // Create a variables that stores the center position of the fruit
    const center = Math.floor(spider.getWidth()) / 2;

    // Check the X-axis
    if (spider.getPosX() + center > this.posX && this.getWidth() + this.posX > spider.getPosX()) {
      // Check the Y-axis
      if (spider.getPosY() > this.posY && this.getHeight() + this.posY > spider.getPosY()) {
        // We're colliding
        return true;
      }
    }

    // We're not colliding
    return false;
  }

  /**
   * Draw the player to the screen
   *
   * @param canvas where to draw
   */
  public render(canvas: HTMLCanvasElement): void {
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
