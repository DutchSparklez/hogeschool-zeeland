export default class Catagotchi {
  private catAlive: boolean;
  private catStatus: string;
  private catMood: number;
  private catEnergy: number;
  private catHunger: number;

  public constructor() {
    this.catAlive = true;
    this.catStatus = "Happy";
    this.catMood = 10;
    this.catEnergy = 10;
    this.catHunger = 0;
  }
  /**
   *
   */
  public feed(): void {
    this.catHunger -= 2;
  }

  public play(): void {
    this.catMood += 1;
    this.catEnergy -= 1;
  }

  public pet(): void {
    this.catEnergy += 1;
    this.catMood += 1;
  }

  private catDied(): void {
    this.catAlive = false;
    this.catStatus = 'Dead';
  }

  /**
   * Update the state of Catagotchi according to rules
   */
  public updateCat(): void {
    this.catEnergy -= 1;
    this.catHunger += 1;
    this.catMood -= 1;

    if (this.catEnergy <= 0 || this.catHunger >= 10 || this.catMood <= 0) {
      this.catDied();
    } else if (this.catEnergy < 2 || this.catHunger > 8 || this.catMood < 2) {
      this.catStatus = 'Unhappy';
    } else if (this.catEnergy < 4 || this.catHunger < 4 || this.catMood < 4) {
      this.catStatus = 'Okay';
    }
  }

  /**
   * Update the screen of the Catagotchi
   * TODO: Complete this function.
   *
   * @returns String with the output for the screen
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
}
