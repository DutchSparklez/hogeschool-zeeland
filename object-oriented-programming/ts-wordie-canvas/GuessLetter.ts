import CanvasUtil from "./CanvasUtil.js";

export default class GuessLetter {
  private letter: string;

  private color: string;

  /**
   * Create an instance of GuesLetter
   *
   * @param letter The letter
   */
  public constructor(letter: string) {
    this.letter = letter;
  }

  /**
   * Place the letter on the screen
   *
   * @param canvas the drawingboard
   * @param posX the x-location of the letter
   * @param posY the y-location of the letter
   */
  public writeLetter(canvas: HTMLCanvasElement, posX: number, posY: number) {
    CanvasUtil.writeTextToCanvas(
      canvas,
      this.letter,
      posX,
      posY,
      'left',
      undefined,
      canvas.width / 6,
      this.color,
    );
  }

  /**
   * Set the value of color
   *
   * @param color the color you want
   */
  public setColor(color: string) {
    this.color = color;
  }
}
