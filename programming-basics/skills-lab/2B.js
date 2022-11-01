// Given variables
const a = true;
const b = false;

const month = 4;
const year = 2012;

const lapTime = 8;

/* Question 1
Given the boolean variables a and b. These variables can hold either true or false. 
Create a variable called c and assign it true if a && b are both true otherwise false.

But you are NOT allowed to use the && operator. Only use (nested) if, else-if and else statements. */
// let c = false

if (a) {
  if (b) {
    c = true;
  }
}

/* Question 2
Given the boolean variables a and b. These variables can hold either true or false. 
Create a variable called c and assign it true if a || b otherwise false.

But you are NOT allowed to use the || operator. Only use (nested) if, else-if and else statements. */
// let c = false;

if (a) {
  c = true;
}

if (b) {
  c = true;
}

/* Question 3
Given the boolean variables a and b. These variables can hold either true or false. 
Create a variable called c and assign it true if a ^ b otherwise false.

But you are NOT allowed to use the ^ operator. Only use (nested) if, else-if and else statements. */
// let c = false;

if (a != b) {
  c = true;
}

/* Question 4
Given that there are two variables month and year. 
The month variable may hold a number between 1 and 12 representing a month in a year (1 equals to January, 2 to February, etc.). 
The year variable holds a number representing a year (1970, 2021, etc.). 
Use these two variables and the console to log the number of days in that month, taking into account leap years. Examples are:

For month=3 and year=2019 the output should be:
March has 31 days in 2019

For month=2 and year=2020 the output should be:
February has 29 days in 2020 */
let monthName = 'January'
let numberOfDays = 31;

if (month == 2) {
  monthName = 'February';
  numberOfDays = (year % 4 == 0 && year % 100) || year % 400 == 0 ? 29 : 28;
} else if (month == 3) {
  monthName = 'March';
  numberOfDays = 31;
} else if (month == 4) {
  monthName = 'April';
  numberOfDays = 30;
} else if (month == 5) {
  monthName = 'May';
  numberOfDays = 31;
} else if (month == 6) {
  monthName = 'June';
  numberOfDays = 30;
} else if (month == 7) {
  monthName = 'July';
  numberOfDays = 31;
} else if (month == 8) {
    monthName = 'August';
  numberOfDays = 31;
} else if (month == 9) {
  monthName = 'September';
  numberOfDays = 30;
} else if (month == 10) {
  monthName = 'October';
  numberOfDays = 31;
} else if (month == 11) {
  monthName = 'November';
  numberOfDays = 30;
} else if (month == 12) {
  monthName = 'December';
  numberOfDays = 31;
}

console.log(`${monthName} has ${numberOfDays} days in ${year}`)

/* Question 5
Given a variable called lapTime which holds a number representing a lap time in seconds. 
Write an algorithm that outputs (console.log()) a text string that represents that number in a more readable way, using minutes and seconds. 

For example, when lapTime is 145 it must output exactly:
Lap time: 2:25

For example, when lapTime is 2 it must output exactly:
Lap time: 0:02 */
let laptimeSeconds = lapTime % 60;
const laptimeMinutes = (lapTime - laptimeSeconds) / 60;

if (laptimeSeconds < 10) {
  laptimeSeconds = '0' + laptimeSeconds;
}

console.log(`Lap time: ${laptimeMinutes}:${laptimeSeconds}`);