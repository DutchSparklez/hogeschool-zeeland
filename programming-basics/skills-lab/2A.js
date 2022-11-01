// Given variables
let a = 56;
let b = 12;
let c = 213;

let bookCount = 12;
let job = 'programmer';
let inTrain = true;

let grade = 4.5;

let price = 123.42;
let isGoldMember = true;

/* Question 1
Given that there are two variables called a and b. These variables can hold any number. Create an algorithm that sorts these values such that:

The value of a is always the lowest number
The value of b is always larger than or equal to a */
if (a > b) {
    const z = a;
    a = b;
    b = z;
}

/* Question 2
Given that there are three variables called a, b and c. These variables can hold any number. Create an algorithm that sorts these values such that:

The value of a is always the lowest number
The value of b is always larger than or equal to a and smaller than c
The value of c is always the highest number
So, you actually sort the three values from lowest to highest. */
if (c < a) {
    const z = a;
    a = c;
    c = z;
}

if (b < a) {
    const z = a;
    a = b;
    b = z;
}

if (c < b) {
    const z = b;
    b = c;
    c = z;
}

/* Question 3
Given that there are three variables:

bookCount - holds a number that represents the amount of books the user is carrying at the moment
job - holds a job title, like "teacher",  "programmer" or "police officer"
inTrain - holds a boolean which is true if the user is currently in the train

Create an algorithm using an if statement that outputs (using console.log()) the following exact message when the user is a teacher, carries one or more books and is currently in a train:
Finally I can enjoy my book */
if (job == 'teacher' && bookCount > 0 && inTrain) {
    console.log('Finally I can enjoy my book');
}

/* Question 4
Given that there is a variable called grade. This variable can hold any number greater than 0. 
Write an algorithm that outputs (using console.log()) the exact text 'failed' when the value of grade is smaller than 5.5 */
if (grade < 5.5) {
    console.log('failed');
}

/* Question 5
Given that there is a variable called grade. Write an algorithm that outputs (using console.log()) 
the exact text "passed" if the value of grade is greater than or equal to 5.5 and lower than or equal to 10. */
if (grade >= 5.5 && grade <= 10) {
    console.log('passed');
}

/* Question 6
A webshop wants to implement discount rules for their gold members. Create an algorithm that outputs (using console.log) the following:

For ordinary customers:
  Your price is: €145.95

For gold members:
  Your price is: €145.95
  Thank you for your purchase dear Gold Member

For gold members with a price of €250.- or more:
  Your price is: €500
  Thank you for your purchase dear Gold Member
  You are awarded a discount of 10%
  Your new price is: €450

Given that there is a variable called price. This variable may hold any positive number. 
There is also a boolean variable isGoldMember that is true when the user is a gold member. */
console.log('Your price is: €' + price);

if (isGoldMember) {
    console.log('Thank you for your purchase dear Gold Member');

    if (price >= 250) {
        price *= 0.9;
        console.log('You are awarded a discount of 10%');
        console.log('Your new price is: €' + price);
    }
}