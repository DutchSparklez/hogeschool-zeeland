import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import ScoreItem from './ScoreItem.js';
import Fish from './Fish.js';
import Waste from './Waste.js';
import Capsule from './Capsule.js';

/**
 * The OceanCleanup game.
 */
export default class OceanCleanup extends Game {
  /**
   * The canvas to draw the game on.
   */
  private canvas: HTMLCanvasElement;

  /**
   * The event handler that deals with keyboard input.
   */
  private keyListener: KeyListener;

  /**
   * The player
   */
  private player: Player;

  /**
   * The instance of ScoreItems on the screen.
   */
  private scoreItems: ScoreItem[];

  /**
   * The number of ms until the next items spawns.
   */
  private timeToNextItem: number;

  /**
   * The number of fish that have been caught during the game.
   */
  private fishCaugt: number;

  /**
   * The score of the player.
   */
  private score: number;

  /**
   * Create an instance of OceanCleanup
   *
   * @param canvas The canvas to draw the game on.
   */
  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.player = new Player(this.canvas.width, this.canvas.height);
    this.scoreItems = [];
    this.resetTimeToNextItem();
    this.fishCaugt = 0;
    this.score = 0;
  }

  /**
   * Handle the keyboard input from the user.
   */
  public processInput(): void {
    // Moving up
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.moveUp();
    }

    // Moving down
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.moveDown();
    }
  }

  /**
   * Update the game.
   *
   * @param elapsed The time in ms since the previous update call.
   * @returns True, if the game is supposed to continue.
   */
  public update(elapsed: number): boolean {
    // Check for the loose condition
    // We check this here to have the game continue for one more frame after losing.
    if (this.gameOver()) {
      return false;
    }

    // Loop over all items
    this.scoreItems.forEach((item, index) => {
      // Update all items
      item.update(elapsed);

      // Check for collision
      const isColliding = this.player.collidesWithItem(item);

      // Check for a score change and other collision effects
      if (isColliding) {
        this.processCollision(item);
      }

      // Check for removing the item
      if (isColliding || item.getPosX() > this.canvas.width) {
        this.scoreItems.splice(index, 1);
      }
    });

    // Create a new instance of an item when necessary
    this.spawnNewItemsWhenReady();

    // Update the timer
    this.timeToNextItem -= elapsed;

    // Continue to the next frame
    return true;
  }

  /**
   * Draw the game onto the canvas.
   */
  public render(): void {
    // Clear the canvas
    CanvasUtil.clearCanvas(this.canvas);

    // Render the score texts
    CanvasUtil.writeText(this.canvas, `Score: ${this.score}`, 24, 24, 'left', undefined, 24, 'cyan');
    CanvasUtil.writeText(this.canvas, `Fishes Caught: ${this.fishCaugt}`, 24, 48, 'left', undefined, 24, 'cyan');

    // Check whether the game is lost
    if (this.gameOver()) {
      // Render game-over
      CanvasUtil.writeText(this.canvas, 'Game Over', Math.floor(this.canvas.width / 2), Math.floor(this.canvas.height / 2), 'center', undefined, 72, 'cyan');
    } else {
      // Rander the game
      this.player.render(this.canvas);

      // Render the items
      this.scoreItems.forEach((item) => item.render(this.canvas));
    }
  }

  /**
   * Reset the timer that determines whether a new item should be spawned.
   */
  private resetTimeToNextItem(): void {
    this.timeToNextItem = Math.random() * 300 + 300;
  }

  /**
   * Check whether the player has lost the game.
   *
   * @returns True if the player has lost the game.
   */
  private gameOver(): boolean {
    return this.score < 0 || this.fishCaugt >= 10;
  }

  /**
   * Spawn new items if the timer (timeToNextItem) has run out.
   */
  private spawnNewItemsWhenReady(): void {
    if (this.timeToNextItem <= 0) {
      // Reset the timer
      this.resetTimeToNextItem();

      // Add a regular score item
      this.scoreItems.push(Math.random() < 0.7
        ? new Fish(this.canvas.height)
        : new Waste(this.canvas.height));

      // Check whether we add a capsule
      if (Math.random() < 0.05) {
        this.scoreItems.push(new Capsule(this.canvas.height));
      }
    }
  }

  /**
   * Process the actions after an item has collided with the user.
   *
   * @param item the item with which the user HAS collided.
   */
  private processCollision(item: ScoreItem): void {
    this.score += item.getScore();
    this.fishCaugt += item instanceof Fish ? 1 : 0;

    if (item instanceof Capsule) {
      // Remove all trash and add their scores
      this.scoreItems = this.scoreItems.filter((potentialWaste) => {
        if (potentialWaste instanceof Waste) {
          this.score += potentialWaste.getScore();
          return false;
        }
        return true;
      });
    }
  }
}
