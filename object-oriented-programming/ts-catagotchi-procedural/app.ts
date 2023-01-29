const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;

/**
 * Operation enumation
 * A way to define whether you want to increase or decrease a number
 */
enum Operation {
  increase,
  decrease,
}

// Cat data
let catStatus: string = 'Okay';
let catAwake: boolean = true;
let catEnergy: number = 10;
let catMood: number = 10;
let catHunger: number = 0;

// Tick data
const fps: number = 15;
const actionTick: number = Math.floor(fps * 1.5);
let ticksSinceAction: number = 0;
let ticksTotal: number = 0;

/**
 * Function that helps changing a stat from the cat.
 * The function returns the value that has to be added to the stat.
 * It checks whether the change is actually possible
 *
 * @param currentValue the current value of the stat
 * @param operation the operation you want to perform
 * @returns 1 if valid increase, -1 if valid decrease, 0 if not valid
 */
function getChangeValue(currentValue: number, operation: Operation): number {
  switch (operation) {
    case Operation.increase: return currentValue < 10 ? 1 : 0;
    case Operation.decrease: return currentValue > 0 ? -1 : 0;
    default: return 0;
  }
}

/**
 * Change the value of the energy stat
 *
 * @param operation do you want to increase or decrease?
 */
function changeEnergy(operation: Operation): void {
  catEnergy += getChangeValue(catEnergy, operation);
}

/**
 * Change the value of the mood stat
 *
 * @param operation do you want to increase or decrease?
 */
function changeMood(operation: Operation): void {
  catMood += getChangeValue(catMood, operation);
}

/**
 * Change the value of the hunger stat
 *
 * @param operation do you want to increase or decrease?
 */
function changeHunger(operation: Operation): void {
  catHunger += getChangeValue(catHunger, operation);
}

/**
 * Reset the ticksSinceAction variable to 0.
 */
function resetTicksSinceAction(): void {
  ticksSinceAction = 0;
}

/**
 * Player feeds Catagotchi. Vitals changed according to rules.
 */
function feed(): void {
  resetTicksSinceAction();
  changeHunger(Operation.decrease);

  // Flip a coin to determine whether the cat gets energy
  if (Math.random() > 0.5) {
    changeEnergy(Operation.increase);
  }
}

/**
 * Player plays with Catagotchi. Vitals changed according to rules.
 */
function play(): void {
  resetTicksSinceAction();
  changeMood(Operation.increase);
  changeEnergy(Operation.decrease);
}

/**
 * Player pets the Catagotchi. Vitals changed according to rules.
 */
function pet(): void {
  resetTicksSinceAction();
  changeMood(Operation.increase);
}

/**
 * Poor Catagotchi died.
 * Execute code when Catagotchi's vitals have reach critical level
 */
function catDied(): void {
  catStatus = 'Dead';
}

/**
 * Update the state of Catagotchi according to rules
 */
function updateCat(): void {
  // Check for the sleeping condition
  if (ticksTotal % actionTick === 0 && catAwake) {
    changeEnergy(Operation.decrease);
    changeMood(Operation.decrease);
    changeHunger(Operation.increase);
  } else if (ticksTotal % actionTick === 0) {
    changeEnergy(Operation.increase);
    changeHunger(Operation.increase);
  }

  // Check if the cat is falling asleep
  catAwake = ticksSinceAction < actionTick * 5;

  // Change the cat status
  if (catEnergy < 4 || catMood < 4 || catHunger > 6) {
    catStatus = 'Okay';
  } else if (catEnergy < 2 || catMood < 2 || catHunger > 8) {
    catStatus = 'Unhappy';
  } else {
    catStatus = 'Happy';
  }

  // Change status when asleep
  catStatus += catAwake ? ' & awake' : ' & asleep';

  // Check death
  if (catHunger >= 10 || catEnergy <= 0) {
    catDied();
  }
}

/**
 * Increase both tick-variables
 */
function increaseTicks(): void {
  ticksSinceAction += 1;
  ticksTotal += 1;
}

/**
 * Update the screen.
 *
 * @returns the thing that should be printed onto the screen
 */
function updateScreen(): string {
  // Verify if Catagotchi is still alive, and return appropriate string
  if (catStatus !== 'Dead') {
    return `Catagotchi!<br>
    Status: ${catStatus}<br>
    Mood:   ${catMood}<br>
    Energy: ${catEnergy}<br>
    Hunger: ${catHunger}`;
  }

  return 'Catagotchi Dead!';
}

/**
 * Runs the update functions
 */
function gameTick() {
  increaseTicks();
  updateCat();
  catScreen.innerHTML = updateScreen();
  setTimeout(() => gameTick(), 1000 / fps);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => feed());
document.querySelector('#btn-play').addEventListener('click', () => play());
document.querySelector('#btn-pet').addEventListener('click', () => pet());
