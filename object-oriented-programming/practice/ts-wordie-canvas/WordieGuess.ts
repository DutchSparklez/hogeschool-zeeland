import CanvasUtil from "./CanvasUtil.js";
import GuessLetter from "./GuessLetter.js";

export default class WordieGuess {
  private letters: GuessLetter[];

  /**
   *
   * @param answer the correct answer
   * @param guess the users guess
   */
  public constructor(answer: string, guess: string) {
    this.letters = [];

    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      let color = 'black';

      if (letter === answer[i]) {
        color = 'green';
      } else if (answer.search(letter) >= 0) {
        if (guess[answer.search(letter)] !== letter) {
          color = 'blue';
        }
      }

      const guessLetter = new GuessLetter(letter);
      guessLetter.setColor(color);
      this.letters.push(guessLetter);
    }
  }

  /**
   *
   * @param canvas the drawingboard.
   * @param posY the Y position.
   */
  public writeGuess(canvas: HTMLCanvasElement, posY: number) {
    for (let i = 0; i < this.letters.length; i++) {
      this.letters[i].writeLetter(canvas, canvas.width * 0.1 + (canvas.width / 6) * i, posY);
    }
  }
}
