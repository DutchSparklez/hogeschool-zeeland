/* Refactor the following code:

// In mathematics, the factorial of a non-negative integer n, 
// is the product of all positive integers less than or equal to n.
// I.e. the factorial of 5 equals to: 1 * 2 * 3 * 4 * 5 = 120 
// Users: change this variable to any positive integer you like
const input = 1;
// Compute the output
let number=1;
let output   = 1;
while (number <=input) {
  output *=number;
  number=+1;
}
// Print the result
document.write(`The factorial of <i>${input}</i> `);
document.write(`equals to: <i>${output}</i>`); 
-------------------------------------------------------------------------*/
const input = 1;
let number = 1;
let output = 1;

while (number <= input) {
  output *= number;
  number += 1;
}

document.write(`The factorial of <i>${input}</i> `);
document.write(`equals to: <i>${output}</i>`);