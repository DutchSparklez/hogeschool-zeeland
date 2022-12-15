import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

/**
 * Respresents a fish object.
 * This objects inherits from ScoreItem for drawing and score-modifying behaviour.
 */
export default class Fish extends ScoreItem {
  /**
   * Create an instance of the fish class.
   *
   * @param maxY The height of the canvas, used to pick a random y position.
   */
  public constructor(maxY: number) {
    // Call the constructor of the super class
    super();

    // Prepare for the selection of a random fish
    const fishImages: string[] = ['fish1.png', 'fish2.png', 'fish3.png'];
    const chosenFish: number = Math.floor(Math.random() * fishImages.length);

    // Set the values of the class properties
    this.image = CanvasUtil.loadNewImage(`./assets/${fishImages[chosenFish]}`);
    this.posX = 0 - this.image.width;
    this.posY = Math.floor(Math.random() * maxY);
    this.score = -(5 * (chosenFish + 1));
    this.speed = 0.2;
  }
}
