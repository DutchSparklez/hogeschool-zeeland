import NumberDisplay from './NumberDisplay.js';

export default class ClockDisplay {
  private display: HTMLDivElement;

  private hours: NumberDisplay;

  private minutes: NumberDisplay;

  private seconds: NumberDisplay;

  /**
   * Create an instance of the number display class.
   * This function updates the display after it's done.
   *
   * @param display The HTML div where the clock is located.
   */
  public constructor(display: HTMLDivElement) {
    this.display = display;
    this.hours = new NumberDisplay(24);
    this.minutes = new NumberDisplay(60);
    this.seconds = new NumberDisplay(60);

    this.updateDisplay();
  }

  /**
   * Increase the clock.
   * This function updates the display after it's done.
   */
  public timeTick(): void {
    this.seconds.increase();

    if (this.seconds.getValue() === 0) {
      this.minutes.increase();

      if (this.minutes.getValue() === 0) {
        this.hours.increase();
      }
    }

    this.updateDisplay();
  }

  /**
   * Set the value of the clock.
   * This function updates the display after it's done.
   *
   * @param hours The prefered hours
   * @param minutes The prefered minutes
   * @param seconds The prefered seconds
   */
  public setTime(hours: number, minutes: number, seconds: number): void {
    this.hours.setValue(hours);
    this.minutes.setValue(minutes);
    this.seconds.setValue(seconds);

    this.updateDisplay();
  }

  /**
   * Update the visual display to a format of HH:MM:SS.
   */
  private updateDisplay(): void {
    const hourDisplay: string = this.hours.getValue().toString(10).padStart(2, '0');
    const minuteDisplay: string = this.minutes.getValue().toString(10).padStart(2, '0');
    const secondDisplay: string = this.seconds.getValue().toString(10).padStart(2, '0');
    this.display.innerHTML = `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
  }
}
