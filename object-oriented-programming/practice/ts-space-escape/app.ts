import SpaceEscape from './SpaceEscape.js';
import { GameLoop } from './GameLoop.js';

const game = new SpaceEscape(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(game);
window.addEventListener('load', () => {
  gameLoop.start();
});
