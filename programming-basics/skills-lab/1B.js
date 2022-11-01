// Make fake variables for testing purposes
let a = 14;
let b = 65;
const radius = 12;

/* Question 1
Given that there are two variables called a and b. These variables can hold any value. 
Create an algorithm that ‘swaps’ these values. This means that the result must be that:

The value of a is now stored in b.
The value of b is now stored in a. */
let c = a;
a = b;
b = c;

/* Question 2
Given that there are three variables called a, b and c. 
These variables can hold any value. Write an algorithm that ‘rotates’ these values. 
This means that the result must be that:

The value of a is now stored in b
The value of b is now stored in c
The value of c is now stored in a */
let d = a;
a = c;
c = b;
b = d;

/* Question 3
Given that there are four variables called a, b, c and d. 
These variables can hold any value. Write an algorithm that swaps the values of these variables:

The value of a is now stored in c
The value of b is now stored in d
The value of c is now stored in b
The value of d is now stored in a */
const e = a;
a = d;
d = b;
b = c;
c = e;

/* Question 4
Given a variable called radius. This variable might hold any number. 
Create a program that calculates the circumference and area of a circle with the value of radius as the radius. 
Store the circumference in a variable called circumference and the area in a variable called area. 
Use 3.14159 as the value for pi. */
const pi = 3.14159;
const circumference = 2 * pi * radius; 
const area = pi * radius * radius;

/* Question 5
Given that there are two variables a and b. The two variables may hold any number.
Create a variable called c and assign it with an expression following the rules of the Pythagorean theorem:

A2 + B2 = C2
√(A2 + B2) = C */
const c = Math.sqrt(a ** 2 + b ** 2);