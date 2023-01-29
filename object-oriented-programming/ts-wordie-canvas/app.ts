import Wordie from './Wordie.js';

const guessInput: HTMLInputElement = document.getElementById('inputGuess') as HTMLInputElement;

const guessButton: HTMLButtonElement = document.getElementById('makeguess') as HTMLButtonElement;

const resetButton: HTMLButtonElement = document.getElementById('restart') as HTMLButtonElement;

const wordieCanvas: HTMLCanvasElement = document.getElementById('guesses') as HTMLCanvasElement;

let wordie: Wordie;

function makeGuess() {
  wordie.makeGuess(guessInput.value);
  guessInput.value = '';
}

resetButton.addEventListener('click', () => {
  wordie = new Wordie(wordieCanvas);
});

guessButton.addEventListener('click', () => {
  makeGuess();
});

window.addEventListener('keypress', (ev: KeyboardEvent) => {
  if (ev.key === 'Enter') {
    makeGuess();
  }
});

window.addEventListener('load', () => {
  wordie = new Wordie(wordieCanvas);
});
