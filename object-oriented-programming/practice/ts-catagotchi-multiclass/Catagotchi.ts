import Cattribute from './Cattribute';

export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catMood: Cattribute;

  private catEnergy: Cattribute;

  private catHunger: Cattribute;

  /**
   * Create an instance of the Catagotchi class.
   * Sets all the values up for a new game.
   */
  public constructor() {
    this.catStatus = 'Happy';
    this.catMood = new Cattribute(10);
    this.catEnergy = new Cattribute(10);
    this.catHunger = new Cattribute(0);
  }

  /**
   * Feed the cat, decrease the hunger by 2.
   * Increase the enery with a 50% change of an increase of 2 and 50% of 1.
   */
  public feed(): void {
    this.catHunger.decrease(2);
    this.catEnergy.increase(Math.random() > 0.5 ? 2 : 1);
  }

  /**
   * Play with the cat, increase the mood by 2.
   * Decrease the energy by 1.
   */
  public play(): void {
    this.catMood.increase(2);
    this.catEnergy.decrease(1);
  }

  /**
   * Pet the cat, increase the mood by 2.
   * Increase the energe with a 50% change of an increase of 1 and 50% of 0.
   */
  public pet(): void {
    this.catMood.increase(2);
    this.catEnergy.increase(Math.random() > 0.5 ? 1 : 0);
  }

  /**
   * Let the cat die by changing the value of catAlive to false.
   */
  private catDied(): void {
    this.catAlive = false;
  }

  /**
   * Update the screen of the Catagotchi.
   *
   * @returns String with the output for the screen.
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
      Status: ${this.catStatus}<br>
      Mood:   ${this.catMood}<br>
      Energy: ${this.catEnergy}<br>
      Hunger: ${this.catHunger}`;
    }

    return 'Catagotchi Dead!';
  }

  /**
   * Update the state of Catagotchi according to rules.
   */
  public updateCat(): void {
    this.catMood.decrease(1);
    this.catEnergy.decrease(1);
    this.catHunger.increase(1);

    const catMood = this.catMood.getValue();
    const catEnergy = this.catEnergy.getValue();
    const catHunger = this.catHunger.getValue();

    if (catMood < 4 || catEnergy < 4 || catHunger > 6) {
      this.catStatus = 'Okay';
    } else if (catMood < 2 || catEnergy < 2 || catHunger > 8) {
      this.catStatus = 'Unhappy';
    } else if (catMood < 0 || catEnergy < 0 || catHunger > 10) {
      this.catDied();
    } else {
      this.catStatus = 'Happy';
    }
  }
}
