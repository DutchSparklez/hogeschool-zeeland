export default class Cattribute {
  private value: number;

  /**
   * Create a new instance of the cattribute.
   * The value is adjust to a value between and including 0-10.
   *
   * @param initialValue the value at which to start.
   */
  public constructor(initialValue: number) {
    let value: number = initialValue;

    if (value < 0) {
      value = 0;
    } else if (value > 10) {
      value = 10;
    }

    this.value = value;
  }

  /**
   * Increase the value of the cattribute.
   * The value caps at 10.
   *
   * @param by the number that has to be added to the value.
   */
  public increase(by: number): void {
    this.value = this.value + by <= 10 ? this.value + by : 10;
  }

  /**
   * Decrease the value of the cattribute.
   * The value caps at 0.
   *
   * @param by the number that has to be removed from the value.
   */
  public decrease(by: number): void {
    this.value = this.value - by >= 0 ? this.value - by : 0;
  }

  /**
   * Get the current value of the cattribute.
   *
   * @returns The current value of the cattribute.
   */
  public getValue(): number {
    return this.value;
  }
}
