export default class NumberDisplay {
  private value: number;

  private limit: number;

  /**
   * Create an instance of the NumberDisplay class.
   * If the limit is <= 0, the limit becomes 100.
   *
   * @param limit The limit of the display
   */
  public constructor(limit: number) {
    this.value = 0;
    this.limit = limit > 0 ? limit : 100;
  }

  /**
   * Sets the value of the display to something else.
   * If an attempt is made to set the value to anything < 0 or >= the displays limit,
   * the value becomes 0.
   *
   * @param value the value to set the display to.
   */
  public setValue(value: number): void {
    this.value = value < this.limit && value >= 0 ? value : 0;
  }

  /**
   * Get the current value of the display.
   *
   * @returns The value of the display.
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * Increase the value of the display.
   * If an increase would reach the display's number, the value is set to 0.
   */
  public increase(): void {
    this.value = this.value + 1 < this.limit ? this.value + 1 : 0;
  }
}
