// Variables
// Declaring & assigning Variables

// Using let

let age = 20;
console.log(age); // output: 25

age = 30; // Reassigning the value
console.log(age); // Output: 30


// Using var (older method)
var a;
var b = 2;
console.log(b); // Output: 2
console.log(a); // Output: undefined
a = 10;
b = a;
console.log(a); // Output: 10
console.log(b); // Output: 10


var name = "Christy Odoh";
console.log(name); // Output: Christy Odoh

var name = "Princess Gideon"; // Output: var allows redeclaration
console.log(name); // Output: Princess Gideon


 /* Variable Naming Rules
  When naming variables in JavaScript, follow these rules:
 Names can contain letters, digits, underscores, and dollar signs
Names must begin with a letter, $ or _
Names are case sensitive (myVar and myvar are different variables)
Reserved words (like JavaScript keywords) cannot be used as names */

 // Valid variable names
let fristName = "Christy";
let $price = 50.00;
let _count = 10;
let properCamelCase = "A String";

// Invalid variable names
// let 1stName = 'Jane"; // Cannot start with a digit
// let function = " myname"; // Cannot use reserved words

// Introducing Constants
/* constants are declared using the const keyword. Thet cannot be reassigned a new value after their 
initial assignment.*/

const PI = 3.14159;

console.log(PI) // Output : 3.14159
//Trying to reassign will cause an error
// PI = 3.14; // TypeError: Assignment to constant variable.

// Why Developers Use Constants
/* Code clarity: They signal to other developers that this value should not change
Prevention of errors: They protect against accidental reassignment
Performance optimizations: In some cases, JavaScript engines can optimize code with constants*/

// Syntax & Decleration Rules
/* By convention, constants that represent fixed values are often written in UPPERCASE_WITH_UNDERSCORES, though this is a style preference, not a language requirement.*/

const CONSTANT_NAME = 5000; // Correct by convention
/* When working with constants, keep these rules in mind:

Constants must be initialized at the time of declaration
You cannot declare a constant without assigning a value
Constants have block scope (similar to let) */

const API_KEY = "abc123"; // Correct

{
    const BLOCK_CONSTANT = "I'm local to this block";
    console.log(BLOCK_CONSTANT); // Output: I'm local to this block.
    // console.log(BLOCK_CONSTANT); // ReferenceError: BLOCK_CONSTANT is not defined

}

// Constants vs Variables
let count = 1;
count = 2; // Variable (can be reassigned) and it works fine

const MAX_USERS = 100;
// MAX_USERS = 200; // TypeError: Assignment to constant variable.

{
    var x = 10;
    const y =20;
}

console.log(x); // Output: 10
// console.log(y); // ReferenceError: y is not defined

// Constants and Objects
/* An important distinction to understand is that while a constant cannot be reassigned, the content of objects or arrays declared as constants can be modified. */

const user = {
    name: "Jay",
    age: 40
};

// You can modify properties
user.age = 45;
console.log(user); // Output: {name: "Jay", age: 45}

// But you cannot reassign the entire object
// user = { name: "Alice", age: 39 }; // TypeError: Assignment to constant variable.


// Arrays with const

const numbers = [1, 2, 3, 4, 5];

// You can modify elements
numbers.push(6);
console.log(numbers); // Output: [1,2, 3, 4, 5, 6]

// But you cannot reassign the entire array
// numbers = [6, 7, 8]; // TypeError: Assignment to constant variable.

// Preventing Object Mutations
// If you want to make an object truly immutable, you can use Object.freeze():

const settings = Object.freeze({
    theme: "dark",
    notification: true,
    fontSize: 16
});

// Modification attempts are silently ignored in non-strict mode
settings.theme = "light";
console.log(settings.theme); //Output: "dark" (changed)


// Application Constants


const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const SECONDS_IN_MINUTE = 60;

function calculateTotalSeconds(days, hours, minutes) {
    return days * DAYS-IN_WEEK * HOURS_IN_DAY * SECONDS_IN_MINUTE * SECONDS_IN_MINUTE +
           hours * HOURS_IN_DAY * SECONDS_IN_MINUTE + 
           minutes * SECONDS_IN_MINUTE;
}

const totalSSeconds = calculateTotalSeconds(1, 2, 30);
console.log('Total seconds: ${totalSeconds}'); // Output: Total seconds: 95400.
 
// Event Types

const EVENT = {
    CLICK: "click",
    HOVER: "mouseover",
    SUBMIT: "submit",
    LOAD: "load"   
};

function addEventHandler(element, eventTYpe, handler) {
    if (Object.values(EVENT).includes(eventTYpe)) {
        element.addEventListener(eventTYpe, handler);
        console.log('Event handler for ${eventype} added.');
    }
}

// Usage (in a browser environment)
// addEventHandler(document.getElementById('submit-button'), EVENTS.CLICK, () => {
//   console.log('Button clicked!');
// });


// Daily task
const dailyTask = "Completed JavaScript daily exercise";
console.log("Today's Task:");
console.log(dailyTask); // Output: Today's Task: Completed JavaScript daily exercise.

