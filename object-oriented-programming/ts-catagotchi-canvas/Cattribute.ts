export default class Cattribute {
  private value: number;

  public constructor(value: number) {
    this.value = value;
  }

  /**
   * Increase the value. Set the maximum of the value to 10
   *
   * @param by the number to increase the value by
   */
  public increase(by: number): void {
    this.value += by;
    if (this.value > 10) this.value = 10;
  }

  /**
   * Decrease the value. Set the mimimum of the value to 0
   *
   * @param by the number to decrease the value by
   */
  public decrease(by: number): void {
    this.value -= by;
    if (this.value < 0) this.value = 0;
  }

  public getValue(): number {
    return this.value;
  }
}
