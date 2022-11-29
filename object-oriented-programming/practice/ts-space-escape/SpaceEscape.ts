import { Game } from './GameLoop.js';

import CanvasUtil from './CanvasUtil.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Meteor from './Meteor.js';
import GameItem from './GameItem.js';
import PowerUp from './PowerUp.js';

/**
 * The SpaceEscape class. The Game.
 */
export default class SpaceEscape extends Game {
  /**
   * The canvas where the game is drawn.
   */
  private canvas: HTMLCanvasElement;

  /**
   * The keylistener that deals with key-events.
   */
  private keyListener: KeyListener;

  /**
   * The instance of the player object.
   */
  private player: Player;

  /**
   * The list of items that you try to hit / avoid.
   */
  private items: GameItem[];

  /**
   * The time passed during the entire game in ms.
   */
  private timePassed: number;

  /**
   * The time in ms untill the next item is supposed to appear.
   */
  private timeToNextItem: number;

  /**
   * The time in ms untill the shield energy is supposed to drop.
   */
  private timeToNextShieldDrop: number;

  /**
   * The amount of energy the shield has left.
   */
  private shieldsLeft: number;

  /**
   * Whether the game is paused or not.
   * = 0: Game Over
   * < 0: Running
   * > 0: Paused
   */
  private gamePaused: number;

  /**
   * Create an instance of the SpaceEscape class.
   *
   * @param canvas the place to draw the game.
   */
  public constructor(canvas: HTMLCanvasElement) {
    // Create an instance of the super class
    super();

    // Assign the default values to the properties
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.player = new Player(this.canvas.height);
    this.items = [];
    this.timePassed = 0;
    this.timeToNextItem = 500;
    this.timeToNextShieldDrop = 1500;
    this.shieldsLeft = 20;
    this.gamePaused = -1;
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    // Check whether the player is commanding the ship to move up
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
      this.player.moveUp();
    }

    // Check whether the player is commanding the ship to move down
    if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
      this.player.moveDown();
    }

    // Check whether the player is trying to pause / unpause the game.
    if (this.keyListener.keyPressed(KeyListener.KEY_ESC)) {
      this.gamePaused *= -1;
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // Check whether the game is running
    if (this.gamePaused < 0) {
      // Check whether we need a new object
      if (this.timeToNextItem <= 0) {
        // Add an item to the object based on change
        this.items.push(
          Math.random() > 0.2
            ? new Meteor(this.canvas.width, this.canvas.height)
            : new PowerUp(this.canvas.width, this.canvas.height),
        );

        // Reset the new item counter
        this.timeToNextItem = 500;
      }

      // Check whether it's time to decrease the shield's energy
      if (this.timeToNextShieldDrop <= 0) {
        // Decrease the shield's energy
        this.shieldsLeft -= 1;

        // Reset the timer
        this.timeToNextShieldDrop = 1500;
      }

      // Update the player and all objects
      this.player.update();
      this.items.forEach((item, index) => {
        // Update the item
        item.update(elapsed);

        // Check whether we've collided with the player
        const itemCollided = this.player.itemCollided(item);

        // Check whether the item needs to be removed
        if (item.getPosX() < 0 || itemCollided) {
          // Remove the item
          this.items.splice(index, 1);
        }

        // Check whether we need to modify the shield
        if (itemCollided) {
          // Modify the shield
          this.shieldsLeft += item.getShieldModifier();
        }
      });

      // Check whether the shield has run out of energy
      if (this.shieldsLeft <= 0) {
        // Make sure the shield energy is displayed as 0
        this.shieldsLeft = 0;

        // Tell the game to quit
        this.gamePaused = 0;
      }

      // Update all time variables
      this.timeToNextItem -= elapsed;
      this.timeToNextShieldDrop -= elapsed;
      this.timePassed += elapsed;
    }

    // Continue the game
    return true;
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    // Clear the canvas
    CanvasUtil.clearCanvas(this.canvas);

    // Calculate the time in seconds
    const timeInSeconds = Math.floor(this.timePassed / 1000);

    // Check whether the game is running
    if (this.gamePaused < 0) {
      // Write the score and time to the screen.
      CanvasUtil.writeTextToCanvas(this.canvas, `Shield: ${this.shieldsLeft}`, 20, 80, 'left');
      CanvasUtil.writeTextToCanvas(this.canvas, `Time: ${timeInSeconds}`, 20, 130, 'left');

      // Render the item and the player
      this.items.forEach((item) => item.render(this.canvas));
      this.player.render(this.canvas);
    } else {
      // Make the player can't see the game
      CanvasUtil.fillCanvas(this.canvas, 'black');

      // Calculate everything
      const centerX = Math.floor(this.canvas.width / 2);
      const centerY = Math.floor(this.canvas.height / 2);

      if (this.gamePaused < 0) {
        // Tell the user the game is paused
        CanvasUtil.writeTextToCanvas(this.canvas, 'Paused', centerX, centerY);
      } else {
        // Tell the user the final score
        const message = `Game Over, You Lasted ${timeInSeconds} seconds.`;
        CanvasUtil.writeTextToCanvas(this.canvas, message, centerX, centerY);
      }
    }
  }
}
