import ClockDisplay from './ClockDisplay.js';

const clockDisplay = new ClockDisplay(document.getElementById('time') as HTMLDivElement);

window.addEventListener('load', () => {
  document.getElementById('setTime').addEventListener('click', () => {
    const hoursInput: HTMLInputElement = document.getElementById('hours') as HTMLInputElement;
    const hours: number = Number.parseInt(hoursInput.value, 10);
    const minutesInput: HTMLInputElement = document.getElementById('minutes') as HTMLInputElement;
    const minutes: number = Number.parseInt(minutesInput.value, 10);
    const secondsInput: HTMLInputElement = document.getElementById('seconds') as HTMLInputElement;
    const seconds: number = Number.parseInt(secondsInput.value, 10);

    clockDisplay.setTime(hours, minutes, seconds);
  });

  document.getElementById('tick').addEventListener('click', () => {
    clockDisplay.timeTick();
  });
});
