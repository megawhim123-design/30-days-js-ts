
 /** Day 03 – JavaScript Core
 * Topic: Conditionals & Loops
 * 
 * Notes:
 * Conditionals allow you to execute different code blocks based on certain conditions.
 * Conditional statements run different code depending on true or false conditions.

Conditional statements include:

if
if...else
if...else if...else
switch
ternary (? :)

When to use Conditionals
*Use if to specify a code block to be executed, if a specified condition is true
*Use else to specify a code block to be executed, if the same condition is false
*Use else if to specify a new condition to test, if the first condition is false
*Use switch to specify many alternative code blocks to be executed
*Use (? :) (ternary) as a shorthand for if...else
 * Loops enable you to repeat code execution multiple times with different values.
 

// The if Statement
// Use if to specify a code block to be executed, if a specified condition is true.

// Syntax:
if (condition) {
    // code to be executed if condition is true
}

// The else Statement
// use else to specify a code block to be executed, if the same condition is false.

// Syntax:
if (condition) {
    // code to excute if the condition is ture
} else {
    // code to excute if the condition is false
}

// The else if Statement
// Use else if to specify a new condition to test, if the first condition is false.

// Syntax:
if (condition) {
    // code to excute if condition is true
} else if (condition2) {
    // code to excute if the condition1 is false and condition2 is true
} else {
    // code go excute if the condition1 is false and condition2 is false
}
*/

// ===== Main Practice =====

let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning!");

} else if (hour < 18) {
    console.log("Good afternoo!");

} else {
    console.log("Good evening!");
}


// The switch Statement
// Use switch to specify many alternative code blocks to be executed.

// Example:

let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
        case 1:
            dayName = "Monday";
            break;
            case 2:
                dayNmae = "Tuesday";
                break;
                case 3:
                    dayName = "Wednesday";
                    break;
                    case 4:
                        dayName = "Thursday";
                        break;
                        case 5:
                            dayName = "Friday";
                            break;
                            case 6:
                                dayName = "Saturday";
                                break;
                                case 7:
                                    DayName = "Sunday";
                                    break;
                                    default:
                                        dayName = "Unkown";

                                        console.log('Today is ${dayName}');


}


// JavaScript Loops
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// for loop
// Print numbers 1 to 5

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/** Output:
 * 1
 * 2
 * 3
 * 4
 * 5
 */


// While Loop
// Print nunmbers 1 to 5 using a while loop

let i = 1;
while (i <= 5) {
    console.log(i);
    i++
}

// Output: is the same as the for loop above.

// Do...While Loop
// // A do...while loop will always execute at least onc

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// Output: is thesame as the previous loops.


// For...Of Loop (for iterables)
// // Loop through elements of an array

const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

/** Output:
 * Apple
 * Banana
 * Orange
 */

// For...In Loop (for object properties)
// Loop through properties of an object

const person = {
    name: "John",
    age: 35,
    job: "Developer"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}


/** Output:
 * name: John
 * age: 35
 * job: Developer
 */

 let attempts = 3;
 while (attempts > 0) {
    console.log("Trying...");
    attempts--;
 }

 /** Output:
 * Trying...
 * Trying...
 * Trying...
 */

// Task: Utility functions (sum, average, max, min)


const prompt = require("prompt-sync")();

// 1. Generate random number
const secretNumber = Math.floor(Math.random() * 10) +1;

// Number of tries
let remainingTries = 3;

console.log("Guess the number between 1 and 10");
console.log("You have 3 tries");

while(remainingTries > 0) {
    const guess = Number(prompt("Enter your guess: "));

    if (Number.isNaN(guess)) {
        console.log(" Please enter a valid number");
        continue;
    }

    if (guess === secretNumber) {
        console.log("Correct! You guessed the number");

        break;
        
    } else if (guess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("too low");
    }

    remainingTries--;
        console.log(`Tries left: ${remainingTries}`);

    }
    
    if (remainingTries === 0) {
        console.log(`Game over! The number was ${secretNumber}`);
    }




// ==== Summary ===

