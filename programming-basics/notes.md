# Programming Basics Notes

Course Code: CU75003V1

## Hello World

Programming Basics teaches the creations of programs using the impirative programming JavaScript. The first instruction to cover is.

```js
document.write('Hello World!');
```

The *function* `write()` is called from the `document` *object*. This function takes as input a *string* of characters which is surrounded by single qoutes, in case of the example: `'Hello World!'`. The instruction is ended with a semicolon.

## Expressions

An expression is an a combination of values and operations that eventually evaluate into a single value. Let's demonstrate this with some simple mathematics.

Expression  | Evaluates to  | Operation         |
------------|---------------|-------------------|
4           | 4             | None              |
5           | 5             | None              |
4 + 5       | 9             | Addition          |
4 * 5       | 20            | Multiplication    |
20 / 5      | 4             | Division          |
4 % 3       | 1             | Modulo            |

As seen in the last three rows of the table: most operations have three parts: a left operand, an operator and a right operand. We can use these in code just like we can in mathematics.

```js
document.write(9 / 3);
```

## Variables

Computers use memory to store data. Variables are containers for this data. Veriables can be created, read and updated whenever you feel like it. A variable is defined using the `let` keyword. There is also the `const` keyword for declaring constant values, these values cannot be updated.

```js
// This line is a comment, ignored dring execution
// Creation of variables and constant
let number = 5;
const letter = 'w';

// Reading of variables and constants
console.log(number);
console.log(letter);

// Updating variables
number = number * 2;
```

When used in expressions, the variable get replaced by the value it's holding. This happens before anything else.

## Proposition

Propositions are expressions that evaluate to either true or false. There are special operators to help for this scenario. A true or false value is called a *boolean*. Propositions in code are therefore known as *boolean expressions*. In code they're used the same as other expressions.

Operator    | Meaning                   |
------------|-------------------------- |
==          | Equals (Type insensitive) |
===         | Equals (Type sensitive)   |
<           | Smaller than              |
\>          | Greater than              |
<=          | Smaller than or equal     |
\>=         | Greater than or equal     |

## Important Functions

function                | result                            |
------------------------|-----------------------------------|
document.write()        | Write something to HTML document  |
console.log()           | Write something to the console    |
