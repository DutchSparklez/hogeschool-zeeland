import CanvasUtil from './CanvasUtil.js';
import ScoreItem from './ScoreItem.js';

/**
 * Respresents a waste object.
 * This objects inherits from ScoreItem for drawing and score-modifying behaviour.
 */
export default class Waste extends ScoreItem {
  /**
   * Random variables that determines whether this piece of waste will turn into sludge.
   */
  private willSludge: boolean;

  /**
   * Create an instance of the waste class.
   *
   * @param maxY The height of the canvas, used to pick a random y position.
   */
  public constructor(maxY: number) {
    // Call the constructor of the super class
    super();

    // Prepare for the selection of a random fish
    const wasteImages: string[] = ['waste1.png', 'waste2.png', 'waste3.png'];
    let chosenWaste: number = Math.random();

    // Pick a random chosenWaste depended on chance
    if (chosenWaste < 0.5) {
      chosenWaste = 0;
    } else if (chosenWaste < 0.8) {
      chosenWaste = 1;
    } else {
      chosenWaste = 2;
    }

    // Set the values of the class properties
    this.image = CanvasUtil.loadNewImage(`./assets/${wasteImages[chosenWaste]}`);
    this.posX = 0 - this.image.width;
    this.posY = Math.floor(Math.random() * maxY);
    this.score = 10 * (chosenWaste + 1);
    this.speed = 0.3;
    this.willSludge = Math.random() <= 0.1;
  }

  /**
   * Update the instance of Update.
   *
   * @param elapsed The time elapsed in ms since the previous call to update.
   */
  public override update(elapsed: number): void {
    super.update(elapsed);

    if (this.posX > Math.random() * 50 + 400 && this.willSludge) {
      this.image = CanvasUtil.loadNewImage('./assets/toxic.png');
      this.score = 100;
      this.speed = 0.35;
    }
  }
}
