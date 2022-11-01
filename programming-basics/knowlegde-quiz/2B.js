// Given variables
const left = 324;
const right = 124;
const grade = 6.7;

/* Question 2
We want to imitate the behavior af a balance scale, also known as a weighing scale, in a program. 
A typical balance consists of two plates or bowls suspended at equal distances from a fulcrum. When users place objects on the plates, 
it starts to level off. The heaviest plate is moving downwards and the lightest plate is moving upwards. 
When the weight of both plates is equal, then the balance reaches static equilibrium.

Both plates are imitated in our program by the variables left and right. 
These variables are already created and may hold any positive number. 
Now create an if-else structure that outputs (using console.log()) the following:

When static equilibrium is reached: Both plates are equally heavy
When the left plate is heavier: The left plate is heavier
When the right plate is heavier: The right plate is heavier 

You need two conditions */
let output = 'Both plates are equally heavy';

if (left > right) {
  output = 'The left plate is heavier';
} else if (right > left) {
  output = 'The right plate is heavier';
}

console.log(output);

/* Question 3
Given that there is a variable called grade. This variable can hold any number greater than 0. 
Write an algorithm that outputs (using console.log()) the exact following:

Below 5.5 - insufficient
Between 5.5 (including) - and 7 (not including) - sufficient
Between 7 (including) and 9 (not including) - good
Between 9 (including) and 10 (including) - excellent
Larger than 10 - invalid */
if (grade < 5.5) {
  console.log('insufficient');
} else if (grade < 7) {
  console.log('sufficient');
} else if (grade < 9) {
  console.log('good');
} else if (grade <= 10) {
  console.log('excellent');
} else {
  console.log('invalid');
}