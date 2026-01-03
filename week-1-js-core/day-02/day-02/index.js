// Primitive Data Types
// JavaScript has seven primitive data types

// I. Number : represents both integer and floating-point numbers.
// Integer
let age = 20;
let negativeNumber = -35;

// Floating-point numbers
let price = 15.8;
let pi = 3.14;

// Speciall numeric values
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN; // Result of invalid mathematical operation

console.log(age); // Output: 20
console.log(price); // Output: 15.8
console.log(1 / 0); // Output: Infinity
console.log("hello" / 2); // Output: NaN

// JavaScript numbers are stored in 64-bit format (IEEE-754 standard), which can sometimes lead to precision issues with decimal calculations:
console.log(0.1 + 0.2); // Output: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // Output: false

// 2. Strings : represents sequences of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `).

let firstName = "Alice";
let lastName = 'Smith';
let greetings = `Hello, ${firstName}!`; // Template literal

console.log(firstName); // Output: Alice
console.log(greetings); // Output: Hello, Alice!

// Strings have properties and methods
console.log(firstName.length); // Output: 5
console.log(firstName.toUpperCase()); // Output: ALICE




