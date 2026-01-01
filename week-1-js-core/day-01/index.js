// Variables
// Declaring & assigning Variables

// Using let

let age = 20;
console.log(age); // output: 25

age = 30; // Reassigning the value
console.log(age); // Output: 30

// Using const
const PI = 3.14159;
console.log(PI) // Output : 3.14159
//Trying to reassign will cause an error
// PI = 3.14; // TypeError: Assignment to constant variable.

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

// Daily task
const dailyTask = "Complete JavaScript daily exercise";
console.log("Today's Task:");
console.log(dailyTask); // Output: Today's Task: Complete JavaScript daily exercise

