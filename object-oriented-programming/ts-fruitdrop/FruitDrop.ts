import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private player: Player;

  private fruit: Fruit[];

  private spiders: Spider[];

  private keyListener: KeyListener;

  private score: number;

  private timeLeft: number;

  private timeToNextItem: number;

  /**
   * Create an instance of the FruitDrop class.
   *
   * @param canvas The canvas to draw on.
   */
  public constructor(canvas: HTMLCanvasElement) {
    // Call the constructor of the super class
    super();

    // Set the class variables
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.player = new Player(canvas.width, canvas.height);
    this.fruit = [];
    this.spiders = [];
    this.keyListener = new KeyListener();
    this.score = 0;
    this.timeLeft = 90_000;
    this.timeToNextItem = 250;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    // Move left
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)) {
      this.player.moveLeft();
    }

    // Move right
    if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)) {
      this.player.moveRight();
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // Make sure the game is actually still running
    if (this.timeLeft > 0) {
      // Create a new item when you have to
      if (this.timeToNextItem <= 0) {
        // Add fruit
        this.fruit.push(new Fruit(this.canvas.width), new Fruit(this.canvas.width));

        // Add a spider 50% of the time
        if (Math.random() > 0.5) {
          this.spiders.push(new Spider(this.canvas.width));
        }

        // Reset the next item counter
        this.timeToNextItem = 250;
      }

      // Update all the fruit pieces
      this.fruit.forEach((fruitPiece, index) => {
        // Call the update function
        fruitPiece.update(elapsed);

        // Check for a collision and process the results
        if (this.player.isCollidingFruit(fruitPiece)) {
          this.score += 1;
          this.fruit.splice(index, 1);
        }
      });

      // Update all the spiders
      this.spiders.forEach((spider, index) => {
        // Call the update function
        spider.update(elapsed);

        // Check for a collision and process the results
        if (this.player.isCollidingSpider(spider)) {
          this.score -= 1;
          this.spiders.splice(index, 1);
        }
      });

      // Change time variables
      this.timeLeft -= elapsed;
      this.timeToNextItem -= elapsed;

      // Tell the gameloop to continue
      return true;
    }

    // Tell the gameloop to quit
    return false;
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasUtil.clearCanvas(this.canvas);

    // Check whether the game has ended
    if (this.timeLeft > 0) {
      // Get te time that's left in seconds
      const timeLeftInSeconds = Math.floor(this.timeLeft / 1000);

      // Write statistics to the screen
      CanvasUtil.writeTextToCanvas(this.canvas, `Score: ${this.score}`, 10, 50, 'left', undefined, 50);
      CanvasUtil.writeTextToCanvas(this.canvas, `Time Left: ${timeLeftInSeconds}`, 10, 150, 'left', undefined, 50);

      // Render the player
      this.player.render(this.canvas);

      // Render all the fruit
      this.fruit.forEach((fruitPiece) => {
        fruitPiece.render(this.canvas);
      });

      // Render all the spiders
      this.spiders.forEach((spider) => {
        spider.render(this.canvas);
      });
    } else {
      // Tell the user the game has ended
      CanvasUtil.writeTextToCanvas(
        this.canvas,
        `Game Over! ${this.score} Points!`,
        this.canvas.width / 2,
        this.canvas.height / 2,
        undefined,
        undefined,
        200,
      );
    }
  }
}
