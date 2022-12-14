import CanvasUtil from './CanvasUtil.js';
import Car from './Car.js';
import Coin from './Coin.js';
import { Game } from './GameLoop.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';

export default class DareDriver extends Game {
  private canvas: HTMLCanvasElement;

  private keyListener: KeyListener;

  private player: Player;

  private scoreItems: ScoreItem[];

  private laneLeft: number;

  private laneCenter: number;

  private laneRight: number;

  private timeToNextItem: number;

  private timeLeft: number;

  private score: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = 600;
    this.keyListener = new KeyListener();
    this.player = new Player(285, this.canvas.height - 20);
    this.scoreItems = [];
    this.laneLeft = 165;
    this.laneCenter = 285;
    this.laneRight = 410;
    this.timeToNextItem = Math.floor(Math.random()) * 200 + 500;
    this.timeLeft = 5_000;
    this.score = 0;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.keyListener.keyPressed(KeyListener.KEY_LEFT)) {
      switch (this.player.getPosX()) {
        case this.laneRight: this.player.move(this.laneCenter); break;
        case this.laneCenter: this.player.move(this.laneLeft); break;
        default: break;
      }
    }

    if (this.keyListener.keyPressed(KeyListener.KEY_RIGHT)) {
      switch (this.player.getPosX()) {
        case this.laneLeft: this.player.move(this.laneCenter); break;
        case this.laneCenter: this.player.move(this.laneRight); break;
        default: break;
      }
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // Loop over all score items
    this.scoreItems.forEach((item, index) => {
      // Update the score items
      item.update(elapsed);

      // Check for collision, update the score if necessary
      const isColliding = this.player.collideWithItem(item);
      this.score = isColliding ? this.score + item.getScore() : this.score;

      // Check if the item is out of the screen or collides with the player
      if (item.getPosY() > this.canvas.height || isColliding) {
        // Remove the item
        this.scoreItems.splice(index, 1);
      }
    });

    // Check if it is time to add a new item
    if (this.timeToNextItem <= 0) {
      // Select a random lane for the new item
      let lane = this.laneLeft;
      switch (Math.floor(Math.random() * 3)) {
        case 0: lane = this.laneCenter; break;
        case 1: lane = this.laneRight; break;
        default: break;
      }

      // Add a new item
      this.scoreItems.push(Math.random() < 0.65
        ? new Car(lane)
        : new Coin(lane));

      // Reset the time to the next item
      this.timeToNextItem = Math.floor(Math.random() * 200) + 500;
    }

    // Update the time left and the time to the next item
    this.timeLeft -= elapsed;
    this.timeToNextItem -= elapsed;

    // Check whether the game is going to continue
    return this.timeLeft > 0;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    // Clear the canvas
    CanvasUtil.clearCanvas(this.canvas);

    // Check whether there is time left
    if (this.timeLeft > 1000) {
      // Print information onto the screen
      CanvasUtil.writeTextToCanvas(
        this.canvas,
        `Score: ${this.score}`,
        32,
        32,
        'left',
        'consolas',
        32,
        'cyan',
      );
      CanvasUtil.writeTextToCanvas(
        this.canvas,
        `Time left: ${Math.floor(this.timeLeft / 1000)}`,
        32,
        64,
        'left',
        'consolas',
        32,
        'cyan',
      );

      // Render the player
      this.player.render(this.canvas);

      // render all score items
      this.scoreItems.forEach((item) => item.render(this.canvas));
    } else {
      // Print the final score
      CanvasUtil.writeTextToCanvas(
        this.canvas,
        `Final score: ${this.score}`,
        Math.floor(this.canvas.width / 2),
        Math.floor(this.canvas.height / 2),
        'center',
        'consolas',
        44,
        'white',
      );
    }
  }
}
