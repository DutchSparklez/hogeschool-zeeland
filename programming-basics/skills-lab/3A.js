/* Question 1
Use a for loop to log - using console.log() - the first 10 numbers of the following series. 
Each number in the sequence should be on a new line in the console.
1 4 9 16 25 36 49 ... */
let firstNumber = 0;
for (let i = 0; i < 10; i++) {
  firstNumber += 2 * i + 1;
  console.log(firstNumber);
}

/* Question 2
Use a do-while loop to log - using console.log() - the first 32 numbers of the following series. 
1 2 4 8 16 32 64 128 ... */
let secondNumber = 0;
do {
  console.log(2 ** secondNumber++);
} while (secondNumber < 32);

/* Question 3
Use a for loop to log - using console.log() - the first 10 numbers of the following series:
0 1 3 6 10 15 21 28 ... */
let thirdNumber = 0;
for (let i = 0; i < 10; i++) {
  thirdNumber += i;
  console.log(thirdNumber);
}

/* Question 4
Use a for loop to log - using console.log() - the first 10 numbers of the following series:
1 2 5 10 17 26 37 ... */
let fourthNumber = 1;
for (let i = 0; i < 10; i++) {
  console.log(i + fourthNumber);
  fourthNumber += 2 * i
}

/* Question 5
Use a for loop to log - using console.log() - the 12 numbers of the following series:
22 20 0 16 14 0 10 8 0 4 2 0 */
for (let i = 0; i < 12; i++) {
  console.log((i + 1) % 3 == 0 ? 0 : 22 - 2 * i);
}

/* Question 6
Use a for loop to log - using console.log() - the first 12 numbers of the following series:
2 4 2 16 32 5 128 256 8 1024 2048 11 ... */
for (let i = 0; i < 12; i++) {
  console.log((i + 1) % 3 == 0 ? i : 2 ** (i + 1));
}