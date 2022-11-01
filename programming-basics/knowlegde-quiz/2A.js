// Given variables
age = 17;

/* Question 10
Given that there is a variable called age. This variable may hold any number. 

Now complete the following program such that the text "You are too young to drive a car" is console.logged when the value of age is under 18. 
This means that you have to replace the your_condition_here with a condition that meets the description.*/
if (age < 18) {
  console.log("You are too young to drive a car");
}

/* Question 11
Given that there is a variable called age. This variable may hold any number. 

Now complete the following program such that the text "You must be between 12 and 65 to ride this rollercoaster" 
is console.logged when the value of age is not between and including 12 and 65. 
This means that you have to replace the your_condition_here with a condition that meets the description */
if (age < 12 || age > 65) {
  console.log("You must be between 12 and 65 to ride this rollercoaster");
}