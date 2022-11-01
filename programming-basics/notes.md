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

When used in expressions, the variable get replaced by the value it's holding. This happens before anything else. JavaScript has an option for string templating. This replaces the single qoutes with back ticks. This allows for direct intergration with variables like: `${name}`.

## Proposition & Logic

Propositions are expressions that evaluate to either true or false. There are special operators to help for this scenario. A true or false value is called a *boolean*. Propositions in code are therefore known as *boolean expressions*. In code they're used the same as other expressions.

Operator    | Meaning                   |
------------|-------------------------- |
==          | Equals (Type insensitive) |
===         | Equals (Type sensitive)   |
<           | Smaller than              |
\>          | Greater than              |
<=          | Smaller than or equal     |
\>=         | Greater than or equal     |

Boolean expressions can be combined using logic operators. This allows us to create more complex condition for the application to meet. Available options are `&&` (AND), `||` (OR) & `^` (XOR). Boolean expression can be represented in truth tables, in which we specify all options for expressions and the result.

A       | B      | A\|\|B | A&&B   | A^B    | !A     |
--------|--------|--------|--------|--------|--------|
true    | true   | true   | true   | false  | false  |
true    | false  | true   | false  | true   | false  |
false   | true   | true   | false  | true   | true   |
false   | false  | false  | false  | false  | true   |

In order to use this power the ES gods have given us, we use something called an *if-statement*. Using this in your code allows the computer to decide whether or not to run the included statements. The block of code can be spotted fairly easily, it's surrounded by `{` and `}`. If the boolean expression evaluates to false, the code within the if-statement is simply skipped.

```js
let a = 20;

// Here we check a specific condition
if (a < 10) {
    // Everything in here get's executed if the boolean expression evaluates to true
    a = a + 10;
}

a = a - 1;
```

## The Web API

Every browser supports a set of features that can be accessed using JavaScript. These features are called the Web API (Application Programming Interface). The simplest way to use the Web API is by using a script-tag inside HTML, this is called *inline scripting*. We can also reference a JavaScript file inside the HTML tag. This seperates the visuals of the website from the logic and is considered good practice. The script-tag uses the source (`src`) attribute for that.

```html
<!-- Inline scripting -->
<script>
    const message = 'Hello JavaScript!'
    document.write(message);
</script>

<!-- External scripting -->
<script src="app.js"></script>
```

The `document`, `window` and `console` variables are special in regards to the Web API. They refer to instances of objects containing many function, including `log()` and `write()` shown earlier. `window.prompt()` is a new function, one that prompt the user for a value, which can be used in JavaScript for processing.

## Important Functions

function                | result                            |
------------------------|-----------------------------------|
console.log()           | Write something to the console    |
document.write()        | Write something to HTML document  |
windows.prompt()        | Ask the user for input via popup  |
