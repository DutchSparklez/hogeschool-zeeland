import FruitDrop from './FruitDrop.js';
import { GameLoop } from './GameLoop.js';
import Player from './Player.js';

const fruitDrop = new FruitDrop(document.getElementById('game') as HTMLCanvasElement);

const gameLoop = new GameLoop(fruitDrop);
window.addEventListener('load', () => {
  gameLoop.start();
});
