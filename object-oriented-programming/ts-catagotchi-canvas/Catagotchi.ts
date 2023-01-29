import CanvasUtil from './CanvasUtil.js';
import Cattribute from './Cattribute.js';

export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catMood: Cattribute;

  private catEnergy: Cattribute;

  private catHunger: Cattribute;

  private catDeadImage: HTMLImageElement;

  private catHappyImage: HTMLImageElement;

  private catOkayImage: HTMLImageElement;

  private catUnhappyImage: HTMLImageElement;

  private energyIcon: HTMLImageElement;

  private hungerIcon: HTMLImageElement;

  private moodIcon: HTMLImageElement;

  public constructor() {
    this.catAlive = true;
    this.catMood = new Cattribute(10);
    this.catEnergy = new Cattribute(10);
    this.catHunger = new Cattribute(0);

    this.catStatus = 'Happy';

    // Load appropriate images
    this.catDeadImage = CanvasUtil.loadNewImage('./assets/cat-ded.png');
    this.catHappyImage = CanvasUtil.loadNewImage('./assets/cat-happy.png');
    this.catOkayImage = CanvasUtil.loadNewImage('./assets/cat-okay.png');
    this.catUnhappyImage = CanvasUtil.loadNewImage('./assets/cat-unhappy.png');
    this.energyIcon = CanvasUtil.loadNewImage('./assets/icon-energy.png');
    this.hungerIcon = CanvasUtil.loadNewImage('./assets/icon-hunger.png');
    this.moodIcon = CanvasUtil.loadNewImage('./assets/icon-mood.png');
  }

  /**
   * Feed my Catagotchi and reduce its hunger.
   */
  public feed(): void {
    this.catHunger.decrease(1);
  }

  /**
   * Play with my Catagotchi and improve its mood, but it gets tired
   */
  public play(): void {
    this.catEnergy.decrease(1);
    this.catMood.increase(1);
  }

  /**
   * Pet my Catagotchi so that it will fall asleep.
   */
  public pet(): void {
    this.catEnergy.increase(1);
    this.catHunger.increase(1);
  }

  /**
   * Check if my Catagotchi has died. Hopefully not :(
   */
  private catDied(): void {
    if (this.catEnergy.getValue() === 0 || this.catHunger.getValue() === 10) this.catAlive = false;
  }

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    if (this.catEnergy.getValue() < 2
      || this.catMood.getValue() < 2
      || this.catHunger.getValue() > 8) {
      this.catStatus = 'Unhappy';
    } else if (this.catEnergy.getValue() < 4
      || this.catMood.getValue() < 4
      || this.catHunger.getValue() > 6) {
      this.catStatus = 'Okay';
    } else {
      this.catStatus = 'Happy';
    }

    if (Math.random() > 0.7) this.catEnergy.decrease(1);
    if (Math.random() > 0.8) this.catMood.decrease(1);
    if (Math.random() > 0.9) this.catHunger.increase(1);
    this.catDied();
  }

  /**
   * Update the screen of the Catagotchi
   * TODO: Complete this function.
   *
   * @param canvas Canvas to draw on
   */
  public updateScreen(canvas: HTMLCanvasElement): void {
    // Clear canvas before drawing again
    CanvasUtil.clearCanvas(canvas);

    // Draw all the Cattribute icons and values;
    CanvasUtil.drawImage(canvas, this.energyIcon, 0, 150);
    CanvasUtil.writeTextToCanvas(canvas, this.catEnergy.getValue().toString(), 50, 170, undefined, undefined, undefined, 'black');

    CanvasUtil.drawImage(canvas, this.hungerIcon, 100, 150);
    CanvasUtil.writeTextToCanvas(canvas, this.catHunger.getValue().toString(), 150, 170, undefined, undefined, undefined, 'black');

    CanvasUtil.drawImage(canvas, this.moodIcon, 200, 150);
    CanvasUtil.writeTextToCanvas(canvas, this.catMood.getValue().toString(), 250, 170, undefined, undefined, undefined, 'black');

    if (this.catAlive) {
      // Draw a different image depending on the status of the Catagotchi
      switch (this.catStatus) {
        case 'Happy': CanvasUtil.drawImage(canvas, this.catHappyImage, 0, 0); break;
        case 'Okay': CanvasUtil.drawImage(canvas, this.catOkayImage, 0, 0); break;
        case 'Unhappy': CanvasUtil.drawImage(canvas, this.catUnhappyImage, 0, 0); break;
        default: break;
      }
    } else {
      // Draw image of dead Catagotchi :(
      CanvasUtil.drawImage(canvas, this.catDeadImage, 0, 0);
    }
  }
}
